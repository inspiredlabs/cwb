import { loadTaggedContent } from '$lib/content.js';

export async function load({ params }) {
	const content = await loadTaggedContent();
	return {
		filteredPosts: content.filter(({ metadata }) => metadata?.tags?.includes(params.tag)),
		tag: params.tag
	};
}
