<script context="module">
	const allPosts = import.meta.glob("./**/*.md"); // Make it recursive: `./**/`

	let body = [];
	for(let path in allPosts) {
		//console.log(path)//meta only
		//console.log(allPosts[path])//as a function. This needs `()` to be invoked.
		body.push(allPosts[path]().then( ({metadata}) => {
			//console.log(metadata)
			return {path, metadata} // Valid metadata only: yamlvalidator.com/
		}))
	}

	export const load = async() => {
		const posts = await Promise.all(body)

		//console.log(posts)
		return {
			props: {
				posts //send the `props` to the component
			}
		}
	}
</script>
<script>
export let posts
// https://svelte.dev/repl/3382db29fc864d60b0a4ca47b3707a95?version=3.38.2

export function serializeSchema(thing) {
return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`
}

//let title, jobTitle, telephone, url; // from markdown

export const personSchema = {
  "@context": "http://schema.org/",
  "type": "Person",
  "jobTitle": posts.metadata.jobTitle,
  "name": posts.metadata.title,
  "telephone": posts.metadata.telephone,
  "url": posts.metadata.url
}

</script>