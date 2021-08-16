<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link href="https://instantwebapp.com/css/tachyon.shower.css" rel="stylesheet" />

	<!-- My microdata: -->
	<!-- https://json-ld.org/playground/ -->
	<!-- https://search.google.com/test/rich-results/ -->
	<!-- from: https://stackoverflow.com/questions/10520926/ -->
</svelte:head>


<Header />

<main>
	<slot></slot>
</main>

<footer>
	<p>Visit <a href="https://clownswithoutborders.org.uk/">CWB.org.uk</a>.</p>
	<!-- copyright	 -->
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
