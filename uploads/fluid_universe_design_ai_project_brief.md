# Fluid Universe Website Project Brief for Design AI

**Purpose of this document:** Give a design AI enough context to design a public-facing website for the Fluid Universe / 4D moving-throat research program without needing to understand every equation in the source files.

**Primary source anchor:** `moving_throat_pde_program_compact.md`  
**Supporting source families:** the `*_summary.md` files, moving-throat full notes, atomic/lepton notes, and PN assembly notes.

---

## 1. One-sentence project description

**Fluid Universe is a speculative, action-based toy-model research program that asks whether familiar 3D physics—gravity-like inverse-square behavior, electromagnetism, plasma/MHD behavior, post-Newtonian two-body dynamics, atomic structure, and particle-like internal structure—can emerge from defects, projection, and localized fields inside a higher-dimensional fluid-like substrate.**

For the website, the simple version is:

> We are exploring whether matter, fields, and gravity-like behavior can be modeled as visible 3D effects of moving throat-shaped defects in a deeper 4D spatial medium.

---

## 2. The core story in plain language

The project imagines that what we call “ordinary space” is a **3D brane-like observational slice** of a larger **4D spatial substrate**. The extra spatial direction is called `w`.

Objects that look like particles are modeled as **defects or throats**: localized mouth-like structures that intersect the brane but extend into the hidden `w` direction. A 3D observer does not see the whole object; they see a projection or effective reduction of a richer bulk structure.

The research program tries to build this idea carefully from equations rather than only metaphor. It starts with an explicit parent theory:

- a 4D-spatial matter/order-parameter field,
- a localized 4+1 Maxwell gauge field,
- a moving throat geometry,
- and rules for how a 3D brane observer measures projected quantities.

The important design-language translation is:

> The visible world is not assumed as fundamental. It is treated as a measured, reduced, or projected layer of a deeper brane–bulk system.

---

## 3. What the project is trying to accomplish

The project is not just “cool higher-dimensional imagery.” It is a staged derivation program.

### 3.1 Foundation target

Build a parent 4+1 theory with:

- exact bulk matter dynamics,
- exact localized Maxwell/gauge dynamics,
- a corrected charge dictionary,
- a clear definition of brane observables,
- and a moving-throat geometry that can eventually be solved as a PDE.

### 3.2 Emergence target

Show how familiar 3D-facing laws can arise as controlled limits:

- a Poisson/inverse-square scalar sector,
- effective 3+1 Maxwell theory,
- Coulomb-like atomic sector,
- plasma/MHD limits,
- conservative two-body gravity-like dynamics through post-Newtonian orders.

### 3.3 Moving-throat target

Replace symbolic “particle” closures with a genuine moving-throat PDE, where the shape of the throat, its internal support modes, mixed electromagnetic channels, leakage, and outgoing response are all explicit.

### 3.4 Particle/atomic target

Explore whether reduced throat sectors can support:

- hydrogen-like atomic scales,
- finite-size corrections,
- charged-lepton-like mass and internal modes,
- spin-like two-state structure,
- magnetic moment and g-factor corrections,
- and same-charge internal degrees of freedom.

---

## 4. What the project is not claiming

This section is critical for public trust and website tone.

The site should **not** present the project as established physics or as a completed “Theory of Everything.”

It should present the project as:

- a speculative but mathematically structured research program,
- a toy-model / reduced-sector framework,
- a sequence of derivations under explicit assumptions,
- a falsification-first effort with open theorem gaps.

Avoid saying:

- “We have proven all of physics.”
- “This replaces general relativity and quantum mechanics.”
- “The Standard Model has been derived.”
- “The moving-throat PDE is fully solved.”
- “The model is experimentally confirmed.”

Prefer language like:

- “The program tests whether…”
- “Within the declared closure hierarchy…”
- “This reduced sector reproduces…”
- “The remaining gap is…”
- “The next falsification target is…”

---

## 5. Claim-status system for the website

The design system should include visible claim-status badges. These badges are not decorative; they are central to the honesty of the project.

Use these badge categories:

