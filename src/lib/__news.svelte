<script>
import Section from '$lib/Section.svelte';
export let title, objective, tags, author, location, images, serp, ethno, date, t, layout, draft, r; // `from markdown fontmatter
</script>

<article class="cf w-100 pa0 ma0">
  <div class="bg-primary-back">
    <header class="white lh-title mr-auto ml-auto w-80 tc flex flex-column">
      <p class="pv3">
        <span class="f8 f6-ns f6-m f6-l pv2 ph1 ph3-ns ph2-m ph3-l ba bw1 b--accent accent ttu tracked tracked-ns tracked-m tracked-mega-l b system tc">Our impact</span>
      </p>
      <h2 class="f1 f2-ns f1-m f-headline-l fw7 mb0">
        {@html title}
      </h2>
      <!-- {$page.path} -->
      <h3 class="i georgia f3 tc fw1 mb5 w-80 w-100-ns w-80-m measure-l mr-auto ml-auto">{@html serp}</h3>
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