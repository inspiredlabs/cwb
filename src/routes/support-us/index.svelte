<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
</script>
<script>
	import ExperienceBannerWide from './ExperienceBannerWide.svelte';

	import Partners from './partners.md'
	import Partnerships from './Partnerships.svelte'
	import Corporate from './corporate.md'

	import WorkWithUs from './work-with-us.md'
	import WaysToHelp from './ways-to-help.md'
	import Fundraising from './fundraising.md'
	import Philanthropy from './philanthropy.md'
	import Campaign from './campaign.md'
	import Trusts from './trusts.md'
	import Gifts from './gifts.md'

	import Donate from './donate.md'
	import SocialMedia from './social-media.md'

</script>

<svelte:head>
	<title>Support Us | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how play can deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
	<meta name="author" content="Scott Phillips">
</svelte:head>

<!-- https://ifesworld.org/en/give/ -->

<ExperienceBannerWide />

<Partners/>
	<Partnerships/>
	<Corporate/>
<WorkWithUs/>
	<WaysToHelp/>
<Fundraising/>
	<Gifts/>
	<Trusts/>
	<Campaign/>
	<Philanthropy/>
	<Donate/>
<SocialMedia/>
<!-- <SubscribeToOurNewsFeed/> -->

<!-- <CodeOfEthics/> -->
<!-- <PrivacyPolicy/> -->