const metaDescription =
  "Kyle Fontenot's starter boilerplate for a SolidJS and Astro website.";

const metadata = {
  title: "KyleF's Solid Astro Starter",
  description: metaDescription,
  canonical: "https://website.com",
  openGraph: {
    basic: {
      title: "KyleF's Solid Astro Starter",
      type: "title",
      image: "./<pathtosocialimage>" || null,
      url: "<url>" || null,
    },
  },
  twitter: {
    card: "<twitter:card>" || null,
    site: "<twitter:site>" || null,
    creator: "<twitter:creator>" || null,
  },
};
export default metadata;
