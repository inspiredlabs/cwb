import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	"extensions": [".svelte", ...mdsvexConfig.extensions],
  preprocess: [preprocess(), mdsvex(mdsvexConfig)], // https://el3um4s.medium.com/sveltekit-github-pages-4fe2844773de

	kit: {

		/*
		adapter: adapter(), //import adapter from '@sveltejs/adapter-netlify';
		*/
		adapter: adapter({
			// defaults: github.com/sveltejs/kit/tree/master/packages/adapter-static
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
