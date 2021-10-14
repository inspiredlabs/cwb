<script context="module">
	export const prerender = true;

	const allPosts = import.meta.glob("../news/*.md");

	let body = [];
	for(let path in allPosts) {
		body.push(allPosts[path]().then( ({metadata}) => {
			return {path, metadata}
		}))
	}

	export const load = async({page}) => {
		const news = await Promise.all(body)
		const article = page.params.article

		const filteredPosts = news.filter((post) => {
			return post.metadata.tags.includes(article)
		})

		return {
			props: {
				filteredPosts,
				article
			}
		}
	}
</script>
<script>
	export let filteredPosts
	export let article
</script>

<svelte:head>
	<title>News | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how we can help deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
	<meta name="author" content="Scott Phillips">
</svelte:head>


<section>



Tagged as: #{article}

<!-- {JSON.stringify(filteredPosts)} -->

<ul class="list pl0">
{#each filteredPosts as {path, metadata:{ draft, region, title, tags, images } }}

	{#if draft ? undefined : !draft }
		<li class="pa3">
			<a
				class="link glow o-80"
				href={`${path.replace(".md", "")}`}
			>
				{path}
			</a>
			{#each tags as article }
				<a
					class="link o-80 glow mid-gray bg-light-gray pa2 br3 mr2"
					href={`/news/${article}`}
				>
					{article}
				</a>
			{/each}
		</li>
	{/if}
{/each}
</ul>

</section>