// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import playformInline from "@playform/inline";

import mdx from "@astrojs/mdx";

import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";
import astrowind from './vendor/integration';

// https://astro.build/config
export default defineConfig({
	site: "https://pawstronaut.netlify.app",
	base: "/",
	integrations: [
		tailwind(),
		alpinejs(),
		react(),
		mdx(),
		(await import("@playform/inline")).default({
			Critters: true,
		}),
		astrowind({
      config: './src/config.yaml',
    }),
	],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	experimental: {
		svg: true,
	},
});
