<script>
	export let data;
	$: filteredPosts = data.filteredPosts ?? [];
	$: tag = data.tag;
</script>

<div class="pv5">
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
</div>