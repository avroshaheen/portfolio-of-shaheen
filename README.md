# Hi, I'm Shahinur Rahman Shaheen 👋

This is my personal portfolio: a one-page site I built to show who I am, what I've worked on, and how to reach me. I'm a Senior WordPress Developer based in Uttara, Dhaka, Bangladesh, and I designed the site in Apple's **Liquid Glass** style: translucent layers, soft blur, subtle highlights and smooth depth.

## Preview

> Add a screenshot here: `assets/preview.png`

Live site: `https://your-domain.com`

## What's Inside

- A single-page layout with smooth scrolling between sections
- A Liquid Glass UI with frosted glass cards, blur, soft borders and shadows
- A fully responsive design for mobile, tablet and desktop
- Light and dark mode friendly styling
- Sections built from my CV: About, Experience, Skills, Projects and Contact

## Sections

| Section | What you'll find |
| --- | --- |
| Hero | My name, role and a short intro |
| About | Who I am and what I build |
| Experience | Sr. WordPress Developer at Itwaybd.com (Jul 2026 – present) and WordPress Developer at Globaitsolutions.com.bd (Apr 2024 – Jun 2026) |
| Skills | Elementor, WooCommerce, ACF, PHP, JavaScript/jQuery, and React (intermediate) |
| Projects | Selected client and personal work |
| Contact | My email, LinkedIn and GitHub |

## How I Built It

- HTML5
- CSS3 (custom properties, `backdrop-filter`, Grid, Flexbox)
- Vanilla JavaScript
- Fonts: **Titillium Web** for headings and **Raleway** for body text, via Google Fonts

## Project Structure

```
.
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
└── README.md
```

## Run It Locally

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Open directly in a browser
open index.html
```

Or serve it with a local server:

```bash
npx serve .
```

## Customizing It

- **Colors and glass effect:** I control these through CSS variables in `:root` (blur, opacity, border, shadow).
- **Fonts:** I set them with the Google Fonts link in `<head>` and the `--font-heading` / `--font-body` variables.
- **Content:** All the text lives in the `<section>` blocks of `index.html`.

## Deployment

I host it as a static site. GitHub Pages, Netlify and Vercel all work fine:

- **GitHub Pages:** Settings → Pages → deploy from the `main` branch
- **Netlify / Vercel:** drag and drop the folder or connect the repo

## Browser Support

It works best in the latest Chrome, Edge, Safari and Firefox. The full glass effect needs `backdrop-filter`; older browsers get a solid semi-transparent background instead.

## Let's Connect

I'm open to WordPress and web development work. Feel free to reach out:

- **Location:** Uttara, Dhaka, Bangladesh
- **Email:** your-email@example.com
- **LinkedIn:** https://linkedin.com/in/your-handle
- **GitHub:** https://github.com/your-username

## License

© 2026 Shahinur Rahman. All rights reserved.

