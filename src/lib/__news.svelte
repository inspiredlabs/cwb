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
        <!-- b--silver silver -->
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
      <div class="f7 f6-ns f6-m f6-l silver ml1 b" >{author}</div>
      <!-- hover-white bg-transition pointer link -->
    {/if}
  </div>

  </div>
    <Section>
      <slot></slot>
    </Section>
  </article>

<style>
.hover-o-80:hover,
.hover-o-80:focus,
.hover-o-80:active {
  opacity: .8;
}
.bg-twitter-alt {
  background: #0A70AF;
}
.bg-facebook-alt {
  background: #156BD9;
}
</style>

<!-- Tutorial: https://svelte.dev/tutorial/svelte-head -->
<svelte:head>
  <title>{title}</title>
  <title>{serp}</title>
  <meta name="description" content="">
</svelte:head>

<!-- bug: `Share.svelte` isn't recieving `post` from `__news.svelte` -->
<!--
- {@html encodeURI(`${serp}`)}: https://javascript.info/url
- You can cross check `encodeURI(string)` here urlencoder.io/
-->
<div class="w-100 pv5 tc "><!-- bg-primary-back -->
	<Section>
    <!-- `target`: https://www.youtube.com/watch?v=0hNDDpljJrs -->
    <!-- "semantically" "social networking" "sharing widget" "html" -->
    <!-- learn: A/B test this on audience -->
    <!-- <h4 class="primary-back">Who could you <span class="accent">share&nbsp;this?</span></h4> -->
		<header class="primary-back bc"><span class="accent">Share</span> article on:</header><!-- ttu tracked -->
		<ul class="list pl0 tracked tracked-m tracked-l ttu mb3 b ">
			<li class="f8 f7-ns f5-m f4-l dib"><!-- ph0 pv2 ph2-ns pv2-ns  --><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcwb.org.uk{$page.path}%2F&amp;quote=Article%20by%20{ encodeURI(`${author}`) },%20Clowns%20Without%20Borders"
      target="_blank" rel="noreferrer" title="Share on Facebook"
      class="pointer link f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-facebook-alt ttu tracked tracked-ns tracked-m tracked-mega-l dib system tc mv1 hover-o-80 o-transition">Facebook</a><!-- br1 o-transition hover-o-100 o-80 -->
        <!-- Static: stackoverflow.com/questions/5478702/add-facebook-share-button-to-static-html-page -->
      </li>
			<li class="f8 f7-ns f5-m f4-l dib"><a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fcwb.org.uk{$page.path}%2F&amp;text=https%3A%2F%2Fcwb.org.uk{$page.path}"
        target="_blank" rel="noreferrer" title="Tweet this"
        class="pointer link f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-twitter-alt ttu tracked tracked-ns tracked-m tracked-mega-l dib system tc mv1 hover-o-80 o-transition">twitter</a><!-- %0A%0A{encodeURI(`${serp}`)} --><!-- br1 o-transition hover-o-100 o-80 --></li>
			<li class="f8 f7-ns f5-m f4-l dib">
        <!-- { encodeURI(`${title}`) }%20%E2%80%93%20by%20{ encodeURI(`${author}`) }%3A%0A%0A -->
        <a href="mailto:?subject=Clowns%20Without%20Borders%20article%20by%20{ encodeURI(`${author}`) }&amp;body=https%3A%2F%2Fcwb.org.uk{$page.path}"
					target="_blank" rel="noreferrer" title="email this"
					class="pointer link f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-pm-blue-dark ttu tracked tracked-ns tracked-m tracked-mega-l dib system tc mv1 hover-o-80 o-transition">email</a><!-- br1 o-transition hover-o-100 o-80 -->
        </li>
		</ul>
	</Section>
</div>