| Badge | Meaning | Suggested visual treatment |
|---|---|---|
| **Exact** | Follows from the declared parent action, exact definitions, or exact algebra. | Solid badge, strongest confidence color. |
| **Exact within closure** | Exact inside a stated reduced family, branch, or closure hierarchy. | Solid badge with smaller “closure” label. |
| **Controlled reduction** | Requires an ansatz, projection, low-frequency limit, brane reduction, or small-body approximation. | Medium-strength badge. |
| **Effective closure** | Physically motivated model choice not yet uniquely derived from the completed PDE. | Dashed or outlined badge. |
| **Numerically located** | Defined exactly, but values currently come from numerical solve. | Badge with small calculator/dot-grid icon. |
| **Open** | Depends on the actual completed moving-throat PDE branch or another unresolved theorem gap. | Open-outline badge; use intentionally, not as a failure label. |

A useful UI pattern is an **“honesty rail”** running beside technical sections. It can say things like:

> Exact parent theory → Controlled brane reduction → Reduced closure → Open PDE realization.

---

## 6. Core ontology and vocabulary

### 6.1 Bulk and brane

- **Bulk:** the full 4D spatial arena `(x, y, z, w)`.
- **Brane:** the 3D world a brane observer measures `(x, y, z)`.
- **w direction:** the hidden extra spatial direction.
- **Projection:** the exact operation defining what a brane observer measures by averaging through `w` with a kernel `W(w)`.
- **Reduction:** an approximation or controlled limit that integrates out `w` under explicit assumptions.

**Important design distinction:** Projection and reduction are not the same. The website should explain this clearly.

Suggested visual:

> A translucent 3D sheet cuts through a 4D-looking volume. A throat crosses the sheet. A “projection lens” shows what a 3D observer sees.

### 6.2 Defects as throats

A particle-like object is represented as a brane–bulk throat:

- brane mouth near `w = 0`,
- finite throat depth or interior support along `w`,
- geometry described by radius and length in early closures,
- later upgraded to a distributed moving wall `R(Ω, w, t)`.

Suggested visual:

> A vortex-mouth / tunnel / throat embedded in a fluid, with the visible brane only intersecting the opening.

### 6.3 Matter sector

Matter is modeled by a complex order parameter `ψ` in 4 spatial dimensions. In hydrodynamic language it has:

- density `ρ = |ψ|²`,
- current,
- velocity,
- pressure/enthalpy,
- quantum-potential-like structure.

The equation of state is a stiff polytrope:

> `P(ρ) = K ρ⁵`

This exponent `n = 5` is one of the project’s repeated carry-forward constants.

### 6.4 Electromagnetic sector

Electromagnetism is modeled by a 4+1 Maxwell field with a localization profile `Z(w)`. Under a controlled zero-mode brane reduction, standard-looking 3+1 Maxwell theory appears with an effective coupling:

> `μ₀_eff = μ₀ / Z_int`

Observable brane charge is thickness-controlled:

> `q_eff = q_* / sqrt(Z_int)`

The design should present this as:

> Electric sign is topological; measured strength depends on localization thickness.

### 6.5 Charge ontology

The current corrected charge dictionary is:

- electric charge sign: `η_Q = ±1`,
- microscopic branch coupling: `q_* = η_Q e_*`,
- observable brane charge: `q_eff = q_* / sqrt(Z_int)`.

Important firewall:

- electric charge is **not** circulation,
- circulation belongs to the magnetic/vortical sector,
- the historical gravity-side `q = 1` is now `κ_ρ = 1`, a mass-dressing coefficient, not electric charge.

This is worth a dedicated “Avoiding notation traps” box on the site.

### 6.6 Mixed sector

The mixed channels are:

- `A_w`,
- `J^w`,
- `F_{μw}`,
- `E_w`,
- `C_a = F_{aw}`.

They are suppressed only in the far-field brane Maxwell limit. They are not removed from the microscopic theory.

These channels matter later for:

- leakage,
- brane–bulk exchange,
- plasma non-ideality,
- moving-throat response,
- outgoing quadrupole normalization,
- same-charge internal structure,
- g-factor/anomaly work.

---

## 7. The project’s main technical arcs

### Arc A — The 4D parent theory

**Source anchors:** `4d_summary.md`, `moving_throat_pde_program_compact.md`, `pde.tex`

This is the foundation. It defines:

- the 4+1 arena,
- the GNLS matter action,
- the localized Maxwell action,
- the geometry variables,
- exact continuity,
- projection onto the brane,
- leakage,
- and the Poisson hook.

Plain-language framing:

