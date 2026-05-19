# Chorale Saint Padre Pio — GitHub Pages Website

A beautiful, mobile-friendly Jekyll website for Chorale Saint Padre Pio.

## Quick Start

### 1. Fork or upload this repository to GitHub

Push all files to a repository named `your-username.github.io` or any repo. Then in **Settings → Pages**, set the source to **Deploy from a branch** → `main` → `/ (root)`.

### 2. Install locally (optional)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```
Open `http://localhost:4000` in your browser.

---

## How to Manage Content

### 📰 News
Edit `_data/news.yml` — add items at the top of the list (newest first). Format:
```yaml
- title: "Your announcement title"
  date: "2024-06-01"
  body: "Full text of the announcement."
```

### 🖼️ Gallery
Edit `_data/gallery.yml`. Add images to `/assets/images/gallery/` then reference them:
```yaml
- src: "/assets/images/gallery/my-photo.jpg"
  caption: "Concert June 2024"
  category: "Performances"
```
Categories are used for the filter buttons automatically.

### 🎵 Music Scores
Edit `_data/scores.yml`. Add PDF files to `/assets/scores/`:
```yaml
- name: "Kyrie in F"
  composer: "Anonymous"
  voice_part: "SATB"
  description: "Traditional choral setting"
  date: "2024-06-01"
  file: "/assets/scores/kyrie-in-f.pdf"
```
`voice_part` values also generate filter buttons automatically.

### 📝 Vocal Tips (Blog Posts)
Create a new file in `_posts/` named `YYYY-MM-DD-post-title.md`:
```markdown
---
layout: post
title: "Your Tip Title"
date: 2024-06-01
tags: [Technique]
read_time: 5
---

Your article content here, written in Markdown.
```
Tags create filter buttons on the Vocal Tips page automatically.

### 🏠 Hero Image
Add your choir photo to `/assets/images/hero.jpg` — it will appear on the homepage hero.

### 📋 Rehearsal Info
Edit `_data/rehearsal.yml`:
```yaml
day: "Every Friday"
time: "7:30 PM – 9:30 PM"
location: "Parish Hall, Saint Padre Pio Church"
```

### 📬 Contact Form
The contact form uses [Formspree](https://formspree.io). Sign up for free, create a form, and replace `YOUR_FORM_ID` in `about/index.html` with your Formspree form ID.

---

## Customisation

### Site title / tagline / description
Edit `_config.yml`.

### Fonts & colours
All design tokens are in `assets/css/main.scss` under `:root { ... }`.

### Navigation
The nav links are in `_layouts/default.html`.

---

## Design Notes

- **Fonts**: Cormorant Garamond (serif, display) + Jost (sans, body)
- **Palette**: Cream `#f9f5ee`, Gold `#b8962e`, Black `#1a1714`, Beige `#ede8dc`
- **Mobile**: Fully responsive with hamburger menu, safe-area support, touch-friendly targets
- **Jekyll**: Uses `_data/` for all dynamic content (news, gallery, scores, rehearsal), and `_posts/` for blog articles
