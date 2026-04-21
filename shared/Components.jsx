/* global React */
// Fluid Universe — shared components used by both directions

// ─── Claim-status badge ───────────────────────────────────────
function Badge({ kind = "exact", children }) {
  const map = {
    exact:    ["b-exact",   "Exact"],
    closure:  ["b-closure", "Within closure"],
    reduce:   ["b-reduce",  "Controlled reduction"],
    effect:   ["b-effect",  "Effective closure"],
    num:      ["b-num",     "Numerically located"],
    open:     ["b-open",    "Open"],
  };
  const [cls, label] = map[kind] || map.exact;
  return <span className={`fu-badge ${cls}`}>{children || label}</span>;
}

// ─── Source-file chip ─────────────────────────────────────────
function Chip({ children, href, label }) {
  const content = label != null ? label : children;
  if (href) {
    return (
      <a className="fu-chip" href={href} target="_blank" rel="noopener noreferrer"
         style={{ textDecoration: "none", cursor: "pointer" }}>
        {content}
      </a>
    );
  }
  return <span className="fu-chip">{content}</span>;
}

// ─── Equation card ────────────────────────────────────────────
function EqCard({ label, plain, tex, chips = [] }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.katex) {
      try {
        window.katex.render(tex, ref.current, { throwOnError: false, displayMode: true });
      } catch (e) { ref.current.textContent = tex; }
    }
  }, [tex]);
  return (
    <div className="fu-eq">
      {label && <div className="fu-eq-label">{label}</div>}
      {plain && <div className="fu-eq-plain">{plain}</div>}
      <div className="fu-eq-body" ref={ref} />
      {chips.length > 0 && (
        <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {chips.map((c, i) => {
            if (typeof c === "string") return <Chip key={i}>{c}</Chip>;
            return <Chip key={i} href={c.href}>{c.label}</Chip>;
          })}
        </div>
      )}
    </div>
  );
}

// Inline TeX (smaller, flows with text)
function Tex({ tex, display = false }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.katex) {
      try {
        window.katex.render(tex, ref.current, { throwOnError: false, displayMode: display });
      } catch (e) { ref.current.textContent = tex; }
    }
  }, [tex, display]);
  return <span ref={ref} />;
}

// ─── Scroll-linked progress (0..1) ────────────────────────────
function useScrollProgress(ref, scope) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    const scopeEl = scope?.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const root = scopeEl || document.documentElement;
      const vh = scopeEl ? scopeEl.clientHeight : window.innerHeight;
      // progress: 0 when top hits bottom of viewport, 1 when bottom hits top
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      setP(Math.max(0, Math.min(1, traveled / total)));
    };
    const target = scopeEl || window;
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scope]);
  return p;
}

// ─── Scroll progress clamped to when element fills viewport ───
function useStickyProgress(ref, scope) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    const scopeEl = scope?.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = scopeEl ? scopeEl.clientHeight : window.innerHeight;
      // progress 0 when top enters viewport, 1 when bottom leaves
      const h = rect.height - vh;
      if (h <= 0) { setP(rect.top < 0 ? 1 : 0); return; }
      const t = -rect.top / h;
      setP(Math.max(0, Math.min(1, t)));
    };
    const target = scopeEl || window;
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scope]);
  return p;
}

Object.assign(window, { Badge, Chip, EqCard, Tex, useScrollProgress, useStickyProgress });
