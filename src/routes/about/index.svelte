<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
</script>

<script>
import AboutHero from './AboutHero.svelte'
import AboutBannerWide from './AboutBannerWide.svelte'
import Section from '$lib/Section.svelte'

import Intro from './intro.md'
import Awards from './awards.md'

import WhoWeAre from './who-we-are.md'
import Sam from './sam.md'
import Halima from './halima.md'
import Edward from './edward.md'
import Facilitators from './facilitators.md'

import Trustees from './trustees.md'

import Unni from './unni.md'
import Shilpa from './shilpa.md'

// import David from './david.md'
import Tanya from './tanya.md'
import Niki from './niki.md'
import Wendy from './wendy.md'
import Anna from './anna.md'
import Ed from './ed.md'



</script>

<svelte:head>
	<title>About Us, our Impact, Awards, Core Team &amp; Trustees | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how we can help deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
	<meta name="author" content="Scott Phillips">
</svelte:head>

<AboutHero />
<AboutBannerWide />
<Section>
	<Intro />
	<Awards />
	<!-- <OurImpact /> -->
	<WhoWeAre />
	<Sam />
	<Halima />
	<Edward />

	<Facilitators />
	<Trustees />

	<Unni />
	<Shilpa />
	<!-- <David /> -->
	<Tanya />
	<Niki />
	<Wendy />
	<Anna />
	<Ed />
</Section>

<!--
GOAL:
- rewrite section as: "their story": https://www.savethechildren.org.au/our-stories/man-on-a-mission
- Who needs some coaching or materials to perfrom?
- are they uncoachable?
- are they turstworthy? Our cause is bigger than any one person.
- Evidence of Trustees participation of particular interest.
-->