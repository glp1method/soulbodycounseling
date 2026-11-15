# Soul Body Counseling — Project Context

## About the Site
Static HTML/CSS/JS website for Zane Guilfoyle, LPC, LAC, ACS, ADS — a therapist in Denver, CO specializing in integrative, LGBTQ+-affirming care for gay and queer men.

**Live repo:** https://github.com/glp1method/soulbodycounseling

## Pages
- `index.html` — Homepage (includes LocalBusiness JSON-LD schema)
- `about.html` — Bio and photo (Guilfoyle.jpg.jpeg)
- `services.html` — Therapy services + Wellness Sessions (Holy Fire Reiki) + Clinical Supervision summary (links to `supervision.html`), fees, insurance
- `supervision.html` — Clinical Supervision page for LPCC and LAC candidates: who it's for, Colorado hours and paperwork, fees, FAQ, CTA to contact.html. Built from the services.html template. Has WebPage, Service and FAQPage JSON-LD; keep the FAQ schema in sync with the on-page FAQ
- `contact.html` — Contact form (EmailJS), office address
- `blog.html` — Resources/blog
- `blog-emdr.html` — "What EMDR Actually Feels Like — And Why It Works"
- `blog-gay-men-carry.html` — "What Gay Men Carry That Nobody Talks About in Therapy"
- `blog-harm-reduction.html` — "Harm Reduction Isn't Giving Up: Rethinking Recovery"
- `blog-reiki.html` — "What Science Actually Says About How Reiki Works"
- `blog-bdsm-container.html` — "BDSM, Trauma & the Healing Power of Power Exchange"
- `blog-hookup-culture-intimacy.html` — "The App Is Open Again: Hookup Culture, Intimacy, and What We're Actually Looking For"
- `blog-transpersonal-psychology.html` — "Beyond the Story You've Been Telling Yourself: An Introduction to Transpersonal Psychology"
- `blog-auricular-detox.html` — "Five Needles, Two Ears, and a Surprising Amount of Science: The Story of Auricular Detox"
- `blog-armor-masculinity.html` — "The Armor Nobody Taught You to Take Off"
- `blog-psychedelic-therapy.html` — "Psychedelic-Assisted Therapy: What's Real, What's Hype, and Where I Stand"
- `sitemap.xml` — All 16 pages; submit to Google Search Console when pushing new posts
- `robots.txt` — Allow all, points to sitemap
- `styles.css` — All global styles
- `main.js` — Nav toggle and shared JS

## Key Details
- **Location:** 3955 E Exposition Ave, Denver, CO 80209 (in-person) + virtual across Colorado
- **Insurance:** Anthem, Cigna, United, Aetna
- **Private pay:** $150/session (therapy) · $135/session (Holy Fire Reiki — 75 min, private pay only) · $150/session (individual supervision) · $90/person/session (group supervision, 2–4 people)
- **Fonts:** Cormorant Garamond (display) + DM Sans (body)

## Contact Form
- Powered by EmailJS (SDK loaded via CDN in contact.html)
- Service ID: `service_0xjzx2a`
- Template ID: `template_yinq1dh`
- Public Key: `-hMHl29JBYNUIGgH5`

## Voice & Tone
Direct, grounded, honest. Not clinical or life-coach-y. Written for gay and queer men who are tired of managing. The about page is the voice benchmark — all new copy should match it.

**Brand position:** "Grounded woo" — spiritual and somatic, but clinical and evidence-based. Not retreat-y.
**Through line:** worth and power — this anchors all messaging.

**Avoid these specifically:**
- "journey" — therapy cliché
- "non-judgmental" — overused jargon
- "celebrated, not just tolerated" — slogan-y
- "living more fully" — life-coach-y
- "one-size-fits-all" — generic
- "committed to making quality care accessible" — corporate
- "modalities" — clinical jargon when used in client-facing copy
- "meets your needs" / "meeting your needs" — corporate

**EMDR description** — always use the theater metaphor from the about page: "terrible name for an effective treatment... you're not remembering the movie, you're in it... move from the screen to the back of the theater."

## Navigation
- Menu order on every page: Home, About, Services, Supervision, Resources, Contact, Book Now. Footer links: About, Services, Supervision, Resources, Contact, Book Now
- The nav and footer are copied into each HTML file, so a new page must include the Supervision link, and a nav change has to be made on every page

## Supervision Rules
- Hour requirements on `supervision.html` come from 4 CCR 737-1 Rule 1.14(C)(4) (LPCC: 2,000 hours, 1,500 face-to-face, 24 months or 12 post-doctoral) and 4 CCR 744-1 Rule 1.15(C)(4) (LAC: 3,000 hours, 2,000 direct clinical; the statute's 2,000-hour figure is only the floor). Recheck against the current rule PDFs on sos.state.co.us before changing them
- Don't claim that one set of hours counts toward both the LPC and the LAC; neither board's rules say so
- Supervision rates live in three places: `supervision.html`, the fees grid in `services.html`, and Key Details above. Change all three together

## Hosting
- GitHub Pages with custom domain: soulbodycounseling.com
- DNS: GoDaddy A records → GitHub IPs, www CNAME → glp1method.github.io

## Workflow
- Edit locally, preview with `start <file>.html`, then `git add`, `git commit`, `git push`
- If push is rejected, run `git pull --rebase` then push again
- All Psychology Today links have been removed — everything routes to contact.html
- `CONTENT-CALENDAR.md` — tracks published blog posts and upcoming topics/dates; update it whenever a new post goes live
