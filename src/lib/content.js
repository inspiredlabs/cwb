const blogModules = import.meta.glob('../routes/blog/*/+page.md');
const contentModules = import.meta.glob('../routes/**/+page.md');

function routeFromFile(file) {
	return '/' + file.replace('../routes/', '').replace(/\/\+page\.md$/, '');
}

async function loadModules(modules) {
	return Promise.all(
		Object.entries(modules).map(async ([file, load]) => {
			const { metadata } = await load();
			return { path: `${routeFromFile(file)}.md`, metadata };
		})
	);
}

export function loadBlogPosts() {
	return loadModules(blogModules);
}

export function loadTaggedContent() {
	return loadModules(contentModules);
}
