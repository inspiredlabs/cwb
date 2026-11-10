import { loadBlogPosts } from '$lib/content.js';

export const prerender = true;

export async function load() {
	return { posts: await loadBlogPosts() };
}
