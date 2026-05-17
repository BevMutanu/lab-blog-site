# My Blog Site

A small React blog landing page built with Vite. This project demonstrates a component-based blog layout using props, static data, and reusable UI components.

## Project Overview

This app renders a blog page with:

- A header that displays the blog name.
- An "About" section with a logo image and author introduction.
- A list of blog post previews driven by a JavaScript data object.
- A footer with a copyright notice.

The application is organized into reusable React components and uses Vite for development, build, and preview.

## What is included

- `src/App.jsx` — root component that assembles the page.
- `src/Components/Header.jsx` — renders the blog title.
- `src/Components/About.jsx` — renders the blog logo and about text.
- `src/Components/ArticleList.jsx` — maps posts to article cards.
- `src/Components/Article.jsx` — renders a single article preview.
- `src/Components/Footer.jsx` — renders the page footer.
- `src/Data/CreateBlog.js` — exports the blog metadata and post content.
- `src/assets/logo.jpg` — blog logo image.

## How it works

1. `src/App.jsx` imports `blog` from `src/Data/CreateBlog.js`.
2. `App` passes `blog.name` to `Header`.
3. `App` passes `blog.image` and `blog.about` to `About`.
4. `App` passes `blog.posts` to `ArticleList`.
5. `ArticleList` renders an `Article` component for each post, showing title, date, and preview text.

## Technologies

- React `^19.2.6`
- Vite `^8.0.12`
- ESLint `^10.3.0`
- `prop-types`

## Installation

Install dependencies with:

```bash
npm install
```

## Available Scripts

- `npm run dev` — start the Vite development server.
- `npm run build` — build the production bundle.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint on the project files.

## Development

Start the app in development mode:

```bash
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`). The page updates automatically when you save changes.

## Build and Preview

Build the production output:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Project Structure

- `index.html` — Vite entry HTML.
- `vite.config.js` — Vite configuration.
- `src/main.jsx` — React mounting entry point.
- `src/App.jsx` — main React component.
- `src/Components/` — page components.
- `src/Data/CreateBlog.js` — blog data source.
- `src/assets/` — static image assets.
- `src/App.css` and `src/index.css` — styling files.

## Notes

- The blog content is currently static and defined in `src/Data/CreateBlog.js`.
- This project is intended for learning React component structure, props passing, and basic Vite setup.
- `prop-types` is included for validating component props.

## License

This repository is private and intended for learning and demonstration purposes.
