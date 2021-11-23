<script>
	import Accordion from './Accordion.svelte'
	import Section from '$lib/Section.svelte'
</script>

<!-- <svelte:head>
	<link rel='stylesheet' href='https://inspiredlabs.co.uk/css/sourcesans.css'>
</svelte:head> -->
<style>

	hr {
		width:100%;
		border: 0 solid transparent;
		border-bottom: 2px solid var(--accent);
	}

	.hanging { left:-0.55rem }

	li { padding-bottom:1rem }

.inherit { color: inherit }

</style>
<div class="bg-primary-back no-clutter">
<Section>
<div class="hanging relative white o-80" >- <b class="">Our Partners</b> include:</div>

<Accordion isOpen={false} buttonText={'UNICEF'}>
	This is about our work with UNICEF.
</Accordion>

<Accordion isOpen={false} buttonText={'UNHCR'}>
	This is about our work with UNHCR.
</Accordion>

<Accordion isOpen={false} buttonText={'Oxfam'}>
	This is about our work with Oxfam.
</Accordion>

<Accordion isOpen={false} buttonText={'Plan International'}>
	This is about our work with Plan International.
</Accordion>

<Accordion isOpen={false} buttonText={'Save&nbsp;The Children'}>
	This is about our work with Save The Children.
</Accordion>

<Accordion isOpen={false} buttonText={'others, who share our values'}>
	This is about our work with others who share our values.
</Accordion>



</Section>
</div>

<!--style>
<Accordion isOpen={false} buttonText={'R&D'}>
	<p>Performance and Efficiency are rarely treated as priority.</p>
	<p>If you want to 10� your business then you already know you need to do things&nbsp;differently. <strong>No-tech and Low-tech solutions</strong> are unusually&nbsp;effective: they avoid wasting energy, materials and money &mdash;&nbsp;whilst often being simple to&nbsp;implement.</p>
	<blockquote class="w-70 mr0 tr i georgia self-end">What previously invisible improvements await your&nbsp;business?</blockquote>
	<hr class="w-100">
	<ul class="pl0 list ">
		<li>
			<a class="inherit glow o-70 transition" ondragstart="return false" href="https://rvo.lt">RVO.LT</a> is a platform to communicate tried-and-tested sustainability solutions, developed over 20 years. This includes improved autonomy for electric vehicles and a low-energy Mist&nbsp;Shower.
		</li>
	</ul>
</Accordion>
</style-->