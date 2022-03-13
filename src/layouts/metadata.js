const metaDescription =
	"Kyle Fontenot's starter boilerplate for a SolidJS and Astro website.";
const title = "KyleF's Solid Astro Starter";

const metadata = {
	title: title,
	description: metaDescription,
	canonical: "https://website.com",
	openGraph: {
		basic: {
			title: title,
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
	colors: {
		primary1: "#5BA6AE",
		primary2: "#146E7D",
		primary3: "#34575D",
		secondary1: "#F6BFAF",
		secondary2: "#E28B71",
		white: "#FCF7F2",
		black: "#34575D",
	},
	fonts: {
		primary: "Sunflower",
		secondary: "Sunflower",
		tertiary: "Sunflower",
	},
};
export default metadata;
