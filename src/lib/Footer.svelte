<script>
// import { children } from "svelte/internal";
import Sting from '$lib/header/Sting.svelte';

import {routesHome, routesAbout, routesSupport, routesCourses, routesRegulation } from '$lib/routes.js';
import { page } from '$app/stores'; //{$page.path === `${home.href}`}
import HomeLink from '$lib/header/HomeLink.svelte';
import Outro from '$lib/Outro.svelte';
import Social from './Social.svelte';
import Subscribe from './Subscribe.svelte';
import Section from '$lib/Section.svelte';
import Hotspot from "$lib/Hotspot.svelte";
import FundingPartner from "$lib/FundingPartner.svelte";
</script>


<footer class="bg-primary-back white-90 antialias">
  <!-- id={$page.path} -->
  <Hotspot />
  <FundingPartner />
<Section>
<!-- <header style="font-size:2.5vw" class="pt5">
  <HomeLink />
</header> -->
  <Outro />

  <hr class="bt inherit o-50 mv4"/><!-- fl cf w-100 bt mb0 inherit o-50 mv4 -->

  <!-- <div class="w-100 cf fl">
    <div class="w2 h2">
      <Sting />
    </div>
  </div> -->

  <nav class="cf pv4 f5 f6-l no-clutter">
    <div class="w-100 cf fl">
      <!-- Home<br>
      Where we partner<br>
      News<br>
      Become a funding partner<br> -->

      <!---- HOME  ---->
      <ul class="list pl0">
        {#each routesHome as home}
          <li class="{home.header}">
            <a
              class="lh-nav no-underline link o-80 glow inherit transition"
              class:active={$page.path === `${home.href}`}
              sveltekit:prefetch href="{home.href}"
            >{home.title}</a>
          </li>
        {/each}
      </ul>
      <!---- HOME ---->
    </div>
    <div class="fn fl-l w-third-l pr2-l">
      <!---- ABOUT  ---->
      <ul class="list pl0">
        {#each routesAbout as about}
          <!-- Note the reactive string literal doesn't need escaping //javascript.info/regexp-escaping -->
          <li class="{about.header}">
            <a
              class="lh-nav no-underline link o-80 glow inherit transition"
              class:active={$page.path === `${about.href}`}
              sveltekit:prefetch href="{about.href}"
            >{about.title}</a>
          </li>
        {/each}
      </ul>
      <!---- ABOUT ---->
      <hr class="dn bt mb0 inherit o-50 mv4 mr5 dn-m db-l"/><!-- style="border:2px solid white" -->
      <!-- Regulation -->
      <ul class="list pl0">
        {#each routesRegulation as regulation}
          <li class="{regulation.header}">
            <a
              class="lh-nav no-underline link o-80 glow inherit transition"
              class:active={$page.path === `${regulation.href}`}
              sveltekit:prefetch href="{regulation.href}"
            >{regulation.title}</a>
          </li>
        {/each}
      </ul>
      <!-- Regulation -->
    </div><!-- /Column1 -->


    <div class="fn fl-l w-third-l pr1-l pl1-l">
      <!---- Support ---->
      <ul class="list pl0">
        {#each routesSupport as support}
          <li class="{support.header}">
            <a
              class="lh-nav no-underline link o-80 glow inherit transition"
              class:active={$page.path === `${support.href}`}
              sveltekit:prefetch href="{support.href}"
            >{support.title}</a>
          </li>
        {/each}
      </ul>
      <!---- Support ---->
    </div><!-- /Column2 -->


    <div class="fn fl-l w-third-l pl2-l">
      <!-- Courses -->
      <ul class="list pl0">
        {#each routesCourses as courses}
        <li class="{courses.header}">
            <a
              class="lh-nav no-underline link o-80 glow inherit transition"
              class:active={$page.path === `${courses.href}`}
              sveltekit:prefetch href="{courses.href}"
            >{courses.title}</a>
          </li>
        {/each}
      </ul>
      <!-- Courses -->

    </div><!-- /Column3 -->

  </nav><!-- /Three columns -->

  <Subscribe />
  <Social />
</Section>

<div class="bg-secondary-back-o-30">
  <Section>
    <nav class="cf pv4 f5 f6-l no-clutter">
      <div class="fn fl-l w-third-l pr2-l">Charity Reg. Number: <a class="b link underline o-80 glow inherit" href="https://register-of-charities.charitycommission.gov.uk/charity-details/?subid=0&regid=1156987">1156987</a></div><!-- /Column1 -->
      <div class="fn fl-l w-third-l pr1-l pl1-l">&nbsp;</div><!-- /Column2 -->
      <div class="fn fl-l w-third-l pl2-l tr">Website <a class="b link underline o-80 glow inherit" href="https://inspiredlabs.co.uk/">Scott&nbsp;Phillips</a> 2022<!-- &copy; --></div><!-- /Column3 -->
      <!-- https://app.netlify.com/sites/happy-shaw-91e31c/deploys -->
    </nav><!-- /Three columns -->
  </Section>
</div>
</footer>

<style>
  .bg-secondary-back-o-30 {
    --secondary-back:hsl(259,63%,17%, var(--three));
  }
  a{ will-change: opacity }
	a.active{
		opacity: 1;
		text-decoration: underline;
	}
  .lh-nav {
    line-height: 2rem;
  }
</style>