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
		//const tag = page.params.tag; // || 'tech'

		// const filteredPosts = posts.filter((post) => {
		// 	return post.metadata.tags.includes(tag)
		// })

		return {
			props: {
				posts, //send the `props` to the component
				//filteredPosts,
				//tag
			}
		}

	}

</script>
<script>
//import CloseTrigger from '$lib/CloseTrigger.svelte'; // <CloseTrigger />
import { paginate, LightPaginationNav } from 'svelte-paginate'
export let posts;//filteredPosts.
//Consider conditional logic inside `_layout.svelte` to strafe the `/path/`.


const dateSortedPosts = posts.slice().sort((post1, post2) => {
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
import Locations from './Locations.svelte';
import Section from '$lib/Section.svelte';
import Sting from '$lib/header/Sting.svelte';
import Subscribe from '$lib/Subscribe.svelte';


import Hero from '$lib/Hero.svelte';
import Image from "$lib/Image.svelte"

// About
import Intro from './intro.md'
import Layout from './__layout.svelte';
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
		url: "https://happy-shaw-91e31c.netlify.app/",
		logo: "https://happy-shaw-91e31c.netlify.app/images/cwb.svg",
		image: "https://happy-shaw-91e31c.netlify.app/images/sam-smiling.webp",
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




<div class="bg-primary-back pv5" id="locations">

	<Section>
		<div class="hanging relative white o-80 no-clutter">- <b>Where we <!-- work --> Partner:</b></div>

<details><!-- open -->
<summary class="f2 f2-ns f1-m f1-l fw8 pointer no-clutter">UNICEF</summary>
<article class="br2 pa3 bg-primary-fore highlight">
	<ul class="list pl0">
	{#each dateSortedPosts as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}
		{#each tags as tag}
			{#if tag === 'UNICEF'}
				<li>
					<a
						sveltekit:prefetch
						href={`${path.replace(".md", "")}`}
						class="pointer link primary-back hover-secondary-fore transition"
					><h3 class="lh-title">{@html title}</h3>
						{#if !serp ? undefined : serp }
							<p class="serp">{@html serp}</p>
						{/if}
					</a>
				</li>
				{/if}
			{/each}
		{/each}
	</ul>
</article>
	<!-- [MAKE WASH FUN](https://www.unicef.org/rosa/stories/rohingya-children-become-hygiene-promotion-ambassadors-during-covid-19-response-coxs-bazar) -->
</details>
<details><!-- open -->
<summary class="f2 f2-ns f1-m f1-l fw8 pointer no-clutter">UNHCR</summary>
<article class="br2 pa3 bg-primary-fore highlight">
	<ul class="list pl0">
		{#each dateSortedPosts as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}
			{#each tags as tag}
				{#if tag === 'UNHCR'}
				<li>
					<a
						sveltekit:prefetch
						href={`${path.replace(".md", "")}`}
						class="pointer link primary-back hover-secondary-fore transition"
					><h3 class="lh-title">{@html title}</h3>
						{#if !serp ? undefined : serp }
							<p class="serp">{@html serp}</p>
						{/if}
					</a>
				</li>
				{/if}
			{/each}
		{/each}
		</ul>
	</article>
</details>

<details><!-- open -->
	<summary class="f2 f2-ns f1-m f1-l fw8 pointer no-clutter">Oxfam</summary>
	<article class="br2 pa3 bg-primary-fore highlight">
		<ul class="list pl0">
			{#each dateSortedPosts as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}
				{#each tags as tag}
					{#if tag === 'OXFAM'}
					<li>
						<a
							sveltekit:prefetch
							href={`${path.replace(".md", "")}`}
							class="pointer link primary-back hover-secondary-fore transition"
						><h3 class="lh-title">{@html title}</h3>
							{#if !serp ? undefined : serp }
								<p class="serp">{@html serp}</p>
							{/if}
						</a>
					</li>
					{/if}

				{/each}
			{/each}
		</ul>
	</article>
</details>

<details><!-- open -->
<summary class="f2 f2-ns f1-m f1-l fw8 pointer no-clutter">
	<span class="dn dib-ns dib-m dib-l">Plan International</span>
	<span class="dib dn-ns dn-m dn-l">PLAN</span>
</summary>
<article class="br2 pa3 bg-primary-fore highlight">
	<ul class="list pl0">
		{#each dateSortedPosts as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}
				{#each tags as tag}

					{#if tag === 'Plan International'}
					<li>
						<a
							sveltekit:prefetch
							href={`${path.replace(".md", "")}`}
							class="pointer link primary-back hover-secondary-fore transition"
						><h3 class="lh-title">{@html title}</h3>
							{#if !serp ? undefined : serp }
								<p class="serp">{@html serp}</p>
							{/if}
						</a>
					</li>
					{/if}

				{/each}
			{/each}
		</ul>
	</article>
</details>

<details><!-- open -->
	<summary class="f2 f2-ns f1-m f1-l fw8 pointer no-clutter">
		<span class="dn dib-ns dib-m dib-l">Save The&nbsp;Children</span>
		<span class="dib dn-ns dn-m dn-l">Save<br>The Children</span>
	</summary>
	<article class="br2 pa3 bg-primary-fore highlight">
		<ul class="list pl0">
			{#each dateSortedPosts as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}
					{#each tags as tag}

						{#if tag === 'Save The Children'}
						<li>
							<a
								sveltekit:prefetch
								href={`${path.replace(".md", "")}`}
								class="pointer link primary-back hover-secondary-fore transition"
							><h3 class="lh-title">{@html title}</h3>
								{#if !serp ? undefined : serp }
									<p class="serp">{@html serp}</p>
								{/if}
							</a>
						</li>
						{/if}

					{/each}
				{/each}
			</ul>
		</article>
	</details>



<!-- open -->
<!-- <details>
	<summary class="f2 f2-ns f1-m f1-l fw8 pointer no-clutter">Plan International</summary>
	<article class="br2 pa3 bg-primary-fore highlight">
		<p>
			<b>Myanmar</b>.
		</p>
	</ul></article>
</details> -->


		<!-- Learn: what does Sam need?
			<details>
			<summary class="f2 f2-ns f1-m f1-l fw8 pointer no-clutter">Solidarities International</summary>
			<article class="br2 pa3 bg-primary-fore highlight">
				<p>Games Against Covid-19 reaches ten thousand children in response to reinventing Solidarities' hygiene promotion&nbsp;sessions delivered in <b>Teknaf Refugee Camp, Bangladesh</b>. Important messages are lost when facilitators are unable to maintain people’s&nbsp;attention. Clowns Without Borders inspire and motivate children.
					</p>
			</ul></article>
		</details> -->
			<!-- <li>
				<h3 class="lh-title">{@html title}</h3> style="letter-spacing:-.025em" class="f2 f2-ns f1-m f1-l fw8 white cross lh-title">Others, who share our values</h3>
				<p>
				This is about our work with others who share our values.
				</p>
			</li> -->
			<!-- read more about it here -->

			<!-- <li>
				- Plan International, see Unni.
				- This is about our work with Save The Children.
					- how we share the vision...
					- and meet their goals
					> important endorsement


				## Moria Refugee Camp, Greece

			We have been sharing laughter and performances with children and families escaping war and oppression **since 2016**. The conditions in the camps are basic with families being housed in tents, temporary wooden structures or metal sea containers.

			The camps are difficult and sometimes frightening places for children. Wave of Hope.


			## Jordan

			The Za’atari refugee camp hosts around **80,000** Syrians who were forced to flee the war in Syria.

			Children make up **50%** of the camp’s inhabitants. The camp is now Jordan’s fourth biggest city.

			## Turkey

			Over **1.6 million** children who have fled the war in Syria live as refugees across Turkey.

			## Nepal

			On 25th April 15 a massive **7.6** magnitude earthquake hit Nepal affecting over **850,000** people.

			## Mozambique

			On **14th March 2019**, Cyclone Idai made landfall near Beira city, Mozambique. It was one of the worst storms to ever hit Mozambique.

			Flooding caused by the cyclone affected close to **2.2 million** people.

			## Philippines

			On **8th November 2013**, super typhoon Haiyan - believed to be the strongest storm ever recorded in history - made landfall in central Philippines, destroying **500,000 homes**.
			</li> -->

	</Section>
</div>





<section class="dt w-100 vh-100 vh-75-ns vh-75-m" id="#news">
	<div class="dtc v-mid mw8 center ph3-ns pt0">
		<Section>
			<h2 class="tc primary-back no-clutter">
			<span class="accent">Our&nbsp;Impact</span> Newsfeed</h2>
			<slot></slot>
		</Section>
		<div class="cf"><!-- ph2-ns pt2-ns pt5-m pt6-l -->
			{#each paginatedItems as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}

			{#if draft ? undefined : !draft }
			<!-- `index.svelte` NOT: `href={/blog/${path.replace(".md", "")}}` -->
			<a
				sveltekit:prefetch
				href={`${path.replace(".md", "")}`}
				class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0 pointer link primary-back hover-secondary-fore transition"
			>
			<!-- hover-bg-white bg-transition -->
			<header class="w-80">
				<div class="mb2 mb4-ns mb4-m mb4-l f4 f4-m f3-l lh-title h3 b">{@html title}</div>
				<div class="flex flex-column flex-column-m flex-row-l primary-back"><!-- justify-between -->
					{#if !date ? undefined : date }
						<time class="f7 f6-ns f6-m f6-l ttu b bb b--accent bw1 pb2">{new Date(date).toDateString()}</time><!-- .toLocaleDateString() -->

					{/if}
					{#if !author ? undefined : author }
						<div class="f7 f6-ns f6-m f6-l mid-gray b pt2 pt0-l pl2-l"><!-- ciao -->{author}</div>
					{/if}
				</div>
				{#if !serp ? undefined : serp }
					<p>{@html serp}</p>
				{/if}
				<!--hr class="accent b--inherit br0 b--solid"-->
				<!-- w-100 w-two-thirds-ns w-two-thirds-m w-two-thirds-l -->
			</header>
			<div class="cf pv3">
				<ul class="list pl0">{#each tags as tag}
					<a sveltekit:prefetch on:click|once={update} href={`.././${tag}`} class="pointer link transition f8 f6-ns f6-m f6-l fl-m pv2 ph1 ph3-ns ph2-m ph3-l mr2 ba bw1 b--primary-back secondary-fore ttu tracked tracked-ns tracked-m tracked-mega-l hover-bg-white dib b system tc mv1">#{@html tag}</a>
				{/each}
			</div>
		</a>


			{/if}

		{/each}</div></div></section>

	<Section>
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

<!-- <div class="bg-secondary-back pv3">
	<Section>
		<Subscribe />
	</Section>
</div> -->







<style>

	.list li {
		border-bottom: 2px solid var(--accent)/* <hr clss="bn w-100" style="border-top: 2px solid var(--accent)"> */
	}

	.list li:last-of-type {
		border-bottom: 2px solid transparent
		/* https://css-tricks.com/almanac/selectors/l/last-of-type/ */
	}

	.serp {
		padding-bottom: 2em;
		border-bottom: 2px solid var(--accent)/* <hr clss="bn w-100" style="border-top: 2px solid var(--accent)"> */
	}
	.serp:last-of-type { /* https://css-tricks.com/almanac/selectors/l/last-of-type/ */
		border-bottom:none;
		padding-bottom: 0;
	}

	.hanging { left:-0.8rem }

	/* https://stackoverflow.com/questions/64724139/error-styling-the-details-summary-marker-in-safari-webkit */


	summary::after {
		color:var(--accent);
		position:relative;
		content:'+';
		will-change: transform;
		display:inline-block;

		-webkit-text-decoration:none;
		text-decoration:none;
		-webkit-flex-direction:column;
		-ms-flex-direction:column;
		flex-direction:column;
	}

	summary:focus,
	summary:active {
		color:var(--accent);
	}

	summary:hover {
		color:var(--accent);
	}

	details>summary {
		color: white;
		transition: color 0.6s ease-out
	}

	details[open]>summary {
		color:var(--accent);
	}

	details>summary:after {
		transition: all 0.6s ease-out;
		transform: rotate(0turn);
		top:-2px;
		left:-2.5px;
	}

	details[open]>summary:after {
		transform: rotate(0.25turn);
		top:2.0px;
		left:1.0px;
		color:var(--accent);
		/* border-bottom: none!important; */
	}

	details[open]>summary:hover:after {
		color:var(--accent)
	}





	details[open] summary~article {
		/* animation:fade 0.666s ease-in-out */
		animation: animate 0.666s ease-in-out;
	}

	@keyframes animate {
		from {
			opacity: 0;
			transform: translateY(-1em);
		}
	}

	@keyframes fade {
		0% { opacity:0 }
		100% { opacity:1 }
	}

	details > summary {
		list-style: none;
	}

	summary{ list-style: none }
	summary::-webkit-details-marker,
	summary::marker{
		display: none;
	}



/***** NEWSFEED *****/
nav :global(.light-pagination-nav .option:hover) {
	background-color: var(--accent)!important;
	color: var(--secondary-back);
}

nav :global(.light-pagination-nav .pagination-nav) {
	background: transparent;
	box-shadow: none;
}

nav :global(.option.active) {
	color:var(--accent)!important;
	background: transparent!important
}

nav :global(.option.active:hover) {
	background: transparent!important;
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
		<li>


				{#each images as image, index }
					{#if index === 0 }
						{#if jobTitle ? jobTitle : undefined }
						<Image
							imageJPG={image}
							alt="{@html title} is {jobTitle}"
							caption="{@html title} is {jobTitle} {index}"
						/>
						{:else}
						<Image
							imageJPG={image}
							alt="{@html title}"
							caption="{@html title} {index}"
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
</ul></article><!-- /mt -->
*/
</style>

