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
import Hero from '$lib/Hero.svelte';
import Intro from '$lib/Intro.svelte';

import LDTag from '$lib/LDTag.svelte';
import { websiteSchema, orgSchema } from '$lib/json-ld';

import Image from "$lib/Image.svelte"
export let posts

/*
let microdata = {
		type: "NGO",
		name: "Clowns Without Borders, UK",
		url: "https://cwb.org.uk/",
		logo: "https://cwb.org.uk/images/cwb.svg",
		image: "https://cwb.org.uk/images/sam-smiling.jpg",
		description: "index.svelte page description only",
		telephone: 442072446908,
		streetAddress: "118 Sternhold Avenue",
		addressLocality: "London",
		postalCode: "SW2 4PP",
		addressCountry: "United Kingdom"
	};
*/

</script>


<svelte:head>
	<title>CWB.ORG.UK |
		Training and Fundraising to improve the emotional wellbeing of children and young people living through conflict and disaster.
	</title>
	<!--  style="overscroll-behavior-y: none;/*contain*/" fixed -->
	<!--style>
		html {
			background: linear-gradient(0deg, rgba(159,0,255,1) 0%, rgba(255,215,0,1) 10%, rgba(255,215,0,1) 90%, rgba(159,0,255,1) 100%);
		}
	</style-->
	<LDTag schema={websiteSchema} />
	<LDTag schema={orgSchema} />
</svelte:head>

<Hero />

<Intro />



<!-- BANNER
Upload your study docs or become a
																									[ CTA ]
Course Hero member to access this document
-->


<style>/*
<section class="w-100 flex flex-row-ns flex-column bg-purple white" >
	Next level colour-schemes: https://codepen.io/inspiredlabs/pen/yLMppJL <br><br>

	bg-purple <br><br>
	- hover, background-color: rgba(0, 0, 0, 0.08); <br><br>
	- active, background-color: rgba(0, 0, 0, 0.333); <br><br>
	<br>
	Menu: gray: #333 & outline: 2px #C0C0C0 solid; <br><br>
	Body: bg: `light-gray` color: charcoal <br><br>
	article: `near-white` <br><br>
</section>
<section class="w-100 flex flex-row-ns flex-column bg-plum white" >
	bg-plum
</section>
<section class="w-100 flex flex-row-ns flex-column bg-mandarino white" >
	bg-mandarino
</section>
<section class="w-100 flex flex-row-ns flex-column bg-mustard white" >
	bg-mustard
</section>

<section class="w-100 flex flex-row-ns flex-column bg-meadow white" >
	bg-meadow
</section>
<section class="w-100 flex flex-row-ns flex-column bg-spa white" >
	bg-spa hover: #005333
</section>

<section class="w-100 flex flex-row-ns flex-column bg-egyptian white" >
	bg-egyptian
</section>
<section class="w-100 flex flex-row-ns flex-column bg-oxford white" >
	bg-oxford
</section>


<div class="black">
	<section class="w-100 flex flex-row-ns flex-column bg-dark-gray " >
		bg-dark-gray
	</section>
	<section class="w-100 flex flex-row-ns flex-column bg-mid-gray " >
		bg-mid-gray
	</section>
	<section class="w-100 flex flex-row-ns flex-column bg-gray " >
		bg-gray
	</section>
	<section class="w-100 flex flex-row-ns flex-column bg-silver " >
		bg-silver
	</section>
	<section class="w-100 flex flex-row-ns flex-column bg-light-silver " >
		bg-light-silver
	</section>

	<section class="w-100 flex flex-row-ns flex-column bg-moon-gray " >
		bg-moon-gray
	</section>

	<section class="w-100 flex flex-row-ns flex-column bg-light-gray " >
		bg-light-gray
	</section>

	<section class="w-100 flex flex-row-ns flex-column bg-near-white " >
		bg-near-white
	</section>

	<section class="w-100 flex flex-row-ns flex-column bg-white " >
		bg-white
	</section>
</div>


<article class="mt5">
	<section class="cf w-100 pv3">
		<div class="fl w-80 w-80-ns w-80-m w-two-thirds-l pl2 pl1-ns pl4-m pr4-m pl2-l">
			<div class="fr w-100 w-100-ns w-100-m measure-custom-l f4">

<!-- <section class="flex flex-column justify-center items-center charcoal"> -->


<!-- {#if false}<slot></slot>{/if} "... received an unexpected slot "default"?: https://github.com/sveltejs/svelte/issues/4546 -->


<ul class="list pl0">
<!-- // {JSON.stringify(posts)} array consists of: post.path and post.metadata // -->
{#each posts as {path, metadata:{ draft, region, title, tags, images, jobTitle } }}
<!--
https://regexr.com/
https://regex101.com/
<span>{`${path.replace(/(\/\w+.md)/gi, '')}`}</span>
<img src="{`${path.match(/(\w+\/)/gi, '')}`}{images}" alt={path}>
-->

	{#if draft ? undefined : !draft }
		<li class="">


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

		</div>
	</div>
</section>
</article><!-- /mt -->
*/</style>