> Start with a deeper fluid-like field theory. Define what a 3D observer actually measures. Then ask which familiar laws appear when the deeper theory is viewed through that measurement layer.

Suggested page title:

> **The Parent Model: A 4D Fluid-Like Substrate**

---

### Arc B — Projection, leakage, and the gravity hook

**Source anchors:** `4d_summary.md`, `4d_1pn_full_summary.md`

The exact projected continuity equation includes a leakage source. After a Helmholtz split of the brane velocity, the longitudinal component obeys an exact identity with a 3D Laplacian. In a controlled quasi-static regime, this becomes a Poisson-like equation.

Plain-language framing:

> Gravity-like inverse-square behavior is not inserted as a force at the beginning. It appears as a brane-facing longitudinal flow law under controlled assumptions.

Suggested visual:

> A hidden vertical flow through the brane changes the apparent 3D density, producing a 3D potential pattern.

---

### Arc C — Electromagnetism from localized 4+1 Maxwell

**Source anchors:** `4d_em_fields_summary.md`, `4d_plasma_summary.md`

The electromagnetic paper shows how localized 4+1 Maxwell dynamics reduce to effective 3+1 Maxwell theory on the brane under zero-mode assumptions. It also tracks the transverse/mixed modes that are suppressed in the far-field but important microscopically.

Plain-language framing:

> Electromagnetism is modeled as a real higher-dimensional gauge field whose lowest brane-localized mode looks like familiar Maxwell theory.

Suggested visual:

> A field concentrated around the brane with a Gaussian-like thickness profile `Z(w)`, plus small transverse higher modes.

---

### Arc D — Plasma and beyond-MHD effects

**Source anchor:** `4d_plasma_summary.md`

The plasma extension shows how multi-species charged media can be represented in the bulk and how projected brane plasma laws become open systems. It introduces beyond-MHD channels:

- mixed-sector electromagnetism,
- leakage through `w`,
- finite-localization transverse modes,
- unresolved projection stress / topology stress.

Plain-language framing:

> What looks like non-ideal plasma behavior on the brane may correspond to conservative exchange with hidden transverse modes.

Suggested site module:

> “Where does reconnection-like non-ideality go?”  
> Answer: into `w`, mixed fields, and higher localized modes.

---

### Arc E — Conservative post-Newtonian ladder

**Source anchors:** `4d_1pn_bridge_summary.md`, `4d_1pn_full_summary.md`, `4d_2pn_summary.md`, `4d_3pn_summary.md`, `4d_4pn_summary.md`, `4d_5pn_summary.md`

This is the main gravity-facing derivation sequence.

The project tracks whether the reduced two-body dynamics can reproduce standard conservative post-Newtonian structures. The sequence is:

- **1PN:** matches the conservative EIH two-body ledger within a declared closure hierarchy.
- **2PN:** matches the generic-frame ADM Hamiltonian through 2PN within the hierarchy.
- **2.5PN:** identifies the retarded/radiative quadrupole branch as the surviving universal route and isolates a passive/outgoing normalization gap.
- **3PN:** closes the conservative 3PN ledger in the fixed ADM chart within the hierarchy.
- **4PN:** closes the local instantaneous 4PN sector; the remaining full theorem condition is the same quadrupole normalization gap isolated at 2.5PN.
- **5PN / moving-throat finish-line:** compresses the remaining reduced problem to branch-realization conditions on the actual PDE-selected moving-throat branch.

Plain-language framing:

> The PN sequence is a stress test: if this toy model is serious, it must reproduce known two-body gravitational bookkeeping, not just hand-wave inverse-square behavior.

Suggested visual:

> A vertical “PN ladder” with rungs 0PN, 1PN, 2PN, 2.5PN, 3PN, 4PN, 5PN. Each rung has a badge: matched within closure, narrowed, open normalization, etc.

---

### Arc F — Moving-throat PDE program

**Source anchors:** `moving_throat_pde_program_compact.md`, `moving_throat_notes_full.md`, `moving_throat_output_full.md`, `pde.tex`

This is the core current project. Earlier papers used finite-dimensional geometry variables like `a(t)` and `L(t)`. The moving-throat program upgrades that to a distributed surface:

> `Σ(X,t) = r - R(Ω,w,t)`

This makes the mouth shape and internal support modes explicit.

Key ideas:

