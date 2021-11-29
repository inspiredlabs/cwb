<script context="module">
// 🔥 Static vs Serve Side Rendered: https://rodneylab.com/sveltekit-blog-starter/#staticVsSSR
/**
 * @type {import('@sveltejs/kit').Load}
 */
export const prerender = true;



	/* "Importing all `*.md` posts as modules is possible in vite, fetching them as a glob", -from: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=98
	learn more: ://vitejs.dev/guide/features.html#glob-import
	*/

	// LEARN: relative paths: youtu.be/dCrUSdUeV1E?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=277
	const allPosts = import.meta.glob("./blog/*.md"); //{markdown,md,svx}
	// Import from VITE, as a single import. //console.log(allPosts);

	let body = [];

	for(let path in allPosts) {
		body.push(allPosts[path]().then( ({metadata}) => {
			return {path, metadata}
		}))
	}

	// This is a promise: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=456
	export const load = async({page}) => {
		const posts = await Promise.all(body)
		const tag = page.params.tag || 'tech';

		const filteredPosts = posts.filter((post) => {
			return post.metadata.tags.includes(tag)
		})

		return {
			props: {
				posts, //send the `props` to the component
				filteredPosts,
			}
		}

	}

</script>








<script>
//import CloseTrigger from '$lib/CloseTrigger.svelte'; // <CloseTrigger />
import { paginate, LightPaginationNav } from 'svelte-paginate'
export let filteredPosts;


const dateSortedPosts = filteredPosts.slice().sort((post1, post2) => {
	return new Date(post2.metadata.date) - new Date(post1.metadata.date);
});

let items = dateSortedPosts;
let currentPage = 1;
let pageSize = 3;
$: paginatedItems = paginate({ items, pageSize, currentPage })

function update() {
	setTimeout(() => {
		window.location.reload();
	}, 100);
}






import DecentralisedBannerWide from './DecentralisedBannerWide.svelte';
import Locations from '$lib/accordion/Locations.svelte';
import Section from '$lib/Section.svelte';
import Sting from '$lib/header/Sting.svelte';

import Hero from '$lib/Hero.svelte';
import Image from "$lib/Image.svelte"

// About
import Intro from './intro.md'
// Our Impact

// Awards and Recognition
// Who we are
	// Core Team
	// Facilitators
	// Trustees
		// Senior Trustees
		// Trustees
// Support Us
/*
We are looking for your valuable support. We are seeking Innovation Funding and Partners to Deliver Programmes. You can Fundraise for us, Subscribe to our newsfeed or Share our stories over Social media.
*/

// Fundraising
// Where your money goes
// Donate

// Social Media
// Subscribe to our blog and get the news



/*
let microdata = {
		type: "NGO",
		name: "Clowns Without Borders, UK",
		url: "https://cwb.org.uk/",
		logo: "https://cwb.org.uk/images/cwb.svg",
		image: "https://cwb.org.uk/images/sam-smiling.webp",
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
	<title>Home | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how we can help deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
  <meta name="author" content="Scott Phillips">
</svelte:head>





<Hero />
<DecentralisedBannerWide />
<Intro />
<Locations />

<div class="pv5">
	<Section>
	<slot></slot>
	<ul class="list pl0">
		{#each paginatedItems as {path, metadata:{ draft, title, tags, date, region,  images } }}

		{#if draft ? undefined : !draft }
			<li class="mb3">
				<a sveltekit:prefetch href={`${path.replace(".md", "")}`}>{title}</a>
				<span class="f7 o-80 glow mr2"><!-- georgia i  -->
					{new Date(date).toDateString()}
				</span>

				{#each tags as tag}
					<a sveltekit:prefetch on:click|once={update} href={`${tag}`} class="f6 primary-back hover-secondary-back bg-light-gray pv2 ph3 br3 mr2">#{tag}</a>
				{/each}

				<!--   -->

			</li>
		{/if}

	{/each}
	</ul>

	<nav>
		<LightPaginationNav
			totalItems="{items.length}"
			pageSize="{pageSize}"
			currentPage="{currentPage}"
			limit="{1}"
			showStepOptions="{true}"
			on:setPage="{(e) => currentPage = e.detail.page}"
		/>
	</nav>
	</Section>
</div>



<style>
	nav :global(.light-pagination-nav .pagination-nav) {
		background: transparent;
		box-shadow: none;
	}

	nav :global(.option.active:hover) {
		background: transparent;
		cursor:auto;
	}

/*
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

<section class="w-100 flex flex-row-ns flex-column bg-primary-back white" >
	bg-primary-back
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

	<section class="w-100 flex flex-row-ns flex-column bg-primary-fore " >
		bg-primary-fore
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
*/
</style>

