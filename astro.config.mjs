import astroImagePlugin from "astro-imagetools/plugin";
import solid from "@astrojs/solid-js";

import { defineConfig } from "astro/config";

export default defineConfig({
	root: ".",
	srcDir: "./src",
	// pages: "./src/pages",
	outDir: "./dist",
	publicDir: "./public",
	// site: "",
	integrations: [solid()],
	vite: {
		plugins: [astroImagePlugin],
		build: "esbuild",
	},
});
