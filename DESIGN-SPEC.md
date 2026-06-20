# LiLab Website — Design Spec
*Bar-Ilan University · Khaykovich Ultracold Atoms Lab*
*Date: 2026-06-17*

---

## Hand-off — Start Here

**If you are a new Claude session continuing work on this site or creating brand materials:**

1. **Read `C:\Lab\site\BRAND.md`** — all colors (hex), fonts, approved text, research pillars, LinkedIn/PDF prompt template.
2. **Read `C:\Lab\site\SITE.md`** — file structure, common tasks with code snippets, hero height table, git workflow.

Those two files are the authoritative working documents. This spec is the original design brief and is useful for broader context, but BRAND.md and SITE.md are what you need day-to-day.

**Repo:** https://github.com/levkhaykovich-del/lilab-site · **Branch:** `main` · **Local:** `C:\Lab\site\`

---

## Goal

Rebuild the lab website from a 2013-era static template into a modern, professional site that attracts PhD students, MSc students, and postdoctoral researchers. Primary conversion action: prospective students visit → read the research → click "Join Us" → send an application email.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| HTML | Vanilla HTML5 | Universal, no build step, easy to hand off |
| CSS | Tailwind CSS v3 via CDN | Modern utilities, no conflicts, no installation |
| Animations | AOS.js via CDN | Scroll-fade effects, single script tag |
| Gallery lightbox | GLightbox via CDN | Photos + video, zero jQuery dependency |
| Fonts | Google Fonts (Space Grotesk + Inter) | Modern, scientific feel |
| Hosting | GitHub Pages | Free, reliable, custom domain support |
| Domain | TBD (e.g. khaykovich-lab.com) | To be purchased and pointed via DNS |

No build tools, no npm, no framework. Drop files on GitHub, done.

---

## Design System

### Colors
| Name | Hex | Usage |
|---|---|---|
| Dark navy | `#0d1b2a` | Hero backgrounds, nav, footer |
| Mid navy | `#1b263b` | Hero gradient end |
| BIU blue | `#003087` | Links, accents, research card (Efimov) |
| BIU green | `#006633` | Research card (Solitons/Chemistry) |
| Laser red | `#e63946` | CTA buttons, Join Us banner, publication accent |
| Laser cyan | `#4cc9f0` | Hero accent text, stats |
| Off-white | `#f8fafc` | Section backgrounds |
| White | `#ffffff` | Card backgrounds |
| Body text | `#1e293b` | Main text |
| Muted text | `#64748b` | Captions, secondary |

### Typography
- **Headlines:** Space Grotesk, 700–800 weight
- **Body:** Inter, 400–500 weight
- **Labels/caps:** Inter, 600, letter-spacing 0.1em, uppercase

### Spacing rhythm
- Section padding: `py-20` (80px top/bottom)
- Card gap: `gap-6`
- Max content width: `max-w-6xl mx-auto px-6`

### Visual pattern
Dark hero → white/off-white alternating sections → dark footer. The dark sections use subtle radial gradient "laser glow" blobs (red, cyan, green) at low opacity behind content.

---

## Site Architecture

```
/
├── index.html          Home
├── research.html       Research (3 pillars)
├── publications.html   Publications (2001–2026, incl. pre-BIU section)
├── group.html          Group Members
├── join.html           Join Us ← primary conversion page
├── gallery.html        Photos & Videos
├── teaching.html       Teaching
├── contact.html        Contact
├── BRAND.md            Brand guide (colors, fonts, tone, LinkedIn/PDF usage)
├── SITE.md             Maintenance guide (how to update site with Claude)
└── assets/
    ├── css/custom.css  Overrides + custom classes
    ├── js/main.js      Nav + footer injection, scroll behavior, email obfuscation
    └── images/
        ├── lab/        All lab photos (equipment, portraits, group photos)
        └── people/     Profile photos for current group members
```

---

## Photo Manifest

| Filename | Content | Used On |
|---|---|---|
| `IMG_8941.jpeg` | Red laser optical table (overhead) | Hero background, photo strip |
| `IMG_8942.jpeg` | Wide red laser table | Gallery |
| `IMG_8944.jpeg` | Overhead optical table | Gallery, photo strip |
| `IMG_8945.jpeg` | Optical table detail | Gallery |
| `IMG_8946.jpeg` | Overhead full table | Gallery |
| `IMG_8947.jpeg` | Vacuum + optics | Gallery |
| `IMG_8948.jpeg` | Wide red laser scene | Gallery |
| `IMG_8999.jpeg` | Green + blue lasers (most vivid) | Hero, photo strip |
| `IMG_8183.jpeg` | BEC vacuum chamber (side) | Research page |
| `IMG_8184.jpeg` | BEC chamber (wide) | Research page, Join Us |
| `IMG_8185.jpeg` | Student working on BEC machine | Join Us page (hero) |
| `IMG_8186.jpeg` | BEC machine mid-build | Gallery, Join Us |
| `IMG_8187.jpeg` | Clean BEC chamber shot | Research page |
| `39d782d8.JPG` | Candid: Prof + student (floor) | Group/About PI — *confirm identity* |
| `c43ff84c.JPG` | Group photo (8 people, space art bg) | Group page header |
| `bb164483.MP4` | Hyperlapse: student building bitter magnet | Join Us page |
| `c4cef370.MP4` | Translation stage in action | Gallery |
| **PLACEHOLDER** | Prof. Khaykovich at laser table (portrait) | Group PI bio, About |

