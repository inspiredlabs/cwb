<script context="module">
	export const prerender = true;

	/* "Importing all `*.md` posts as modules is possible in vite, fetching them as a glob", -from: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=98
	learn more: ://vitejs.dev/guide/features.html#glob-import
	*/
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


	// This is a promise: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=456
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
	import Image from "$lib/Image.svelte";
	export let posts
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


<section class="flex flex-column justify-center items-center">

<!-- {#if false}<slot></slot>{/if} "... received an unexpected slot "default"?: https://github.com/sveltejs/svelte/issues/4546 -->


<ul class="pt4 list pl0 ml0 w-100">
<!-- // {JSON.stringify(posts)} array consists of: post.path and post.metadata // -->
{#each posts as {path, metadata:{ draft, region, title, tags, images } }}
<!--
https://regexr.com/
https://regex101.com/
<span>{`${path.replace(/(\/\w+.md)/gi, '')}`}</span>
<img src="{`${path.match(/(\w+\/)/gi, '')}`}{images}" alt={path}>
-->



	{#if draft ? undefined : !draft }
		<li class="pa3">

			{#each images as image }
				<Image imageJPG={image} alt={title} caption={title} />
			{/each}


			<!-- <img src={`${path.match(/(\w+\/)/gi, '')}`}{images}> -->
			<a
				class="link glow o-80"
				href={`${path.replace(".md", "")}`}
			>
				{images}
			</a>
			{#each tags as tag }
				<a
					class="link o-80 glow mid-gray bg-light-gray pa2 br3 mr2"
					href={`/tags/${tag}`}
				>
					{tag}
				</a>
			{/each}
		</li>
	{/if}
{/each}
</ul>
</section>

<!--style global>

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
</style-->
