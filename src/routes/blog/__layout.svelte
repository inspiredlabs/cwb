<script context="module">
	export const prerender = true;

	// Import from VITE, as a single import.
	const allPosts = import.meta.glob("./*.md"); // `./blog/*.md` //{markdown,md,svx}
	//console.log(allPosts);

	let body = [];

	for(let path in allPosts) {
		body.push(allPosts[path]().then( ({metadata}) => {
			return {path, metadata}
		}))
	}

	export const load = async({page}) => {
		const posts = await Promise.all(body)
		//const metadata = page.params;
		//const title = page.params.title;

		return {
			props: {
				posts,
				//metadata
			}
		}

	}
console.log(allPosts);
</script>
<script>
import Section from '$lib/Section.svelte';
import { paginate, LightPaginationNav } from 'svelte-paginate';// github.com/TahaSh/svelte-paginate
export let posts;
//export let metadata;

const dateSortedPosts = posts.slice().sort((post1, post2) => {
	return new Date(post2.metadata.date) - new Date(post1.metadata.date);
});

let items = dateSortedPosts;
let currentPage = 1;
let pageSize = 3;
$: paginatedItems = paginate({ items, pageSize, currentPage })

// function myFunc(path){
// 	let string = `/blog/${path}`; //`/blog/${path.replace(".md","")}`
// 	let replace = /markdown|md|svx/gi;

// 	let newString = string.replace(replace, (match) => {
// 			console.log({match});
// 			return match;
// 	});
// }


function update(e) {

	history.pushState({}, "blog", "");

	setTimeout(() => {
		window.location.reload();
	}, 100);
}



//import { metadata } from "./first.md";
//console.log(metadata)
</script>

<slot></slot>

<div class="pv5 ">
<section class="dt w-100 vh-100 vh-75-ns vh-75-m" id="#news">
	<div class="dtc v-mid mw8 center ph3-ns pt0">
		<Section>
			<h2 class="tc primary-back no-clutter">
			<span class="accent">Our&nbsp;Impact</span> Newsfeed</h2>
		</Section>

		<!-- {#each paginatedItems as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}
			{#if path }
				{@html title}<br>
				{objective}<br>
				{tags}<br>
				{path}
			{/if}
		{/each} -->



		<div class="cf"><!-- ph2-ns pt2-ns pt5-m pt6-l -->
			{#each paginatedItems as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}

			{#if draft ? undefined : !draft }
			<!-- `index.svelte` NOT: `href={/blog/${path.replace(".md", "")}}` -->
			<a
				sveltekit:prefetch
				href={`/blog/${path.replace(".md", "")}`}
				class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0 link primary-back hover-secondary-fore"
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
				{#each tags as tag}
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


</div>







<style>

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
</style>