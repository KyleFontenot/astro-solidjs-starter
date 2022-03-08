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
};
export default metadata;
