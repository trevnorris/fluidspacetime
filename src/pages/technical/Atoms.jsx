import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 09 — Atomic Spectra, g-factors, Anomalies — TECHNICAL

export default function TechnicalAtoms() {
  const topic = {
    n: "09",
    part: "II",
    partName: "Applications",
    slug: "atoms",
    title: "Atomic Spectra, g-factors, Anomalies",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Coulomb-limit atomic physics is a carry-forward target of the current
          reduction stack; the anomaly package still has one branch datum open.
        </TPTitle>
        <TPLede>
          The current source stack supports the localized Maxwell reduction, the
          Coulomb-limit bookkeeping needed for atomic bound states, a rough
          hydrogenic scaling argument, and a sharply narrowed g−2
          branch-selection problem. It does <em>not</em> currently justify the
          older site wording that treated the hydrogen spectrum or the leading
          anomaly term as finished derived results of the published 4D stack.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="reduce">Coulomb-limit target</Badge>
          <Badge kind="open">Hydrogenic precision still provisional</Badge>
          <Badge kind="open">g−2 branch datum still live</Badge>
          <Chip label="4D · Maxwell" href={ZENODO.maxwell.url} />
          <Chip label="4D · 1PN bridge" href={ZENODO.bridge.url} />
        </div>
      </section>

      <TPSection
        anchor="coulomb"
        eyebrow="Coulomb limit"
        heading="The atomic sector starts from the controlled brane Maxwell reduction."
      >
        <TPBody>
          In the far-field zero-mode limit, a charged throat sources the usual
          Coulomb potential on the brane:
        </TPBody>

        <EqCard
          label="◇ static Coulomb potential · controlled reduction"
          plain="This is the standard Coulomb law read through the localized Maxwell zero mode."
          tex="\begin{aligned} a_0(r) &\;=\; -\frac{Z\,e_{\rm eff}}{4\pi\varepsilon_0\,r}, \\ e_{\rm eff} &\;=\; e_\star/\sqrt{Z_{\rm int}} \end{aligned}"
        />

        <TPBody>
          If one then takes the non-relativistic Coulomb limit for a slow probe,
          the target effective equation is the standard Schrödinger problem
        </TPBody>

        <EqCard
          label="◇ Coulomb-limit target equation"
          plain="This is the intended brane-effective non-relativistic limit. The current site should treat it as a controlled target, not as a finished exact theorem of the full stack."
          tex="i\hbar\,\partial_t \chi \;=\; \left[-\frac{\hbar^2}{2m_e}\nabla^2 - \frac{Z\,e_{\rm eff}^2}{4\pi\varepsilon_0\,r}\right]\chi"
        />
      </TPSection>

      <TPSection
        anchor="spectrum"
        eyebrow="hydrogenic target"
        heading="The current source record supports hydrogenic structure, not an exact closed-site claim."
      >
        <TPBody>
          The standard Coulomb target has the usual textbook energy ladder
        </TPBody>

        <EqCard
          label="◇ hydrogenic spectrum · target form"
          plain="This is the spectrum the Coulomb-limit reduction aims to reproduce. The current repo evidence I found supports hydrogenic scaling arguments, but not the site's former 'exact reproduction' badge."
          tex="\begin{aligned} E_n &\;=\; -\frac{m_e\,Z^2e_{\rm eff}^4}{2(4\pi\varepsilon_0)^2\hbar^2\,n^2}, \\ n &\;\in\; \mathbb Z^+ \end{aligned}"
        />

        <TPBody>
          In the current repo, the strongest direct support I found is the
          hydrogenic clock-scaling discussion in the older optics paper, not a
          standalone current-paper theorem of exact Rydberg matching. This page
          should therefore present hydrogen as a controlled target / intended
          limit, with precision matching still to be documented cleanly.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge kind="reduce">Coulomb-limit structure</Badge>
          <Badge kind="open">Exact precision claim not yet sourced here</Badge>
        </div>
      </TPSection>

      <TPSection
        anchor="gfactor"
        eyebrow="g-factor and anomaly"
        heading="The current g−2 package narrows the miss to one branch-selection datum."
      >
        <TPBody>
          The site should present the anomaly story in the same way it presents
          2.5PN and 4PN: most of the algebraic packaging is in place, but one
          sharply identified physical datum is still open.
        </TPBody>

        <EqCard
          label="◇ anomaly bookkeeping · current status"
          plain="The current g−2 summary does not force the final electron-point quartic sliver. It localizes the remaining freedom to one narrow microscopic branch-selection / outgoing-normalization datum."
          tex="\begin{aligned} g &\;=\; 2\,[1+a_{\rm geom}], \\ a_{\rm geom} &\;=\; a_{\rm carried} + \delta a_{\rm branch} \end{aligned}"
        />

        <TPBody>
          That is the right technical stance for this page: no claim that
          <Tex tex="a_e = \alpha/2\pi" /> has already been derived here from a
          declared <Tex tex="Z(w)" /> profile, and no claim that the full QED
          series has been matched. What the current package does claim is that
          the open residue has collapsed to one narrow branch datum rather than
          a broad coefficient fit space.
        </TPBody>

        <TPCallout kind="warn">
          <strong style={{ color: "#e67ac6" }}>Atomic-sector honesty rail.</strong>{" "}
          Hydrogen precision, the electron anomaly, the muon anomaly, and the
          Lamb shift are best presented on this site as targets of the current
          reduction / branch-realization program, not as already-landed exact
          outputs of the completed 4D paper stack.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="targets"
        eyebrow="open targets"
        heading="What still belongs on the ledger."
      >
        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>Document a clean current-paper derivation of the hydrogenic spectrum if one exists in the stack.</li>
          <li>Close the remaining g−2 branch-selection datum on the realized moving-throat branch.</li>
          <li>Translate the same branch data into Lamb-shift and muon-anomaly observables.</li>
        </ul>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          Topic 10 shares the same style of open bridge problem in the outgoing
          sector. Topic 11 is where the branch data behind both the PN and the
          anomaly stories are meant to be realized microscopically.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