---

## Pages — Detailed Design

### 1. index.html — Home

**Sticky navigation** (dark `#0d1b2a`, blur backdrop on scroll):
- Left: "LiLab" wordmark + "· Bar-Ilan University" in cyan muted
- Right: Home · Research · Publications · Group · Teaching · Gallery · [Join Us] (red pill button)
- Mobile: hamburger menu

**Hero section** (full viewport height, dark navy gradient):
- Background: `IMG_8941` or `IMG_8999` at low opacity behind gradient overlay
- Subtle radial glow blobs (red top-right, cyan bottom-left, green center)
- Left column (60%):
  - Eyebrow: "Bar-Ilan University · Department of Physics" in cyan caps
  - H1: "Ultracold Atoms / at the Quantum Edge" (cyan gradient on second line)
  - Body: 2-sentence description of what the lab does
  - **Key narrative line**: "Our new BEC machine is complete — we're now recruiting to do the science."
  - Two CTAs: [Join Our Team →] (red) + [Explore Research] (outline white)
  - Stats row: `50+ Publications` · `20+ Years` · `PRL · Nature Comms`
- Right column (40%, visible on desktop):
  - Floating card with `IMG_8999` (green+blue lasers) — most photogenic

**Research snapshot** (white bg):
- Section label: "What We Do" in red caps
- H2: "Three Research Frontiers"
- Three equal cards:
  1. **Higher-Order Interactions** — BIU blue accent — brief description
  2. **Coherent Few-Body Physics** — BIU green accent — brief description
  3. **Ultracold Chemistry** — laser cyan accent — brief description
- Each card: icon, title, 2-sentence description, "Learn more →" link

**Photo strip** (dark bg, full bleed):
- Label: "Lab in Action"
- 4-across grid of lab photos (clickable → Gallery)
- Use: `IMG_8941`, `IMG_8999`, `IMG_8185` (student), `IMG_8183` (BEC machine)
- AOS fade-in stagger on scroll

**Recent publications** (off-white bg):
- Last 3 papers, styled with left accent border (red = PRL/Nature, blue = PRA)
- Journal name + year in color, title bold, authors muted
- "View all 50+ publications →" link

**Join Us banner** (laser red gradient, full bleed):
- "We're recruiting — Postdoc · PhD · MSc"
- Subtext from PDF: "Be part of the exciting shift from building the apparatus to pioneering research"
- [See Open Positions →] button (white/red)

**Footer** (dark navy):
- Left: © 2025 Khaykovich Lab · BIU Physics
- Center: quick nav links
- Right: email address

---

### 2. research.html — Research

**Hero** (dark, smaller — 50vh):
- Title: "Research"
- Subtitle: "Pushing the boundaries of quantum simulation and ultracold physics"
- Background: `IMG_8999` at low opacity

**Intro paragraph** (white):
- The "nearing completion of BEC machine → pioneering research" narrative from the PDF

**Three research pillars** (alternating white/off-white):

**Pillar 1 — Higher-Order Interactions** (white):
- Left: text — what it is, why it matters, what's novel
- Right: placeholder for diagram / relevant image
- Color accent: BIU blue

**Pillar 2 — Coherent Few-Body Physics** (off-white):
- Left: image (old trimer.gif or new diagram)
- Right: text — Efimov states, interferometric approach, unprecedented control
- Color accent: BIU green

**Pillar 3 — Ultracold Chemistry** (white):
- Left: text — state-to-state reactions, microkelvin temperatures
- Right: placeholder image
- Color accent: laser cyan
- Note: newest / most exciting direction for students

**Apparatus section** (dark bg):
- Title: "State-of-the-Art Equipment"
- Description of the new BEC machine
- Photo grid: `IMG_8183`, `IMG_8184`, `IMG_8187` (the new BEC setup)
- Caption: "Our new high-flux Lithium BEC machine, nearing completion 2025"

**Publications callout** (off-white):
- "See our full publication record" → publications.html

---

### 3. publications.html — Publications

**Layout**: Single full-width column (no sidebar)

**Styling upgrade from old site**:
- Each paper: card with colored left border (red = highlighted/top journal, blue = standard)
- Journal name styled, year as section anchor
- Authors with Khaykovich bold
- PDF + DOI link buttons
- Years 2006–2025 grouped, newest first

**Theses section** at bottom, same card style.

---

### 4. group.html — Group Members

**Hero** (dark, short):
- Group photo `c43ff84c.JPG` as full-width background, gradient overlay
- Title: "Our Team"

**PI bio section** (white):
- Left: photo placeholder → candid `39d782d8.JPG` (confirm identity) OR portrait photo to be taken
- Right:
  - Name: Prof. Lev Khaykovich
  - Title: Full Professor, Department of Physics, Bar-Ilan University
  - Bio paragraph: research career, expertise, lab founding
  - Links: BIU faculty page, ResearchGate, email