- the old radius/length variables become collective moments,
- grouped real `P2` quadrupole modes become literal wall/support modes,
- BdG matter support modes shift wall poles and low-frequency coefficients,
- localized Maxwell/mixed channels provide the first honest outgoing quadrupole bridge,
- the finish line is no longer broad algebra but actual PDE branch realization.

Plain-language framing:

> The moving-throat PDE is where the model stops treating particles as symbolic closures and starts asking what shape, vibration, leakage, and response the defect actually has.

Suggested hero visual:

> A living, oscillating throat with labeled layers: wall, matter support modes, gauge/mixed modes, outgoing quadrupole response.

---

### Arc G — Atomic and lepton reduced sectors

**Source anchors:** `atom_work.md`, `lepton_work.md`, `lepton_mass_notes.md`, `g2_full_output.md`

The atomic/lepton material uses the reduced brane Maxwell sector and throat response ideas to explore:

- hydrogen-like Bohr-scale emergence,
- finite-size corrections,
- `P22` mouth deformation,
- lepton-like mass ledgers,
- D/N finite-throat support spectra,
- half-integer internal Berry/rotor routes,
- magnetic moment and g-factor pathways,
- common charge–inertia transport corrections.

Plain-language framing:

> After the model has a brane Coulomb sector and a throat-response structure, the next question is whether atomic and lepton-like behavior can appear as reduced-sector consequences.

Important status note:

This is not a completed Standard Model derivation. Much of this material is conditional, reduced-sector, or requirement-audit work. The website should make that explicit.

---

## 8. Key repeated constants and motifs

These constants recur across the stack and can be displayed as “carry-forward cards.”

| Constant / motif | Plain-language role |
|---|---|
| `n = 5` | Fixed stiff equation-of-state exponent from optical consistency. |
| `κ_ρ = 1` | Newtonian mass-dressing coefficient, not electric charge. |
| `κ_add = 1/2` | Added-mass coefficient tied to throat topology. |
| `κ_PV = 3/2` | Pressure-volume response coefficient inside the adiabatic closure. |
| `β_1PN = 3` | Combined 1PN precession ledger. |
| `α² = 3/4`, `a_H = 0`, `K_vec = 2/π²` | Wake/vector-sector values needed for EIH cross terms. |
| `q_eff = q_* / sqrt(Z_int)` | Observable brane charge strength controlled by localization thickness. |
| `P2 / grouped real 20/21/22` | Quadrupole response bundle that becomes central from 2PN onward. |
| `χ_Q = 1` | Later moving-throat Packet-A outgoing-normalization finish-line scalar. |
| `U = V = 0` | Rigid-mouth Cartesian orbit-lock condition in the later same-charge branch. |

Design suggestion: display these as a scrollable “derived constants ledger,” with each card linking to a deeper technical page.

---

## 9. Suggested website information architecture

### Top-level navigation

1. **Home**
2. **Start Here**
3. **The Model**
4. **Emergent Laws**
5. **Moving-Throat PDE**
6. **Atomic & Particle Program**
7. **Results Ledger**
8. **Open Problems**
9. **Library**
10. **Glossary**

---

## 10. Homepage structure

### Hero

**Headline options:**

- “A 4D Fluid Model for Emergent 3D Physics”
- “Particles as Moving Throats in a Hidden Fluid Dimension”
- “From Brane–Bulk Defects to Familiar Field Laws”

**Subheadline:**

> Fluid Universe is a speculative research program exploring how gravity-like, electromagnetic, plasma, atomic, and particle-like behavior may emerge from throat-shaped defects in a higher-dimensional fluid-like substrate.

**CTA buttons:**

- “Start with the simple explanation”
- “View the technical roadmap”
- “Open the results ledger”

### Section 1 — The picture

Use a simple 3-panel explanation:

1. **Bulk:** A 4D spatial medium exists beneath the visible world.
2. **Brane:** We observe only a 3D projected slice.
3. **Throats:** Particle-like defects cross the brane and extend into the hidden dimension.

### Section 2 — What has been built

Cards:

- Parent action
- Localized Maxwell sector
- Projection/leakage identities
- PN gravity ladder
- Moving-throat PDE
- Atomic/lepton reduced sectors

### Section 3 — How claims are labeled

Display the claim-status badge system.

### Section 4 — The current frontier

Explain in plain language:

> The remaining frontier is branch realization: does the actual moving-throat PDE select the reduced branch required by the already-compressed finish-line conditions?

