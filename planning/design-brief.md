# Justin Chong Portfolio — Design Brief

## Objective

Create a personal portfolio that helps Justin get hired for hybrid Technical Lead / Staff–Principal / AI-product engineering roles by presenting unusually strong evidence of both hands-on building and leadership.

The site should feel **precise and formidable**, while remaining human and readable.

## Creative direction

**Editorial + experimental, light-led, with Apple-like restraint.**

The editorial system carries the site: typography, hierarchy, project writing, diagrams, and disciplined spacing. Experimental moments exist only where they communicate project meaning:

- Spatial/model-representation interaction for Metalynx Scatter
- Sequential execution/orchestration for Kikan
- Controlled transitions between global overview and technical detail

The site should not resemble Apple literally. Borrow restraint, product-as-hero media framing, and typographic confidence—not Apple navigation, blue pills, launch-page copy, or product photography conventions.

## Audience

- Hiring managers
- Engineering leaders
- Founders and product leaders
- Senior technical interviewers

Visitors should understand the positioning within 30 seconds and find meaningful technical depth without searching.

## Message hierarchy

1. Justin builds complex products and leads teams.
2. Metalynx Scatter proves end-to-end technical/product ownership.
3. Kikan proves current systems thinking and autonomous-engineering experimentation.
4. Aival proves leadership, delivery, production, and regulated-system judgment.
5. Compact stories prove breadth and quantified engineering depth.
6. The AI Lab proves continued curiosity and active building.

## Visual atmosphere

- Warm, quiet, highly controlled light canvas
- Near-black ink rather than pure black body text
- Crisp product media and diagrams as the primary imagery
- Strong typography with restrained weights
- Sparse but meaningful use of accent color
- Dark media frames where technical content benefits from contrast
- Precise alignment and spacing; no decorative clutter
- Occasional full-bleed visual moments, but reading content stays within a comfortable measure

## Palette direction

Sketches may explore different accents, but all should share:

- Canvas: warm off-white / very light gray
- Primary ink: near-black with slight warmth
- Secondary text: neutral gray meeting WCAG AA
- Dividers: low-contrast neutral
- Media frame: deep neutral
- One primary interactive accent
- Project data colors allowed inside visualizations, not reused indiscriminately as brand colors

Avoid gradients as generic decoration. Data-derived color is acceptable for Metalynx visualizations.

## Typography direction

- System-first or high-quality neutral grotesk for dependable rendering
- Display type: tight, confident, medium/semibold—not ultra-heavy
- Body: 17–19px desktop, comfortable 1.5–1.65 line-height, 60–72 character measure
- Monospace reserved for architecture labels, metadata, and technical annotations
- Avoid giant headlines whose only purpose is occupying space
- Every large type moment must carry specific positioning or project meaning

## Layout direction

- Desktop max content width around 1200–1320px
- Reading measure around 680–760px
- Editorial asymmetry is allowed, but underlying grid must remain obvious
- Project modules should differ based on evidence rather than use identical cards
- Use full-width media only when it remains legible and meaningful
- Mobile layouts recompose diagrams and visuals; they must not simply shrink desktop compositions

## Motion and interaction

Motion communicates state, sequence, or spatial depth:

- Metalynx: cursor-driven point-cloud response, class recoloring, sample inspection, or cohort selection
- Kikan: stage progression, active execution path, expansion from idea to verified output
- Project navigation: restrained transitions preserving orientation
- Hover: reveal secondary evidence without hiding essential information

Requirements:

- No scroll hijacking
- No mandatory loading sequence
- No custom cursor
- No perpetual motion competing with reading
- `prefers-reduced-motion` support
- Keyboard-accessible equivalent for pointer interactions
- Visual meaning cannot depend on animation alone

## Primary CTA

**View résumé**

Secondary CTA: Explore selected work. Contact, LinkedIn, GitHub, and Scholar remain available but subordinate.

## Content-density principle

The primary failure to avoid is **empty luxury minimalism**.

Whitespace must frame evidence, not substitute for it. Every large section should contain at least one of:

