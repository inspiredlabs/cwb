import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['support']
	},
	ssr: {
		noExternal: ['svelte-paginate', 'svelte-typewriter']
	}
});
