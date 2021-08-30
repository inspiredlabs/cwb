import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from 'svelte-preprocess'
//import adapter from '@sveltejs/adapter-static'
import adapter from '@sveltejs/adapter-netlify';


/** @type {import('@sveltejs/kit').Config} */
export default {
	"extensions": [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
		mdsvex(mdsvexConfig)
	], // preprocess(), https://el3um4s.medium.com/sveltekit-github-pages-4fe2844773de
	kit: {
		vite: {
	    optimizeDeps: {
	      exclude: ['support']  // !`vite.config.js`: https://github.com/sveltejs/vite-plugin-svelte	from: https://svelte-modals.mattjennings.io/
	    }
	  },
		/*
		adapter: adapter(), //import adapter from '@sveltejs/adapter-netlify';
		*/
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: true // https://crinkle.dev/writing/journey-from-gatsby-to-sveltekit-deployment#hosting-on-netlify
	}
};

/*
adapter: adapter({
	// defaults: github.com/sveltejs/kit/tree/master/packages/adapter-static
	pages: 'build',
	assets: 'build',
	fallback: null
}),
*/