import { useEffect, useState } from 'react';

// Scroll progress for an element, clamped to [0,1].
//   0 when the top of the element is at the bottom of the viewport;
//   1 when the bottom of the element reaches the top.
// Pass `scope` to scroll-track a scrollable ancestor instead of window.
export function useScrollProgress(ref, scope) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const scopeEl = scope?.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = scopeEl ? scopeEl.clientHeight : window.innerHeight;
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      setP(Math.max(0, Math.min(1, traveled / total)));
    };
    const target = scopeEl || window;
    target.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      target.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, scope]);
  return p;
}

// Scroll progress clamped to when the element is taller than the viewport —
// 0 when the top first hits the viewport, 1 when the bottom leaves.
export function useStickyProgress(ref, scope) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const scopeEl = scope?.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = scopeEl ? scopeEl.clientHeight : window.innerHeight;
      const h = rect.height - vh;
      if (h <= 0) {
        setP(rect.top < 0 ? 1 : 0);
        return;
      }
      const t = -rect.top / h;
      setP(Math.max(0, Math.min(1, t)));
    };
    const target = scopeEl || window;
    target.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      target.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, scope]);
  return p;
}
