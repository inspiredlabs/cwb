<script context="module">
	export const prerender = true;

	const allPosts = import.meta.glob("./**/*.md"); // Make it recursive: `./**/`

	let body = [];
	for(let path in allPosts) {
		//console.log(path)//meta only
		//console.log(allPosts[path])//as a function. This needs `()` to be invoked.
		body.push(allPosts[path]().then( ({metadata}) => {
			//console.log(metadata)
			return {path, metadata}
		}))
	}


	export const load = async() => {
		const posts = await Promise.all(body)

		console.log(posts)
		return {
			props: {
				posts
			}
		}
	}
</script>
<script>
	export let posts
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>



<section>
	<!-- {#if false}<slot></slot>{/if} "... received an unexpected slot "default"?: https://github.com/sveltejs/svelte/issues/4546 -->



<ul class="list bg-gold dn">
	<!-- // {JSON.stringify(posts)} array consists of: post.path and post.metadata // -->
	{#each posts as post}
	<li>{post.path}</li>
	{/each}
</ul>
</section>

<style global>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