### Section 5 — Technical library

A visually organized source map.

---

## 11. “Start Here” page

This page should be nontechnical.

Recommended outline:

1. **Why a hidden dimension?**  
   Not as an extra fantasy space, but as a way to model how 3D laws might be projection effects.

2. **What is a throat?**  
   A localized defect whose visible mouth sits on the brane while its support extends into `w`.

3. **What does a brane observer measure?**  
   Projection through a measurement kernel, not direct access to the full object.

4. **How can laws emerge?**  
   Under controlled reductions, higher-dimensional equations can reduce to familiar brane-facing laws.

5. **Why the project is difficult.**  
   Matching isolated formulas is easy. Matching the full hierarchy of known physical constraints is hard.

6. **Why the current moving-throat PDE matters.**  
   It decides whether the reduced closure stack can be realized by an actual defect branch.

---

## 12. “The Model” page

This page can be medium technical.

Recommended sections:

- 4+1 arena
- GNLS matter field
- localized Maxwell field
- moving throat geometry
- projection vs reduction
- corrected charge ontology
- mixed-sector channels

Design suggestions:

- Use collapsible “Equation view” panels.
- Put plain-English explanation before equations.
- Add a “don’t confuse these” sidebar for:
  - projection vs reduction,
  - charge vs circulation,
  - brane Maxwell limit vs microscopic mixed sector,
  - exact parent action vs reduced closure.

---

## 13. “Emergent Laws” page

This is where the PN and EM results become public-facing.

Recommended subsections:

### Electromagnetism

- 4+1 localized Maxwell action.
- Effective 3+1 Maxwell under zero-mode reduction.
- Charge strength controlled by localization thickness.
- KK/transverse corrections.

### Gravity-like scalar behavior

- Exact projected continuity.
- Leakage.
- Longitudinal identity.
- Poisson hook.
- Inverse-square scaling in controlled regime.

### Post-Newtonian stress test

Use a ladder:

- 1PN: EIH ledger within closure.
- 2PN: ADM equality within closure.
- 2.5PN: retarded quadrupole route narrowed; normalization gap.
- 3PN: conservative grouped `P2` closure in fixed chart.
- 4PN: local instantaneous sector closed; same quadrupole normalization gap remains.
- 5PN: finish line compressed to PDE branch-realization conditions.

Design suggestion:

Use “matched / narrowed / open” states, not only checkmarks. A full green checkmark for every rung would be misleading.

---

## 14. “Moving-Throat PDE” page

This is the most important current page.

Recommended structure:

1. **Why the PDE is needed**  
   Earlier closures used `a(t)` and `L(t)`. The PDE makes the throat shape distributed and dynamic.

2. **Geometry lift**  
   `Σ = r - R(Ω,w,t)`

3. **Mode decomposition**  
   Scalar lane, grouped real `P2` lane, higher modes.

4. **Reduced wall/support stack**  
   Wall modes couple to matter support modes and gauge/mixed modes.

5. **Outgoing quadrupole bridge**  
   Mixed-sector dynamics can transfer the passive/outgoing `l=2` fingerprint to the wall/worldtube response.

6. **Current theorem ledger**  
   The open problem is actual branch realization, not more algebraic compression.

Suggested visual components:

- Interactive throat cross-section with mode labels.
- “From old closure to PDE” before/after diagram.
- “Conservative front end → outgoing bridge → finish-line scalar” flowchart.
- Finish-line panel:
  - isotropic grouped `P2` carrier,
  - outgoing normalization `χ_Q = 1`,
  - weak-axisymmetric prefactor slope `Ξ₁`,
  - orbit lock `U = V = 0`,
  - selected twin-support placement.

---

## 15. “Atomic & Particle Program” page

This page should be careful and transparent.

Recommended sections:

1. **Hydrogen-like sector**  
   Show how the effective brane Coulomb law leads to a reduced hydrogenic energy functional. Emphasize that the Bohr scale appears as a reduced-sector energy minimum, not as an imposed Bohr rule.

2. **Finite-size and `P22` response**  
   Explain that atomic tides can excite throat mouth deformation modes.

3. **Lepton mass ledger**  
   Present the isolated-electron reduced mass theorem and the `11:2:5` internal energy partition.

4. **Spin-like and same-charge sectors**  
   Explain the mixed-sector Berry rotor route as conditional.

