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