**Current members** (off-white):
- Grid of member cards with real profile photos
- Lab Engineer: Yael Diamant
- PhD Students: Roy Elbaz (MSc 2021)
- MSc Students: Neta Priel, Michelle Veksler, Anat Hurvitz

**Alumni** (white):
- Table: name, degree, year, current position (where known)
- List from old site

---

### 5. join.html — Join Us ← MOST IMPORTANT PAGE

**Hero** (dark, tall):
- Background: `IMG_8185` (student working on BEC machine) with dark overlay
- Title: "Come and Join Us"
- Subtitle: "Be part of the shift from building the apparatus to pioneering research"

**The opportunity** (white):
- Full text adapted from the LinkedIn PDF:
  - BEC machine nearly complete, high-flux lithium BECs
  - Unique moment: get in at the start of the science phase
  - Collaborative, ambitious team

**Three research directions** (off-white):
- Same three pillars from research.html in card format
- Each with: title, one-sentence hook, "what you'll actually do" bullet list

**What we offer** (white):
- Bullet list: state-of-the-art equipment, BIU stipend, international collaborators, hands-on from day one
- Embedded video: `bb164483.MP4` (hyperlapse student building magnet) — autoplays muted, shows what student work looks like
- Caption: "Students build, maintain, and operate every part of the machine"

**Who we're looking for** (off-white):
- Pulled from PDF: "inherently curious, thrive on hard problems, excited by complex experimental environment, eager to take initiative"
- NOT: "must have X years of Y" — the PDF is intentionally open, reflect that

**How to apply** (red banner):
- Subject line exact: "Application: PhD/Postdoc Position at LiLab"
- Email: lev.khaykovich@biu.ac.il
- Big [Send Application Email] button that pre-fills mailto with subject line

**Open positions** (white):
- Current: Postdoc + PhD candidates
- Each as a card with: role, what you'll work on, requirements (minimal), apply button

---

### 6. gallery.html — Gallery

**Layout**: Masonry grid (CSS columns), GLightbox for click-to-expand

**Sections**:
1. "The Laser Lab" — 8 original IMG_89xx photos
2. "The BEC Machine" — IMG_818x photos
3. "The Team" — group photo, any people photos
4. "Videos" — both MP4s embedded (GLightbox video support)

---

### 7. teaching.html — Teaching

Simple page: current courses taught, semester, course number. Minimal styling — this page is low priority.

---

### 8. contact.html — Contact

- Prof. Khaykovich name + title
- Email (obfuscated against spam bots, same technique as old site)
- Phone
- Department + university + address
- BIU Physics department link
- Google Maps embed (Bar-Ilan University campus)

---

## Content Gaps / Things to Collect

| Item | Status | Notes |
|---|---|---|
| Prof. Khaykovich portrait | **Using IPS2023.jpeg** | Still pending an in-lab portrait shot |
| Student member photos | **Done** | Real photos for all 5 current members in `assets/images/people/` |
| Teaching course list | **Done** | Mathematics 3 (86207), Atomic Physics (86755), Orientation–Time (UG), Quantum Gases (86722, Grad) |
| Prof. bio paragraph | **Done** | Written and live on group.html |
| Research area descriptions (3 pillars) | **Done** | All three pillars have Lev-approved text on research.html and join.html |
| Publications list | **Done** | 2001–2026, all papers with DOI links; pre-BIU section (2001–2005) added |
| Custom domain | **Pending** | TBD — site currently on GitHub Pages |

---

## Key Narrative (Use Throughout Site)

> "We have just completed building a state-of-the-art experimental setup specifically designed to routinely generate high-flux Bose–Einstein condensates (BECs) of lithium atoms. With this powerful new platform, we are launching an ambitious research program focused on three frontier areas where quantum physics has the most to reveal."

**Homepage one-liner (approved by Prof. Khaykovich):**
> "We cool lithium atoms to a millionth of a degree above absolute zero and explore the strangest corners of quantum physics — Bose-Einstein condensates with higher-order correlations, Efimov states, and ultracold chemistry. In brief, phenomena that exist nowhere else in the universe."

The machine is now **complete** — the narrative has shifted from "about to start" to "now doing science, come join us".

---

## Implementation Notes

- **Mobile-first**: Tailwind's responsive prefixes (`md:`, `lg:`) throughout
- **Accessibility**: Alt text on all images, sufficient color contrast, focus states on all interactive elements
- **Performance**: Images lazy-loaded (`loading="lazy"`), photos resized/compressed before use
- **SEO**: Title tags per page, meta descriptions, Open Graph tags for social sharing
- **Email obfuscation**: Maintain the JS reverse-string trick from old site to protect against spam bots
- **PDF links**: Keep all existing PDFs; link from publications page

---

## Not In Scope

- CMS / admin interface
- Contact form (email button is sufficient)
- Blog / news feed
- Analytics (can add Google Analytics tag later as a one-liner)
- Dark mode toggle
