<script>
	import Footer from "$lib/Footer.svelte";
	import RightMenu from '$lib/RightMenu.svelte';//req. routes.js
	import PageTransition from "$lib/PageTransition.svelte";
	import Section from '$lib/Section.svelte';//<Section>
	import Sting from '$lib/header/Sting.svelte';


	// import LDTag from '$lib/LDTag.svelte';
	// import { websiteSchema, orgSchema } from '$lib/json-ld';
  export let key;
	// import Header from '$lib/header/Header.svelte';
	/* import "../tachyon.shower.css"; *//* layout components need import statement: //github.com/svelte-add/svelte-add/issues/129 && reset: //toolset.pkstate.com/removeComments/index.html */
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

	<!--  style="overscroll-behavior-y: none;/*contain*/" fixed -->
	<!--style>
		html {
			background: linear-gradient(0deg, rgba(159,0,255,1) 0%, rgba(255,215,0,1) 10%, rgba(255,215,0,1) 90%, rgba(159,0,255,1) 100%);
		}
	</style-->
	<!-- Debouncing the whole layout: https://greekfoods.netlify.app/ -->
	<!--link href="https://instantwebapp.com/css/tachyon.shower.css" rel="stylesheet" /-->
	<!-- from: https://favicon.io/favicon-converter/ -->
	<!-- <link rel=“canonical” href=“https://happy-shaw-91e31c.netlify.app/” /> --><!-- todo: https://ahrefs.com/blog/canonical-tags/ -->
	<!-- My microdata: -->
	<!-- https://json-ld.org/playground/ -->
	<!-- https://search.google.com/test/rich-results/ -->
	<!-- from: https://stackoverflow.com/questions/10520926/ -->


<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<!-- <LDTag schema={websiteSchema} /> -->
	<!-- <LDTag schema={orgSchema} /> -->
</svelte:head>
<!-- <Header /> -->

<!--
What width do you need? tachyons.io/docs/layout/max-widths/
Be aware of cumalative layout shift: https://web.dev/cls/
-->
<main class="flex flex-column w-100">
	<!-- Only top banner: `mt5` -->
	<PageTransition refresh={key}>
		<slot></slot>
	</PageTransition>
</main>

<Footer />

<nav class="w-100 fixed z-999" style="pointer-events: none">
	<Section>
		<div class="w3 h3">
			<Sting />
		</div>
	</Section>
</nav>

<RightMenu />