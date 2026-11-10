import { loadBlogPosts } from '$lib/content.js';

export async function load({ params }) {
	const posts = await loadBlogPosts();
	return { filteredPosts: posts.filter(({ metadata }) => metadata?.tags?.includes(params.tag)) };
}
