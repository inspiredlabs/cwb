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

<div class="pv5">
	<Section>
		<ul class="list pl0">
			{#each paginatedItems as {path, metadata:{ draft, title, tags, date, region,  images } }}

			{#if draft ? undefined : !draft }
				<li class="mb3">
					<a sveltekit:prefetch href={`${path.replace(".md", "")}`}>{title}</a>
					<span class="f7 o-80 glow mr2"><!-- georgia i  -->
						{new Date(date).toDateString()}
					</span>

					{#each tags as tag}
						<a sveltekit:prefetch on:click|once={update} href={`${tag}`} class="f7 o-80 glow mid-gray bg-light-gray pa1 br3 mr2">#{tag}</a>
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
</style>