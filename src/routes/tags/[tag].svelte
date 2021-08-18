<script context="module">
	export const prerender = true;

	const allPosts = import.meta.glob("../**/*.md");

	let body = [];
	for(let path in allPosts) {
		body.push(allPosts[path]().then( ({metadata}) => {
			return {path, metadata}
		}))
	}

	export const load = async({page}) => {
		const posts = await Promise.all(body)
		const tag = page.params.tag

		const filteredPosts = posts.filter((post) => {
			return post.metadata.tags.includes(tag)
		})

		return {
			props: {
				filteredPosts,
				tag
			}
		}
	}
</script>
<script>
	export let filteredPosts
	export let tag
</script>

<section>

Tagged as: #{tag}

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