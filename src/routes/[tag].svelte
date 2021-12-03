<script context="module">
	export const prerender = true;

	// Import from VITE, as a single import.
	// LEARN: relative paths: youtu.be/dCrUSdUeV1E?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=277
	const allPosts = import.meta.glob("./blog/*.md"); //{markdown,md,svx}
	console.log(allPosts);

	let body = [];

	for(let path in allPosts) {
		body.push(allPosts[path]().then( ({metadata}) => {
			return {path, metadata}
		}))
	}

	export const load = async({page}) => {
		const posts = await Promise.all(body)
		const tag = page.params.tag;

		const filteredPosts = posts.filter((post) => {
			return post.metadata.tags.includes(tag)
		})

		return {
			props: {
				posts,
				filteredPosts,
			}
		}

	}

</script>
<script>
import Section from '$lib/Section.svelte';
import { paginate, LightPaginationNav } from 'svelte-paginate';
export let filteredPosts;


const dateSortedPosts = filteredPosts.slice().sort((post1, post2) => {
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

function update() {
	setTimeout(() => {
		window.location.reload();
	}, 100);
}
</script>
<div class="pv5 ">


	<section class="dt w-100 vh-100 vh-75-ns vh-75-m" id="#news">
		<div class="dtc v-mid mw8 center ph3-ns pt0">
			<Section>
				<h2 class="tc primary-back">
				<span class="accent">Our Impact</span>&nbsp;Newsfeed</h2>
				<slot></slot>
			</Section>
			<div class="cf"><!-- ph2-ns pt2-ns pt5-m pt6-l -->
				{#each paginatedItems as {path, metadata:{ title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r } }}

				{#if draft ? undefined : !draft }
				<!-- `index.svelte` NOT: `href={/blog/${path.replace(".md", "")}}` -->
				<a
					sveltekit:prefetch
					href={`${path.replace(".md", "")}`}
					class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0 link primary-back hover-secondary-fore"
				>
				<!-- hover-bg-white bg-transition -->
				<header class="w-80">
					<h4 class="f4 f4-m f3-l lh-title h3">{title}</h4>
					<div class="flex flex-column flex-column-m flex-row-l primary-back"><!-- justify-between -->
						{#if !date ? undefined : date }
							<time class="f7 f6-ns f6-m f6-l ttu b bb b--accent bw1">{new Date(date).toDateString()}</time><!-- .toLocaleDateString() -->
						{/if}
						{#if !author ? undefined : author }
							<div class="f7 f6-ns f6-m f6-l gray ml1 b">/ {author}</div>
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

			{/each}
			</div>
		</div>
		</section>

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