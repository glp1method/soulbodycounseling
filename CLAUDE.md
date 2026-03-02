# Soul Body Counseling — Project Context

## About the Site
Static HTML/CSS/JS website for Zane Guilfoyle, LPC, LAC, ACS, ADS — a therapist in Denver, CO specializing in integrative, LGBTQ+-affirming care for gay and queer men.

**Live repo:** https://github.com/glp1method/soulbodycounseling

## Pages
- `index.html` — Homepage
- `about.html` — Bio and photo (Guilfoyle.jpg.jpeg)
- `services.html` — Services, fees ($150/session), insurance
- `contact.html` — Contact form (EmailJS), office address
- `blog.html` — Resources/blog (placeholder posts)
- `styles.css` — All global styles
- `main.js` — Nav toggle and shared JS

## Key Details
- **Location:** 3955 E Exposition Ave, Denver, CO (in-person) + virtual across Colorado
- **Insurance:** Anthem, Cigna, United, Aetna
- **Private pay:** $150/session
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

## Hosting
- GitHub Pages with custom domain: soulbodycounseling.com
- DNS: GoDaddy A records → GitHub IPs, www CNAME → glp1method.github.io

## Workflow
- Edit locally, preview with `start <file>.html`, then `git add`, `git commit`, `git push`
- If push is rejected, run `git pull --rebase` then push again
- All Psychology Today links have been removed — everything routes to contact.html
