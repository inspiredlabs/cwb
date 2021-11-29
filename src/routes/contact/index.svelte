<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;

</script>

<script>
	import ContactBannerWide from './ContactBannerWide.svelte';
	import Contact from '$lib/Contact.svelte';
	import Section from '$lib/Section.svelte';//</Section>
</script>

<svelte:head>
	<title>Contact | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how we can help deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
	<meta name="author" content="Scott Phillips">
</svelte:head>

<ContactBannerWide />

<Section>
	<Contact />
</Section>