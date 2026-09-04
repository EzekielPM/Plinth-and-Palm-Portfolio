# PLINTH & PALM Portfolio

A responsive portfolio website for **PLINTH & PALM**, a Lagos-based lifestyle
and property brand offering Airbnb services, interior design and artisan
sourcing.

The site presents the brand story, founder profile, The Plinth Apartment case
study, realistic before-and-after 3D views, multi-angle imagery and project
walkthrough videos.

## Technology

- Next.js 16 App Router
- React 19
- Responsive CSS with light and dark themes
- Static export for fast, reliable hosting
- Web-optimised MP4 project videos

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Production build

```bash
npm ci
npm run build
```

The static production site is generated in the `out` folder.

## Deploy with GitHub and Vercel

1. Create a new empty GitHub repository.
2. Upload the complete contents of this folder to the repository root.
3. In Vercel, select **Add New → Project**.
4. Import the GitHub repository.
5. Keep **Framework Preset: Next.js** and the default build settings.
6. Select **Deploy**.

Every later commit to the GitHub `main` branch will automatically update the
production site after Vercel completes the build.

## Content locations

- Main page: `app/page.js`
- Styling and colour themes: `app/globals.css`
- Site metadata: `app/layout.js`
- 3D renders and site photographs: `public/assets`
- Founder portrait: `public/images/mercy-founder.jpg`
- Project videos and cover images: `public/media`

## Before public launch

- Add the official PLINTH & PALM email address and WhatsApp number.
- Connect the enquiry form to the selected email or form service.
- Add official Instagram and Airbnb listing links when available.
- Confirm that every photograph and video is approved for public use.

The current enquiry form is a presentation form and does not transmit data.
