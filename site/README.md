# The Mind Behind the Cart

A complete static website built for ITP105 — Principles of SEO, covering the psychology of impulse buying and unnecessary purchases.

## What's included

- `index.html` — Home
- `blog/index.html` — Blog listing (all 5 posts)
- `blog/why-people-buy-things-they-dont-need.html` — main article
- `blog/dopamine-and-impulse-buying.html`
- `blog/retail-therapy.html`
- `blog/endowment-effect-shopping.html`
- `blog/decision-fatigue-shopping.html`
- `about.html` — About
- `contact.html` — Contact (front-end form, see below)
- `seo-notes.html` — SEO documentation table (keywords, intent, titles, meta descriptions, slugs)
- `css/style.css` — shared stylesheet
- `js/main.js` — mobile nav toggle + contact form handling
- `images/*.svg` — original vector illustrations (no external/copyrighted images used)
- `sitemap.xml`, `robots.txt` — basic technical SEO

## Before you publish (required by ITP105)

1. **Read and rewrite the article text in your own words.** The five articles are original drafts written for this project, but your instructor requires that you personally review, verify, and revise the content before publishing it as your own coursework.
2. **Replace placeholders:**
   - `[Your Name]` in `about.html`
   - The email address in `contact.html` (`hello@mindbehindthecart.example`)
   - The social links in `contact.html` (currently `#`)
   - `[Publication date]` on each article
   - `https://www.example.com/` in `sitemap.xml` and `robots.txt` — swap in your real domain once deployed
3. **Connect the contact form to something that actually sends email.** Right now `contact.html` only validates in the browser (see the comment at the top of `js/main.js`). The easiest options:
   - Sign up for a free form backend such as Formspree or Getform, and point the form's `action` attribute at the endpoint they give you (then remove the `e.preventDefault()` line in `main.js`, or follow their embed instructions).
   - Or wire it to your own server endpoint if you have one.

## How to deploy

This is a plain static site — no build step required. Any static host works:

- **GitHub Pages:** push this folder to a repository and enable Pages in the repo settings.
- **Netlify / Vercel:** drag-and-drop the folder (or connect the repo) and deploy.
- Once live, update `sitemap.xml` and `robots.txt` with your real domain, and submit the sitemap in Google Search Console.

## Notes on content originality

All article text was written from scratch for this project based on general, well-known consumer-psychology concepts (dopamine and reward anticipation, loss aversion, the endowment effect, social proof, decision fatigue). It is not copied from any external source. Outbound links point to a small number of well-known, credible general references (APA, NIDA, Investopedia, Psychology Today) for readers who want to explore a concept further — verify these links still resolve before publishing, and add citations of your own where your instructor requires them.
