<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;

	/* "Importing all `*.md` news as modules is possible in vite, fetching them as a glob", -from: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=98
	learn more: ://vitejs.dev/guide/features.html#glob-import
	*/
	const allPosts = import.meta.glob("./zahra/*.md"); // Make it recursive: `./**/`

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
		const news = await Promise.all(body)

		//console.log(news)
		return {
			props: {
				news //send the `props` to the component
			}
		}
	}
</script>
<script>
import LDTag from '$lib/LDTag.svelte';
import { websiteSchema, orgSchema } from '$lib/json-ld';

import ZahraText from './zahra/ZahraText.svelte'
import Image from "$lib/Image.svelte"
export let news
</script>


<!--svelte:head>
	<LDTag schema={websiteSchema} />
	<LDTag schema={orgSchema} />
</svelte:head-->

<ZahraText/>
<section class="flex flex-column justify-center items-center charcoal">


<!-- {#if false}<slot></slot>{/if} "... received an unexpected slot "default"?: https://github.com/sveltejs/svelte/issues/4546 -->


<ul class="pt4 list pl0 ml0 w-100">

{#each news as {path, metadata:{ draft, region, title, tags, images, jobTitle } }}


	{#if draft ? undefined : !draft }
		<li class="mr-auto ml-auto mw6">

				{#each images as image, index }
					{#if index === 0 }
						{#if jobTitle ? jobTitle : undefined }
						<Image
							imageJPG={image}
							alt="{title} is {jobTitle}"
							caption="{title} is {jobTitle} {index}"
						/>
						{:else}
						<Image
							imageJPG={image}
							alt="{title}"
							caption="{title} {index}"
						/>
						{/if}
					{/if}
				{/each}

			<!-- <img src={`${path.match(/(\w+\/)/gi, '')}`}{images}> -->
			<a
				class="link glow o-80"
				href={`${path.replace(".md", "")}`}
			>
				{images}
			</a>
			{#each tags as article }
				<a
					class="link o-80 glow mid-gray bg-light-gray pa2 br3 mr2"
					href={`/zahra/${article}`}
				>
					{article}
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
