# Kyle's Astro/SolidJS starter 

## To Use

```
mkdir project-name
cd project-name
degit KyleFontenot/solidjs-astro-starter
yarn
```
Then, adjust `/src/layouts/metadata.js` for global settings such as meta tag data, fonts, and colors that are injected via CSS variables. After, checkout the BaseLayout for your particular font source strategy.

## Commands

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `yarn`            | Installs dependencies                        |
| `yarn run dev`    | Starts local dev server at `localhost:3000`  |
| `yarn run build`  | Build your production site to `./dist/`      |
| `yarn run serve`  | Host a build on default `localhost:3000`     |
| `yarn run publish`| Updates packages.json version, adds and commits all changes, and pushes to current branch.|
| `yarn run format`| Uses the [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro) for prettifying .astro files (beta)|

To prevent redundant version patches, a good habit is to `build` before running `publish`

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
Keep in mind that the `src` prop is an absolute path from the project root.

## Links 
 - [Astro](https://docs.astro.build/en/getting-started/)
 - [SolidJS](https://www.solidjs.com/)
 - [astro-imagetools](https://github.com/RafidMuhymin/astro-imagetools)

### Handy Auxilary Tools
 - [ScrollReveal](https://scrollrevealjs.org/guide/hello-world.html)
  Add in 

