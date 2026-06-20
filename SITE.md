# LiLab Website — Maintenance Guide

**Site URL:** https://jeanpatrick27.github.io/lilab-site/ (GitHub Pages — move to custom domain before launch)
**Repo:** https://github.com/levkhaykovich-del/lilab-site
**Branch:** `main` (auto-deploys to GitHub Pages)
**Local copy:** `C:\Lab\site\`

---

## How to Work with Claude

Open Claude Code (claude.ai/code or the desktop app) in the `C:\Lab\site\` folder.

**Always start a session by saying:**
> "I want to update the LiLab website. The site is at C:\Lab\site\. Please read BRAND.md for the brand guide and this file (SITE.md) for the site structure."

Then describe what you want to change. Claude will read the files, make the edits, and offer to push to GitHub.

**Git workflow:**
- Claude can commit and push directly to `main`
- GitHub Pages rebuilds automatically within ~1 minute
- Hard refresh your browser (Ctrl+Shift+R) to see changes immediately

---

## File Structure

```
C:\Lab\site\
├── index.html          ← Homepage
├── research.html       ← Research pillars
├── publications.html   ← Full publication list
├── group.html          ← Team page
├── teaching.html       ← Courses
├── gallery.html        ← Photos and videos
├── contact.html        ← Contact info and map
├── join.html           ← Recruitment page
├── BRAND.md            ← Brand guide (this repo)
├── SITE.md             ← This file
└── assets/
    ├── css/
    │   └── custom.css  ← All brand CSS (colors, cards, hero, member cards)
    ├── js/
    │   └── main.js     ← Nav + footer injection, AOS init, email obfuscation
    ├── images/
    │   ├── lab/        ← Lab photos (equipment, portraits, group photos)
    │   └── people/     ← Profile photos for current group members
    ├── videos/         ← Lab videos (mp4)
    └── pdfs/           ← Paper PDFs (only for papers without DOI links)
```

**Tech stack:** Pure static HTML — no build tools, no npm, no framework. Edit HTML files directly.
**CSS:** Tailwind CSS v3 via CDN + `assets/css/custom.css` for brand-specific styles.
**Nav/footer:** Injected by JavaScript — edit `assets/js/main.js` to change nav links or footer text.

---

## Common Tasks

### Add a new publication

Open `publications.html` and find the correct year heading (`<h2 id="y20XX">`). Add a new card directly below it:

```html
<div class="pub-card accent-red">
  <div class="text-xs font-semibold text-[#e63946] mb-1">Physical Review Letters · 20XX</div>
  <p class="font-medium text-slate-800 text-sm leading-snug mb-1"><em>"Title of the paper"</em></p>
  <p class="text-xs text-slate-400 mb-2">A. Author, B. Author and L. Khaykovich, Phys. Rev. Lett. <strong>VOL</strong>, PAGE (YEAR)</p>
  <a href="https://doi.org/10.XXXX/XXXXX" target="_blank" class="text-xs text-[#e63946] font-medium hover:underline">Link →</a>
</div>
```

**Accent colors:**
- `accent-red` (border `#e63946`) → Physical Review Letters, Nature Communications
- `accent-blue` (border `#003087`) → Physical Review A, J. Opt. Soc. Am. B
- `accent-green` (border `#006633`) → Few-Body Systems, Rev. Sci. Instrum., Optics Communications

If it's a new year, also add a heading and a "Jump to" nav pill:
```html
<h2 id="y20XX" class="font-display font-bold text-slate-900 text-2xl mt-10 mb-6 pb-3 border-b border-slate-200">20XX</h2>
```
And in the nav pills at the top:
```html
<a href="#y20XX" class="px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">20XX</a>
```

Also update the **homepage** Recent Publications section (`index.html`, "Recent Publications" section) to show the 3 most recent papers.

---

### Update group members

**Add a current member** (`group.html`, inside the relevant section — PhD Students, MSc Students, etc.):
```html
<div class="member-card" data-aos="fade-up">
  <img src="assets/images/people/FirstnameLastname.jpg" alt="Full Name" class="member-avatar mx-auto">
  <div class="font-display font-bold text-slate-800 text-lg">Full Name</div>
  <div class="text-[#006633] text-sm font-medium mt-1">PhD Student</div>
</div>
```
Copy the photo to `assets/images/people/`. Supported formats: jpg, png.
If no photo yet, use a placeholder div: `<div class="member-avatar mx-auto">👤</div>`