5. **g-factor/anomaly work**  
   Present as an advanced reduced-sector anomaly program with an unresolved common charge–inertia transport layer / moving-throat quotient path.

Strong caution:

Use labels like “candidate route,” “conditional theorem,” “reduced closure,” and “open realization.” Do not imply the electron or Standard Model has been fully derived.

---

## 16. Results Ledger page

This page should be one of the strongest credibility pages.

Organize results by status, not by hype.

### Example layout

#### Exact parent-theory results

- Bulk GNLS equation.
- Exact continuity.
- Localized Maxwell equation.
- Bianchi identity.
- Mixed-sector gauge invariants.
- Projection/leakage identity.

#### Controlled reductions

- Effective brane Maxwell.
- Poisson hook.
- Zero-mode Coulomb sector.
- MHD limit.

#### Exact within closure

- 1PN EIH match.
- 2PN ADM match.
- 3PN conservative closure.
- 4PN local instantaneous closure.
- Moving-throat grouped `P2` compilers.

#### Numerically located

- Family-1 mouth/core branch points.
- Refreshed geometry branch quantities.

#### Open

- Full moving-throat PDE realization.
- Passive/outgoing quadrupole normalization on actual branch.
- Spin/fermionic completion.
- Strong-field and full radiative completion.
- Complete Standard Model-level particle identity.

---

## 17. Library page

The library should be a source-indexed technical map, not a random file list.

### Recommended grouping

#### Foundation

- `4d_summary.md`
- `pde.tex`
- `moving_throat_pde_program_compact.md`

#### Electromagnetism and plasma

- `4d_em_fields_summary.md`
- `4d_plasma_summary.md`

#### Gravity / PN sequence

- `4d_1pn_bridge_summary.md`
- `4d_1pn_full_summary.md`
- `4d_2pn_summary.md`
- `4d_2pn.tex`
- `4d_2_5pn_summary.md`
- `4d_3pn_summary.md`
- `4d_3pn.tex`
- `4d_4pn_summary.md`
- `4d_4pn_full_notes.md`
- `4d_5pn_summary.md`
- `5pn_notes_full.md`

#### Moving-throat PDE

- `moving_throat_notes_full.md`
- `moving_throat_output_full.md`
- `moving_throat_pde_program_compact.md`
- `pde.tex`

#### Atomic/lepton/g-factor

- `atom_work.md`
- `lepton_work.md`
- `lepton_mass_notes.md`
- `g2_full_output.md`

For each library item, show:

- title,
- plain-English role,
- status,
- depth level,
- prerequisite links,
- related visuals.

---

## 18. Visual identity recommendations

### Overall feeling

The design should feel like:

- deep physics,
- structured research,
- transparent uncertainty,
- not mystical,
- not sci-fi fantasy,
- not overhyped startup marketing.

### Visual motifs

Use:

- translucent brane sheets,
- fluid gradients,
- throat/vortex geometry,
- contour lines and field lines,
- mode rings on a spherical mouth,
- split panels: “bulk reality” vs “brane observation,”
- mathematical cards that expand from simple to technical.

Avoid:

- black-hole imagery that implies GR black holes,
- wormhole imagery that overpromises,
- “energy vortex” pseudoscience aesthetics,
- glowing sacred-geometry visuals,
- conspiracy-style “mainstream physics is wrong” framing.

### Color suggestions

- Deep navy / black-blue for the bulk.
- Cyan or electric blue for gauge/EM.
- Amber/gold for projection/observable brane.
- Violet/magenta for mixed `w` channels.
- Green for exact claims.
- Gray/white for open problems.

### Typography

- Use a clear modern sans-serif for explanations.
- Use a readable mono font for equations and symbols.
- Equations should be treated as design objects, not dense walls.

---

## 19. Essential diagrams

### Diagram 1 — Brane and bulk

A 3D brane slice in a 4D spatial bulk. Label `x,y,z` along the brane and `w` perpendicular.

### Diagram 2 — Throat defect

A finite throat crossing the brane. Show visible mouth and hidden support depth.

### Diagram 3 — Projection vs reduction

Left: projection as measurement average with `W(w)`.  
Right: reduction as an effective 3D law under assumptions.

### Diagram 4 — Localized Maxwell profile

Show a field localized around `w=0` with profile `Z(w)`. Show zero-mode and higher transverse modes.

