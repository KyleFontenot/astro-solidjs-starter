import vsharp from "vite-plugin-vsharp";
import viteCompression from "vite-plugin-compression";

export default {
	plugins: [vsharp(), viteCompression()],
};
