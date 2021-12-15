<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
</script>
<script>

	import CoursesHero from './CoursesHero.svelte';
	import RohingyaBannerWide from './RohingyaBannerWide.svelte';

// Courses
import Courses from './courses.md'

// Programme Delivery
import Programming from './programme-delivery.md'
import WellbeingProtection from './wellbeing-protection.md'
import GirlsRights from './girls-rights.md'
import Wash from './wash.md'

import Improve from './improve-programme-delivery-outcomes-you-already-run.md'
import Section from '$lib/Section.svelte';
</script>

<svelte:head>
	<title>Courses | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how we can help deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
	<meta name="author" content="Scott Phillips">
</svelte:head>

<CoursesHero />
<RohingyaBannerWide />

<Section>
	<Courses />

	<Programming />
		<WellbeingProtection />
		<GirlsRights />
		<Wash />

	<Improve />
</Section>