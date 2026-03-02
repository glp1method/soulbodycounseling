# Soul Body Counseling — Website

## Files
- `index.html` — Homepage
- `about.html` — About page
- `services.html` — Services page
- `contact.html` — Contact page
- `blog.html` — Resources/Blog page
- `styles.css` — All styles
- `main.js` — JavaScript (nav, animations)

---

## Before You Deploy: Your Fill-In Checklist

Search for these placeholders across all HTML files and replace them:

### Personal Info
- `[Your Name]` → your actual name (about.html)
- `[Your phone number]` → your phone number (contact.html)
- `hello@soulbodycounseling.com` → your actual email
- `[list your insurances here]` → your accepted insurance plans (services.html)
- `$[X]` → your session rate (services.html)

### Psychology Today Link
- Every `https://www.psychologytoday.com` → replace with your ACTUAL PT profile URL

### Your Photo (about.html)
Replace the placeholder div with a real `<img>` tag:
```html
<!-- Replace this entire div: -->
<div class="about-photo-placeholder">...</div>

<!-- With this: -->
<img src="images/your-photo.jpg" alt="[Your Name], LCSW" style="width:100%; aspect-ratio:4/5; object-fit:cover; border-radius:var(--radius-lg);" />
```
Create an `images/` folder in the project and put your photo there.

### Bio Copy (about.html)
The bio paragraphs in about.html are placeholder copy — rewrite them in your own voice.

---

## Contact Form Setup

The contact form currently shows a success state on submit but doesn't actually send emails. To make it work, you have two easy options:

### Option A: Formspree (free, no backend needed)
1. Sign up at formspree.io
2. Create a new form
3. In contact.html, change `<form id="contactForm" onsubmit="handleSubmit(event)">` to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `onsubmit` and the `handleSubmit` script at the bottom

### Option B: Netlify Forms (if deploying to Netlify)
1. Add `netlify` attribute to the form tag: `<form netlify name="contact">`
2. Netlify handles everything automatically

---

## Deployment (Terminal)

### If using a static host (Netlify, Vercel, GitHub Pages):

**Netlify drop:** Just drag the entire folder to netlify.com/drop

**Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --dir=./soulbodycounseling --prod
```

**GitHub Pages:**
```bash
git init
git add .
git commit -m "initial site"
git remote add origin YOUR_REPO_URL
git push -u origin main
# Then enable GitHub Pages in repo Settings
```

### If pointing soulbodycounseling.com to your host:
Update your domain's DNS A records to point to your host's IP, or use your host's nameservers. Allow 24-48 hours to propagate.

---

## What's Missing / Future Additions
- Real blog posts (the blog page has placeholder cards)
- Actual photo on About page
- Google Analytics (add tracking snippet before `</head>` on all pages)
- Privacy Policy page (add before launch if collecting form data)
- Schema markup for local SEO (optional but helpful for Denver searches)