- A concrete fact
- A meaningful project visual
- A technical decision
- A defensible outcome
- A useful interaction
- A concise piece of career narrative

## Explicit anti-patterns

Do not use:

- Generic dark developer aesthetic
- Glowing cards, gradient type, decorative terminals, or floating code windows
- Uniform SaaS feature-card grids
- Giant vague statements such as “Building the future”
- Technology-logo clouds
- Excessive badges and pills
- Timeline-heavy résumé presentation on the homepage
- Device mockups around every screenshot
- Unqualified client/research logos
- Animations that delay or obstruct content
- Fake product UI presented as historical evidence

## Image and diagram treatment

- Real product screenshots should be labeled as real product interfaces.
- Portfolio-specific redesigns/demos should be labeled accordingly.
- Architecture and data-flow diagrams should be newly drawn and conceptual.
- Aival diagrams must remain deliberately high-level.
- Dark diagram frames may use subtle grid texture, but must integrate with the light-led page.
- Diagram typography and connections must remain readable at mobile sizes through alternate layouts or zoom/detail controls.

## Accessibility baseline

- WCAG AA contrast minimum for all text and controls
- Visible keyboard focus
- Semantic landmarks and headings
- 44×44px touch targets where applicable
- Skip navigation link
- Reduced-motion treatment
- No color-only status communication
- Alt text or adjacent descriptions for all diagrams
- Content remains usable without WebGL/canvas
- Canvas experiences receive a meaningful static fallback

## Performance baseline

- Fast content-first render
- Progressive enhancement for experimental visuals
- Lazy-load below-fold media
- Avoid autoplay video unless muted, controlled, and materially useful
- Do not block primary content on WebGL or large JavaScript bundles
- Favor CSS/SVG for narrative motion; reserve canvas/WebGL for Metalynx-specific spatial experiences

## Sketch directions

Create three genuinely different homepage directions:

### Direction A — Precision Editorial

- Strongest recruiter scan-ability
- Editorial asymmetry and art-directed project media
- Warm light canvas, compact dark diagrams
- Experimental visuals restrained to individual project modules
- Highest content clarity

### Direction B — Spatial Evidence

- Metalynx-inspired point field becomes the site’s organizing visual motif
- Navigation and project transitions use spatial relationships
- Still light-led and readable
- Highest memorability and experimental character

### Direction C — Process Atlas

- Kikan-style execution stages and connected evidence form the organizing system
- Projects appear as expandable nodes in a precise visual atlas
- Denser and more technical without becoming a dashboard
- Strongest systems-thinking signal

Variants must differ in layout, hierarchy, and interaction—not merely palette.

## Fourth-direction refinement

The next concept should use concept-led sections rather than project-led sections:

1. Systems Architecture
2. Product Portfolio
3. Experience
4. Skills
5. Résumé / contact

Hero direction:

- JC branding at top-left
- Thin, editorial typography
- Stable `justincqz` identity centered inside a changing letter field
- Concise enterprise/scale profile at bottom-right
- Headshot integrated quietly as an editorial crop, never a dominant portrait

Interaction/content direction:

- Use Process Atlas visual language for system and data architecture
- Use a compact timed/tabbed product portfolio: Scatter interactive now; Kikan and Radiology Viewer as labeled placeholders
- Add a concise career timeline
- Add an interactive category-based skills view
- Make the final résumé CTA visually dominant and calm; LinkedIn, email, and About are subordinate links
- Reduce total page length by collapsing related content and using controlled transitions

Updated positioning territory:

> I lead teams to build complex products and processes—enterprise systems engineered to operate at scale.

## Acceptance criteria for sketches

Each variant must:

- Be a standalone interactive HTML file
- Use realistic portfolio content from the approved strategy
- Expose a visible résumé CTA
- Feature Metalynx, Kikan, and Aival distinctly
- Include one meaningful interaction/state transition
- Include recognizable hover/focus states
- Render at realistic desktop and mobile sizes
- Avoid console errors and horizontal overflow
- Respect reduced motion
- Visually communicate “builder + leader” without relying on the About section