### Diagram 5 — Leakage

Show matter/current moving through the `w` direction and appearing as an apparent source/sink on the brane.

### Diagram 6 — Moving-throat mode decomposition

Show spherical mouth harmonics: scalar `l=0`, quadrupole `P2`, grouped real lanes `20/21/22`.

### Diagram 7 — PN ladder

Stacked rungs with status labels from Newtonian through 5PN.

### Diagram 8 — Moving-throat finish line

Flowchart:

> Parent theory → moving throat geometry → wall/support/gauge bundle → grouped `P2` response → outgoing normalization → PDE branch realization.

### Diagram 9 — Atomic/lepton reduced pathway

Flow:

> localized Maxwell → Coulomb sector → hydrogenic bound state → finite-size throat response → lepton mass/spin/g-factor candidate routes.

---

## 20. Recommended UI components

### 20.1 Claim badge

Each theorem/result card has one of the claim-status badges.

### 20.2 Plain/technical toggle

For sections with equations:

- Plain view: short explanation.
- Technical view: equations and source references.

### 20.3 “Why this matters” strip

Every technical section should have a one-sentence significance line.

Example:

> Why this matters: It explains how an apparently closed 3D law can arise from an open projected subsystem.

### 20.4 Source anchor chips

Small chips linking a page to source files.

Example:

`4d_summary.md` `4d_em_fields_summary.md` `moving_throat_pde_program_compact.md`

### 20.5 Open-problem callouts

Use open-problem callouts as credibility features.

Example:

> Open: The reduced finish line is known, but the actual moving-throat PDE branch still has to realize it.

### 20.6 Equation cards

Use expandable cards for important formulas:

- `q_eff = q_* / sqrt(Z_int)`
- `μ₀_eff = μ₀ / Z_int`
- `Σ = r - R(Ω,w,t)`
- `P(ρ) = Kρ⁵`
- `χ_Q = 1`
- `U = V = 0`

---

## 21. Suggested public copy blocks

### 21.1 Short project overview

> Fluid Universe explores a simple but demanding question: what if familiar 3D physics is the measured surface of a deeper 4D fluid-like substrate? In the model, particle-like objects are not points inserted by hand. They are moving throat-shaped defects whose visible mouths sit on our 3D brane while their support extends into a hidden direction. The project builds an explicit parent theory, derives controlled brane-facing limits, and tests the model against increasingly strict known physics benchmarks.

### 21.2 Moving-throat summary

> The moving-throat PDE is the current frontier of the project. Earlier stages represented a defect with a few collective variables, such as throat radius and length. The PDE upgrade turns the defect into a distributed moving surface with scalar, quadrupole, matter-support, gauge, mixed, leakage, and outgoing-response channels. This is where the program asks whether the reduced closure stack can be realized by an actual dynamical branch.

### 21.3 Results summary

> The project has already compressed several reduced-sector problems into sharp finish-line conditions. Some identities follow exactly from the parent action; others hold within declared closure hierarchies; and the main remaining gap is branch realization by the completed moving-throat PDE. The website labels these statuses explicitly so readers can distinguish results, reductions, and open problems.

### 21.4 Caution statement

> This is a speculative toy-model research program, not established physics. The goal is to test whether a precise higher-dimensional defect model can reproduce known structures under transparent assumptions—and to identify where it fails.

---

## 22. Audience layers

### General audience

Needs:

- picture-first explanation,
- minimal equations,
- honest uncertainty,
- why this is interesting.

Best entry point:

- Home
- Start Here
- Glossary
- Visual story

### Technical physics audience

Needs:

- exact definitions,
- assumptions,
- derivation status,
- theorem ledgers,
- source files,
- notation firewall.

Best entry point:

- The Model
- Results Ledger
- PN sequence
- Moving-Throat PDE
- Library

### Design / media audience

Needs:

- visual metaphors,
- safe claims,
- clear narrative,
- source hierarchy,
- “what not to say.”

Best entry point:

- This brief
- Home
- Start Here
- Visual system

---

## 23. FAQ suggestions

### Is this claiming our universe literally has a hidden fluid dimension?

No. The current framing should be that this is a toy-model research program testing whether such a structure can reproduce known physics in controlled sectors.

### What is a brane observer?

A brane observer is an observer who only measures the 3D projected world, not the full 4D spatial bulk.

