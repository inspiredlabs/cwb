<script>
	import PageTransition from "$lib/PageTransition.svelte"
  export let key
	import Header from '$lib/header/Header.svelte';
	import "../tachyon.shower.css"; /* layout components need import statement: //github.com/svelte-add/svelte-add/issues/129 && reset: //toolset.pkstate.com/removeComments/index.html */
	import '../app.css';
</script>

<!-- 1. Assign current route's path to `key` prop -from: dev.to/evanwinter/page-transitions-with-svelte-kit-35o6 -->
<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<svelte:head>
	<!-- Debouncing the whole layout: https://greekfoods.netlify.app/ -->
	<!--link href="https://instantwebapp.com/css/tachyon.shower.css" rel="stylesheet" /-->

	<!-- My microdata: -->
	<!-- https://json-ld.org/playground/ -->
	<!-- https://search.google.com/test/rich-results/ -->
	<!-- from: https://stackoverflow.com/questions/10520926/ -->
</svelte:head>


<Header />

<!--
` bg-gold vh-100`
What width do you need? tachyons.io/docs/layout/max-widths/
Be aware of cumalative layout shift: https://web.dev/cls/
-->
<main class="flex flex-column pa3 w-100 mw7 mr-auto ml-auto debug">
	<div class="mt5">
		<PageTransition refresh={key}>
			<slot></slot>
		</PageTransition>
	</div>
</main>

<footer class="flex flex-column justify-center items-center pa3 pv0 pv3-m pv3-l debug">
	<p>Visit <a class="link b dim" href="https://clownswithoutborders.org.uk/">CWB.org.uk</a>.</p>
	<!-- copyright	 -->
</footer>

