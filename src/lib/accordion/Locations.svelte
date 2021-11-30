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

	.hanging { left:-0.8rem }

	li { padding-bottom:1rem }

	.cross:after {
		content:'+';
		top:-3.25px; /*~4px correct!*/
		left:1.3px; /*~3px*/
		position:relative;
		color: var(--accent);
	}








/* https://stackoverflow.com/questions/64724139/error-styling-the-details-summary-marker-in-safari-webkit */


summary::after {
	color:var(--accent);
	position:relative;
	content:'+';
	will-change: transform;
  display:inline-block;

  -webkit-text-decoration:none;
  text-decoration:none;
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
}

summary:hover{
	color:var(--accent);
}

details>summary {
	color: white;
	transition: color 0.6s ease-out
}

details[open]>summary {
	color:var(--accent);
}

details>summary:after {
	transition: all 0.6s ease-out;
	transform: rotate(0turn);
	top:-2px;
	left:-2.5px;
}

details[open]>summary:after {
	transform: rotate(0.25turn);
	top:2.0px;
	left:1.0px;
	color:var(--accent);
	/* border-bottom: none!important; */
}

details[open]>summary:hover:after {
	color:var(--accent)
}

details[open] summary~article {
  animation:fade 0.666s ease-in-out
}

@keyframes fade {
  0% { opacity:0 }
  100% { opacity:1 }
}

details > summary {
	list-style: none;
}

summary::-webkit-details-marker {
  display:none
}
</style>

<div class="bg-primary-back no-clutter pv5" id="locations">

	<Section>
		<div class="hanging relative white o-80">- <b>Where we <!-- work --> Partner:</b></div>
		<!-- FOR EACH SNIPPET -->
		<details><!-- open -->
			<summary class="f2 f2-ns f1-m f1-l fw8 pointer">UNICEF</summary>
			<article class="br2 pa3 bg-primary-fore">
					<!-- [MAKE WASH FUN](https://www.unicef.org/rosa/stories/rohingya-children-become-hygiene-promotion-ambassadors-during-covid-19-response-coxs-bazar) -->
					<p>
					Escaping persecution in&nbsp;Myanmar, an estimated 700,000 Rohingya&nbsp;people fled to Bangladesh and now live in refugee camps near <b>Cox’s Bazar,&nbsp;Dhaka</b>.</p>
					<p>
					"Make Wash Fun" is a handwashing behaviour change programme developed over 3 years with the Rohingya&nbsp;children. This hygine focused movement has been shared with thousands of children to help overcome the effects of poor sanitation in slums across the&nbsp;city.</p>
			</article>
		</details>
		<!-- FOR EACH SNIPPET -->







		<details><!-- open -->
			<summary class="f2 f2-ns f1-m f1-l fw8 pointer">UNHCR</summary>
			<article class="br2 pa3 bg-primary-fore">

				<p>The UN High Commissioner described <b>Hungary's Transit Zones</b> as “detention&nbsp;centers”. It is extremely difficult to access these sites, where families live in small, locked&nbsp;compounds. The monotony of day-to-day life is compounded during Summer, when there is no&nbsp;school. We created fun resources for UNHCR&nbsp;to build anticipation before delivering performances and&nbsp;workshops. We also developed a series of activities to help the UNHCR&nbsp;team keep sharing laughter and play after we had&nbsp;left. This helped raise awareness of Clowns Without Borders unique approach to delivering Humanitarian&nbsp;Aid.
				</p>
			</article>
		</details>

		<details><!-- open -->
			<summary class="f2 f2-ns f1-m f1-l fw8 pointer">Oxfam</summary>
			<article class="br2 pa3 bg-primary-fore">
				<p>The aim of the <b>Bangladesh</b> tour, 2018 was to create a safe, fun and engaging space for children to explore WASH resources (Sanitation &amp; Hygine). We delivered playful workshops training adult facilitators to focus on making self-expression&nbsp;fun.
				</p>
			</article>
		</details>

		<!-- open -->
		<!-- <details>
			<summary class="f2 f2-ns f1-m f1-l fw8 pointer">Plan International</summary>
			<article class="br2 pa3 bg-primary-fore">
				<p>
					<b>Myanmar</b>.
				</p>
			</article>
		</details> -->

		<details><!-- open -->
			<summary class="f2 f2-ns f1-m f1-l fw8 pointer">Solidarities International</summary>
			<article class="br2 pa3 bg-primary-fore">
				<p>
					Games Against Covid-19 reaches ten thousand children in response to reinventing Solidarities' hygiene promotion&nbsp;sessions delivered in <b>Teknaf Refugee Camp, Bangladesh</b>. Important messages are lost when facilitators are unable to maintain people’s&nbsp;attention. Clowns Without Borders inspire and motivate children.
					</p>
			</article>
		</details>
			<!-- <li>
				<h3 style="letter-spacing:-.025em" class="f2 f2-ns f1-m f1-l fw8 white cross lh-title">Others, who share our values</h3>
				<p>
				This is about our work with others who share our values.
				</p>
			</li> -->
			<!-- read more about it here -->

			<!-- <li>
				- Plan International, see Unni.
				- This is about our work with Save The Children.
					- how we share the vision...
					- and meet their goals
					> important endorsement


				## Moria Refugee Camp, Greece

			We have been sharing laughter and performances with children and families escaping war and oppression **since 2016**. The conditions in the camps are basic with families being housed in tents, temporary wooden structures or metal sea containers.

			The camps are difficult and sometimes frightening places for children. Wave of Hope.


			## Jordan

			The Za’atari refugee camp hosts around **80,000** Syrians who were forced to flee the war in Syria.

			Children make up **50%** of the camp’s inhabitants. The camp is now Jordan’s fourth biggest city.

			## Turkey

			Over **1.6 million** children who have fled the war in Syria live as refugees across Turkey.

			## Nepal

			On 25th April 15 a massive **7.6** magnitude earthquake hit Nepal affecting over **850,000** people.

			## Mozambique

			On **14th March 2019**, Cyclone Idai made landfall near Beira city, Mozambique. It was one of the worst storms to ever hit Mozambique.

			Flooding caused by the cyclone affected close to **2.2 million** people.

			## Philippines

			On **8th November 2013**, super typhoon Haiyan - believed to be the strongest storm ever recorded in history - made landfall in central Philippines, destroying **500,000 homes**.
			</li> -->




			<!-- <Accordion isOpen={false} buttonText={'UNICEF'}>
				This is about our work with UNICEF.
			</Accordion>

			<Accordion isOpen={false} buttonText={'UNHCR'}>
				This is about our work with UNHCR.
			</Accordion>

			<Accordion isOpen={false} buttonText={'Oxfam'}>
				This is about our work with Oxfam.
			</Accordion>

			<Accordion isOpen={false} buttonText={'<span class="dib dib-ns dib-m dn-l">Plan&nbsp;Int.</span><span class="dn dn-ns dn-m dib-l">Plan International</span>'}>
				This is about our work with Plan International.
			</Accordion>

			<Accordion isOpen={false} buttonText={'Save&nbsp;The <span class="dib dib-ns dib-m dn-l"></span>&nbsp;Children<span class="dn dn-ns dn-m dib-l">Children</span>'}>
				This is about our work with Save The Children.
			</Accordion>

			<Accordion isOpen={false} buttonText={'others, who share our values'}>

			</Accordion> -->
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