### What is a throat?

A throat is a finite brane–bulk defect. It has a visible mouth on the brane and hidden support in the extra direction.

### Why is projection important?

Because the 3D observer sees averaged or reduced effects of bulk dynamics. This is how open-system terms like leakage can appear.

### What has been matched?

Within declared closure hierarchies, the program reports matches to several conservative post-Newtonian ledgers through 4PN local structure, plus narrowed retarded/quadrupole conditions. The completed moving-throat PDE realization remains open.

### What remains open?

The actual PDE-selected moving-throat branch, passive/outgoing quadrupole normalization, full radiative completion, spin/fermion completion, and Standard Model-level particle identity.

---

## 24. Content priorities for initial launch

### Must-have for v1

1. Home page.
2. Start Here page.
3. The Model page.
4. Claim-status system.
5. Moving-Throat PDE page.
6. Results Ledger page.
7. Library/source map.
8. Glossary.

### Nice-to-have for v1

1. PN ladder interactive.
2. Projection vs reduction animation.
3. Throat mode explorer.
4. Equation-card toggles.
5. “What remains open” dashboard.

### Save for later

1. Full atomic/lepton explainer.
2. Interactive g-factor/anomaly pipeline.
3. Full theorem dependency graph.
4. Simulation visualizations.
5. Public paper-style PDF generation.

---

## 25. Design AI directives

When designing the site:

1. Lead with the visual model, not equations.
2. Treat uncertainty as part of the brand.
3. Make the claim-status badges visible and reusable.
4. Give readers a layered path: simple → intermediate → technical.
5. Avoid mystical or overhyped language.
6. Use “research program,” “toy model,” “controlled reduction,” and “open problem” often.
7. Give equations room to breathe.
8. Show how each paper/file fits into the overall map.
9. Build the site around the current moving-throat PDE frontier.
10. Make the source library feel curated, not dumped.

---

## 26. Source file inventory reviewed

### Core moving-throat program

- `moving_throat_pde_program_compact.md` — primary compact working master and current theorem ledger.
- `moving_throat_notes_full.md` — long moving-throat stage record.
- `moving_throat_output_full.md` — extended moving-throat output and later-stage compiler details.
- `pde.tex` — paper source for moving-throat PDEs.

### 4D parent, EM, and plasma

- `4d_summary.md` — parent 4D action, projection, reduction, Poisson hook, Maxwell hook.
- `4d_em_fields_summary.md` — localized Maxwell sector and brane EM reduction.
- `4d_plasma_summary.md` — bulk plasma, projection, leakage, beyond-MHD channels.

### PN / gravity sequence

- `4d_1pn_bridge_summary.md` — bridge paper fixing coefficients and removing phenomenological knobs.
- `4d_1pn_full_summary.md` — full conservative 1PN / EIH assembly.
- `4d_2pn_summary.md` and `4d_2pn.tex` — conservative 2PN assembly.
- `4d_2_5pn_summary.md` — retarded 2.5PN quadrupole-normalization audit.
- `4d_3pn_summary.md` and `4d_3pn.tex` — conservative 3PN grouped `P2` assembly.
- `4d_4pn_summary.md` and `4d_4pn_full_notes.md` — 4PN local/tail split and local instantaneous closure.
- `4d_5pn_summary.md` and `5pn_notes_full.md` — reduced 5PN / moving-throat finish-line package.

### Atomic, lepton, g-factor

- `atom_work.md` — 4D action to hydrogenic, finite-size, and lepton g-factor reduced-sector derivations.
- `lepton_work.md` — same-charge mixed-sector Berry rotor and conditional spin-like closure route.
- `lepton_mass_notes.md` — isolated electron mass theorem, D/N support spectra, lepton-family attempts.
- `g2_full_output.md` — quotient bridge and anomaly/g-factor common charge–inertia transport analysis.

---

## 27. Final positioning recommendation

The strongest public positioning is:

> Fluid Universe is a transparent, falsification-first research program testing whether a higher-dimensional fluid-like defect model can reproduce known 3D physics through exact identities, controlled reductions, and moving-throat PDE branch realization.

The site should make three promises:

1. **We will explain the idea simply.**
2. **We will show the math trail for technical readers.**
3. **We will label what is proven, reduced, conditional, numerical, and open.**

That combination is the project’s credibility foundation.
