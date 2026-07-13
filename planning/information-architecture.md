# Portfolio Information Architecture

## Site model

A focused homepage with dedicated case-study pages.

## Primary audience

Hiring managers, engineering leaders, founders, and senior technical interviewers evaluating Justin for Technical Lead, Staff/Principal, platform/data, or AI-product engineering roles.

## Primary conversion

**View résumé**

Secondary conversions:

- Email Justin
- View LinkedIn
- View GitHub
- View Google Scholar

## Global navigation

- Work
- AI Lab
- About
- Résumé
- Contact

Navigation should remain compact. On project pages, provide obvious previous/next project movement and a persistent route back to selected work.

## Routes

```text
/
/work/metalynx-scatter
/work/kikan
/work/aival
/lab
/about
/resume
```

`/resume` may be an HTML résumé page with a PDF/DOCX download, or redirect to the final hosted résumé asset. Decide during implementation.

## Refined concept-led homepage model

The next iteration should organize the homepage by evidence concepts instead of one section per project:

```text
Hero / identity
→ Systems Architecture
→ Product Portfolio
→ Experience
→ Skills
→ Résumé / contact
```

Related projects may appear inside timed/tabbed compact viewers rather than long independent homepage sections. Full case-study routes remain available for later production work.

## Homepage narrative

### 1. Hero / positioning

Purpose: establish Justin as a hands-on builder and technical leader within seconds.

Working headline:

> I build complex products and lead the teams that bring them to life.

Support territory:

- Architecture and engineering
- Product and team delivery
- AI/data-intensive systems
- Production and regulated operations

Primary CTA: View résumé  
Secondary CTA: Explore selected work

Avoid a generic technology-logo cloud or abstract “passion for innovation” copy.

### 2. Immediate proof strip

A compact set of defensible signals, pending final fact checks:

- Led a five-person engineering function
- Delivered regulated clinical-AI products across cloud and on-premises environments
- Built Metalynx Scatter end-to-end
- Built an autonomous engineering harness that dogfoods its own workflow
- Imperial College London, First Class MEng Computing with AI

Use evidence-led phrases rather than vanity statistics.

### 3. Selected work

Three intentionally unequal features:

1. **Metalynx Scatter** — dominant visual project
   - Interactive model-representation analysis
   - Product design + numerical processing + OpenGL interaction
   - Link to full case study

2. **Kikan** — dominant architecture/systems project
   - Reliable autonomous feature execution
   - Workflow, orchestration, verification, and self-dogfooding
   - Link to full case study

3. **Aival** — restrained leadership case study
   - Product/platform ownership, team leadership, regulated delivery
   - High-level only
   - Link to concise case study

Do not make all project cards identical. Their presentation should reflect the different evidence each project carries.

### 4. Engineering depth

Compact technical stories rather than another card grid:

- Netcraft: 13× and 7× memory reductions
- Emotech: Java/Spring Boot and multi-region trial scale
- Optional contracting work subject to disclosure

This section should show range without competing with the primary case studies.

### 5. AI Lab

A living gallery/notebook for current technical experimentation:

- Hermes environment
- Agent workflows
- Memory/orchestration experiments
- Scheduled automations
- Local/hybrid models
- Homelab services
- Open-source contributions

Individual lab entries should be short, dated when useful, and clearly marked as experiments rather than polished products.

### 6. Leadership / operating approach

A concise section demonstrating how Justin works:

- Turn ambiguous product/regulatory needs into executable plans
- Stay hands-on with architecture and implementation
- Build delivery discipline around testing, release, and operations
- Design for the environment software must actually run in
- Use automation to reduce coordination and implementation overhead

Avoid soft-skill platitudes. Tie each principle to visible project evidence.

### 7. About

A short career arc:

- Computing with AI at Imperial
- Technical progression through Netcraft and Emotech
- Product/team leadership at Aival
- Current independent work and agent-system experimentation

Link to the full About page. Do not lead the homepage with a long biography.

### 8. Final CTA

Repeat the résumé action, then provide direct email and professional profiles.

Suggested structure:

> Looking for a builder who can lead?

- View résumé
- Email
- LinkedIn

## Metalynx Scatter case study

```text
Hero: model-space visual and concise outcome
Problem: model outputs are difficult to interrogate sample by sample
Audience: AI model developers/researchers
Input/data model: logits + metadata CSV
Analysis pipeline: PCA to three dimensions
Interaction model: point cloud, class coloring, hover, selection
Deep-dive workflow: spatial cohort → gallery → filtering → export
Product decisions and trade-offs
External research feedback, carefully qualified
Technical architecture/data-flow diagram
Real screenshots vs portfolio-specific redesign, clearly distinguished
Lessons and what Justin would improve now
```

## Kikan case study

```text
Hero: one-line idea progressing through an execution pipeline
Problem: autonomous coding fails without an opinionated, verified workflow
Design principles
End-to-end workflow stages
System architecture and workspace boundaries
Context/research/planning strategy
Implementation and testing gates
Failure recovery / iteration
Dogfooding: Kikan builds Kikan
One or two traceable feature histories after repository inspection
Current limitations and next experiments
```

## Aival case study

```text
Hero: concise leadership/ownership framing
Context: regulated clinical-AI product environment
Scope of responsibility
Team and delivery leadership
Cloud/on-prem operational constraints at a safe level
How regulation changed engineering decisions
Conceptual, newly drawn delivery model
Outcomes stated only at approved public granularity
Reflection
```

No proprietary architecture, internal screenshots, sensitive metrics, client identities, security topology, or confidential implementation details.

## AI Lab page

Not a chronological blog by default. Use a filterable collection:

- Agents
- Infrastructure
- Automation
- Models
- Memory
- Open source

Each item:

- What was tested
- Why it mattered
- Current status
- One screenshot/diagram where safe
- Link to code or note where public

## About page

- Short first-person biography
- Career timeline
- Leadership philosophy grounded in examples
- Technical interests
- Publications/research after factual verification
- Professional links

## Responsive priorities

- Hero must remain specific at mobile width.
- Project visuals must not become illegible thumbnails; crop or recompose them.
- Architecture diagrams require mobile-specific layouts or zoomable treatment.
- Primary CTA remains visible without sticky obstruction.
- Long case studies need a readable measure and section navigation.
