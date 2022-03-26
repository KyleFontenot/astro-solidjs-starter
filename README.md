# Kyle's Astro/SolidJS starter 

A performant opinionated starter for Astro. Uses the SolidJS renderer for optional super lightweight JSX and client-side components, `.astro` components for everything else, and all the goodies that come with [Astro](https://docs.astro.build/en/getting-started/), such as scoped stylings, CSS module support, and [Vite](https://vitejs.dev/). Prioritizes in centralized global settings that trickle down into global variables for SEO and CSS variables such as colors and fonts.

## To Use

```
mkdir project-name
cd project-name
degit KyleFontenot/solidjs-astro-starter
yarn
```
Then, adjust `/src/layouts/metadata.js` for global settings such as meta tag data, fonts, and colors that are injected via CSS variables. After, checkout the MainLayout for your particular font source strategy.

## Commands

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `yarn`            | Installs dependencies                        |
| `yarn run dev`    | Starts local dev server at `localhost:3000`  |
| `yarn run build`  | Build your production site to `./dist/`      |
| `yarn run serve`  | Host a build on default `localhost:3000`     |
| `yarn run publish`| Updates packages.json version, adds and commits all changes, and pushes to current branch.|
| `yarn run format`| Uses the [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro) for prettifying .astro files (beta)|

To prevent redundant version patches, a good habit is to `build` before running `publish` just to ensure build success before progressing a version.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── images/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── layouts/
│   │   ├── metadata.js
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── StyleOverview.astro
│   │   └── Tour.astro
│   ├── scripts/
│   │   ├── Flickity.astro
│   │   ├── Rellax.astro
│   │   └── ScrollReveal.astro
│   └── pages/
│       └── index.astro
└── package.json
```
The StyleOverview component is the default in `index.astro` becuase it displays all of the global settings on color, font, and Image. Could be a good starting point in creating the entire UI. Meant to be deleted.

## Using Image component 
```
---
import Image from 'astro-imagetools'
---
<Image src="/src/images/example.jpg" alt="Description text" />
<Image src="/src/images/example.jpg" alt="Description text" breakpoints={[320, 560, 800, 1240]} />
```
Keep in mind that the `src` prop is an absolute path from the project root when using `<Image />`. SVGs can be used in either `/public/` with either `<Image />` or with `<img />`, but image files must be from `/src/` (like `/src/images/`)

## Using built-in SEO component
[Astro-SEO](https://github.com/jonasmerlin/astro-seo), like Astro, is still in beta though working to be like a React Helmet replacement for Astro projects. By default, your `/src/layouts/metadata.js` file will trickle down into your `MainLayout.astro` file, which injects the SEO component. So, each page component you create using `MainLayout.astro` can be given a `slug` prop for dynamic title metatags.

## Links 
 - [Astro](https://docs.astro.build/en/getting-started/)
 - [SolidJS](https://www.solidjs.com/)
 - [astro-imagetools](https://github.com/RafidMuhymin/astro-imagetools)

### Handy Auxilary Tools
In `/src/scripts` are some useful drop-in library tools that use deferred CDN imports. These should be inserted in the your layout components. All of these are fully mobile friendly. Instructions and full config files will be coming next in the todo list. 
 
 - [Flickity](https://flickity.metafizzy.co/)
   - An image carousel library. Can be used for simple div scroll snapping as well. 
 - [Rellax](https://dixonandmoe.com/rellax/)
   - Parallax scrolling elements. Slows or quickens elements on scroll.
 - [ScrollReveal](https://scrollrevealjs.org/guide/hello-world.html)
   -  Reveal elements on scroll using Intersection Observer
 - [Quicklink](https://getquick.link/)
   -  Eagerly and lazily prefetches links in the page once idle. 
