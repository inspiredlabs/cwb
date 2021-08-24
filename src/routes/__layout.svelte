<script>
	import Footer from "$lib/Footer.svelte";
	import RightMenu from '$lib/RightMenu.svelte';//req. routes.js
	import PageTransition from "$lib/PageTransition.svelte";
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

<svelte:head>
	<!-- from: https://favicon.io/favicon-converter/ -->
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<!-- Debouncing the whole layout: https://greekfoods.netlify.app/ -->
	<!--link href="https://instantwebapp.com/css/tachyon.shower.css" rel="stylesheet" /-->
	<meta name="title" content="Play: humanitarian aid for children in disaster | Clowns Without...">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how to use play to deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
  <meta name="author" content="Scott Phillips">
	<!-- <link rel=“canonical” href=“https://cwb.org.uk/” /> --><!-- todo: https://ahrefs.com/blog/canonical-tags/ -->
	<link rel=“canonical” href=“https://cwb.org.uk/” />


	<!-- My microdata: -->
	<!-- https://json-ld.org/playground/ -->
	<!-- https://search.google.com/test/rich-results/ -->
	<!-- from: https://stackoverflow.com/questions/10520926/ -->
</svelte:head>
<!-- <Header /> -->

<!-- debug ` bg-gold vh-100`
What width do you need? tachyons.io/docs/layout/max-widths/
Be aware of cumalative layout shift: https://web.dev/cls/
-->
<main class="flex flex-column w-100">
	<!-- Only top banner: `mt5` -->
	<PageTransition refresh={key}>
		<slot></slot>
	</PageTransition>
</main>

<RightMenu />
<Footer />


