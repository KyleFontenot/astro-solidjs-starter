
const title = "KyleF's Solid Astro Starter";
const description =
	"Kyle Fontenot's starter boilerplate for a SolidJS and Astro website.";
const canonical = "https://website.com" | undefined;

const metadata = {
	title: title,
	description: description,
	canonical: "https://website.com",
	openGraph: {
		basic: {
			title: title,
			type: "website",
			image: "./<pathtosocialimage>" || null,
			url: "<url>" || null,
		},
		optional: {
			description: description,
			locale: "en_US", 
		}
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
