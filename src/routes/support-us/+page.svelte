<script>
	import OurApproachHero from './OurApproachHero/+page.svelte';
	import OurApproachBannerWide from './OurApproachBannerWide/+page.svelte';

	import Partners from './partners/+page.md'
	import Partnerships from './Partnerships/+page.svelte'
	import Corporate from './corporate/+page.md'

	import WorkWithUs from './work-with-us/+page.md'
	import Volunteers from './volunteers/+page.md'
	import Facilitators from './facilitators/+page.md'

	import Fundraising from './fundraising/+page.md'
	import Philanthropy from './philanthropy/+page.md'
	import Campaign from './campaign/+page.md'
	import Trusts from './trusts/+page.md'
	import Gifts from './gifts/+page.md'

	import Donate from './donate/+page.md'
	import SocialMedia from './social-media/+page.md'

	import Section from '$lib/Section.svelte';//</Section>

</script>

<svelte:head>
	<title>Support Us, Partnerships &amp; Fundraising | Clowns Without Borders</title>
	<meta name="title" content="Humanitarian aid for children in disaster | Clowns Without Borders">
	<meta name="description" content="Play offers children and young people the best protection from disaster. Discover how we can help deliver better NGO results on programmes you already run.">
	<meta name="keywords" content="humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH">
	<meta name="author" content="Scott Phillips">
</svelte:head>

<!-- https://ifesworld.org/en/give/ -->

<OurApproachHero />
<OurApproachBannerWide />
<Section>
	<Partners/>
		<Partnerships/>
		<Corporate/>
	<WorkWithUs/>
		<Volunteers/>
		<Facilitators/>
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
</Section>