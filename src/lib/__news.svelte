<script>
import { page } from '$app/stores'; //<span class="bg-gold">https://cwb.org.uk{$page.path}</span>
import Section from '$lib/Section.svelte';
export let title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r; // `from markdown fontmatter
</script>

<article class="cf w-100 pa0 ma0">
  <div class="bg-primary-back">
    <header class="white lh-title mr-auto ml-auto w-90 w-80-ns w-80-m w-80-l tc flex flex-column">
      <p class="pv3">
        <span class="f8 f6-ns f6-m f6-l pv2 ph1 ph3-ns ph2-m ph3-l ba bw1 b--accent accent ttu tracked tracked-ns tracked-m tracked-mega-l b system tc">Our impact</span>
      </p>
      <h2 class="f1 f2-ns f1-m f-headline-l fw7 mb0">
        {@html title}
      </h2>
      <!-- {$page.path} -->
      <h3 class="i georgia f3 tc fw1 mb5 w-100 w-100-ns w-80-m measure-l mr-auto ml-auto">{@html serp}</h3>
      </header>
        <!-- <a href="#funding-partner" class="pointer link bg-transition br0 f6 f5-ns pv3 ba bw2 b--secondary-back ttu tracked-mega bg-primary-back hover-bg-accent w-third w-20-l b system tc white ph3 ph4-l">Become a Funding Partner</a> -->


  <div class="tc white pb3 pt5">
    {#if !date ? undefined : date }
      <time class="f7 f6-ns f6-m f6-l ttu b bb b--accent bw1 pb3">{new Date(date).toDateString()}</time><!-- .toLocaleDateString()  pb2 pb3-l -->
    {/if}
  </div>
  <div class="tc white pt3 pb5">
    {#if !author ? undefined : author }
      <div class="f7 f6-ns f6-m f6-l gray ml1 b" >{author}</div>
      <!-- hover-white bg-transition pointer link -->
    {/if}
  </div>

  </div>
    <Section>
      <slot></slot>
    </Section>
  </article>




<!-- bug: `Share.svelte` isn't recieving `post` from `__news.svelte` -->
<div class="w-100 pv5 tc "><!-- bg-primary-back -->
	<Section>






    <!--
    , {@html objective}, {@html tags}, {@html author},  {@html serp}, {@html date}
    -->


		<h4 class="primary-back">Share article <span class="accent">with:</span></h4><!-- ttu tracked -->
		<ul class="list pl0 tracked tracked-m tracked-l ttu mb3 b no-clutter">
			<li class="f8 f7-ns f5-m f4-l dib"><!-- ph0 pv2 ph2-ns pv2-ns  --><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcwb.org.uk{$page.path}%2F&amp;quote=Clowns%20Without%20Borders:%20{ encodeURI(`${serp}`) }"
					target="_blank" title="Share on Facebook"
					class="pointer link color-transition bg-transition f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-facebook ttu tracked tracked-ns tracked-m tracked-mega-l hover-secondary-back hover-bg-white dib b system tc mv1">facebook</a><!--br1-->
					<!-- Static: stackoverflow.com/questions/5478702/add-facebook-share-button-to-static-html-page -->
				</li>
			<li class="f8 f7-ns f5-m f4-l dib"><a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fcwb.org.uk{$page.path}%2F&amp;text=Clowns%20Without%20Borders:%20{ encodeURI(`${title}`) }%0A{ encodeURI(`${serp}`) }"
					target="_blank" title="Tweet this"
					class="pointer link color-transition bg-transition f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-twitter ttu tracked tracked-ns tracked-m tracked-mega-l hover-secondary-back hover-bg-white dib b system tc mv1">twitter</a><!--br1--></li>
			<li class="f8 f7-ns f5-m f4-l dib"><a href="mailto:?subject=Clowns%20Without%20Borders%20article:%20CWB.ORG.UK{$page.path}&amp;body={ encodeURI(`${title}`) }%0AAn%20article%20by%20{ encodeURI(`${author}`) }%20from%20Clowns%20Without%20Borders:%0Ahttps%3A%2F%2Fcwb.org.uk{$page.path}"
					target="_blank" title="email this"
					class="pointer link color-transition bg-transition f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-pm-blue-dark ttu tracked tracked-ns tracked-m tracked-mega-l hover-secondary-back hover-bg-white dib b system tc mv1">email</a><!--br1--></li>
		</ul>
	</Section>
</div>