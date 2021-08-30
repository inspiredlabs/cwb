<script context="module">
	export const prerender = true;
</script>

<script>
import Shilpa from './shilpa.md'
import Unni from './unni.md'
import Details from '$lib/Details.svelte'

</script>

<svelte:head>
	<title>About, Who We Are, Trustees | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how play can deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
	<meta name="author" content="Scott Phillips">
</svelte:head>

<Details open={false}>
	<div slot="summary">
		<header class="lh-title">
			<h1 class="db f3 f2-ns fw9 mb3">About</h1>
			<h2 class="db f4 f3-ns mb3">Who We Are</h2>
			<h3 class="db f6 f5-ns mt0-ns">Trustees</h3>
			<!-- <p class="f4-ns mt0-ns semibold">Semibold description</p> -->
		</header>
	</div>
	<div slot="details">
		<Unni />
		<Shilpa />
	</div>
</Details>