**Move someone to alumni** — remove their card from current members and add a row to the alumni table:
```html
<tr class="hover:bg-slate-50 transition-colors">
  <td class="px-5 py-3 text-slate-700 font-medium">Full Name</td>
  <td class="px-5 py-3 text-slate-500">PhD</td>
  <td class="px-5 py-3 text-slate-400">2025</td>
</tr>
```
Add at the top of the `<tbody>` (most recent first).

---

### Update courses

Edit `teaching.html`. Each card follows this pattern:

```html
<div class="bg-white rounded-2xl border border-slate-100 p-7 card-hover" style="border-left:4px solid #003087;">
  <div class="text-xs font-bold uppercase tracking-widest text-[#003087] mb-1.5">Undergraduate · COURSE_NUMBER</div>
  <h3 class="font-display font-bold text-slate-800 text-xl mb-2">Course Name</h3>
  <p class="text-slate-500 text-sm leading-relaxed">Short description.</p>
</div>
```
Use `#003087` (BIU Blue) for undergraduate, `#006633` (BIU Green) for graduate.

---

### Add a photo to the gallery

Upload the image to `assets/images/lab/`. Then in `gallery.html`, add it to the appropriate section:

```html
<a href="assets/images/lab/YOUR_IMAGE.jpg" class="photo-item glightbox" data-gallery="laser-lab">
  <img src="assets/images/lab/YOUR_IMAGE.jpg" alt="Description of photo" style="height:260px;">
  <div class="photo-overlay">⊕</div>
</a>
```

---

### Change contact info

Edit `contact.html`. The email (`lev.khaykovich@biu.ac.il`), phone, office number and map embed are all in the main content section. The email in the "How to Apply" section of `join.html` also needs updating if it changes.

The email in the nav (mailto link in join.html) and the obfuscated email in contact.html are separate — update both.

---

### Change the navigation

Edit `assets/js/main.js` — the `NAV_HTML` constant at the top. Add or remove `<a>` tags in both the desktop nav (inside `hidden md:flex`) and the mobile menu.

---

## Hero Heights Reference

All inner pages use `class="page-hero"` with an inline `style="min-height:XXvh;"` override.
The base CSS is 44vh — **always add the inline override** to ensure the nav doesn't overlap.

| Page | min-height |
|------|-----------|
| index.html | `h-screen` (full viewport) |
| research.html | `52vh` |
| publications.html | `52vh` |
| group.html | `55vh` (photo hero, different class) |
| teaching.html | `52vh` |
| gallery.html | `52vh` |
| contact.html | `52vh` |
| join.html | `60vh` (main recruitment hero) |

---

## Design Tokens (CSS)

All in `assets/css/custom.css`. The most important rules:

```css
/* Hero sections (inner pages) */
.page-hero {
  background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%);
  min-height: 44vh;          /* always override with inline style */
  display: flex;
  align-items: flex-end;     /* content sits at the bottom */
  padding-bottom: 4rem;
}

/* Publication cards */
.pub-card.accent-red   { border-left: 3px solid #e63946; }
.pub-card.accent-blue  { border-left: 3px solid #003087; }
.pub-card.accent-green { border-left: 3px solid #006633; }

/* Member photo circles */
.member-avatar {
  width: 72px; height: 72px;
  border-radius: 50%;
  object-fit: cover;
}
```

---

## Pushing to GitHub

After making changes, tell Claude:
> "Push to git"

Claude will commit with a descriptive message and push to `main`. GitHub Pages deploys automatically.

To do it manually:
```
git add -A
git commit -m "Description of changes"
git push origin main
```

---

## Before Launch Checklist

- [ ] Replace GitHub Pages URL with a custom domain (e.g. lilab.biu.ac.il)
- [ ] Update the `contact.html` Google Maps embed with the correct building/room
- [ ] Confirm all course numbers and descriptions with the department
- [ ] Add a favicon (16×16 and 32×32 png, reference in `<head>` of all pages)
- [ ] Check all publication DOI links open correctly
- [ ] Take an in-lab portrait photo for the group page PI section
