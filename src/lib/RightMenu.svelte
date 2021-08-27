<script>
  import { page } from '$app/stores';
  import Sting from '$lib/header/Sting.svelte';
  //import HomeLink from '$lib/header/HomeLink.svelte';
  import {routesAbout, routesSupport, routesCourses, routesRegulation} from '$lib/routes.js';

	let user = { showMenu: false };

	function toggle() {
		user.showMenu = !user.showMenu;
	}
</script>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="dn">
  <!-- Deprecated (but backwards compatible): developer.mozilla.org/en-US/docs/Web/SVG/Element/use -->
  <defs>
    <g id="icon-checklist" fill="currentcolor">
      <!-- custom checklist -->
      <path d="M32 11.5h-9.8c-2.5 0-4.4-2-4.4-4.4 0-2.5 2-4.4 4.4-4.4h9.8v8.8zM32 29.4h-9.8c-2.5 0-4.4-2-4.4-4.4 0-2.5 2-4.4 4.4-4.4h9.8v8.8zM7.1 0c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1zm3.9 5.6l-5.2 5.3-2.6-2.8c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.3 3.7-3.8c.4-.4 1-.4 1.4 0 .4.4.4 1 .1 1.4zM7.1 17.8c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1zm3.9 5.7l-5.2 5.3-2.6-2.8c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.2 3.7-3.8c.4-.4 1-.4 1.4 0 .4.4.4 1.1.1 1.5z"></path>
    </g>
    <g id="icon-menu" fill="none" stroke="currentcolor" stroke-width="6">
      <!-- custom burger -->
      <path d="M0 5h32M0 16h32M0 27h32"></path>
    </g>

    <g id="icon-menu-user" fill="currentcolor">
      <!-- custom burger user profile -->
      <path d="M32 2h-32v6h32zM19.4 13h-19.4v6h18.9v-3.3c0-1 .2-1.9.5-2.7zM21.2 24.8c-.3-.3-.5-.5-.7-.8h-20.5v6h12.4c1.7-2.4 5.4-4.3 8.8-5.2z"></path>
      <path d="M21.1 15.7c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4v3.6c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4v-3.6zm-7.2 16.3c.9-2.7 7.3-5.4 10.9-5.4h3.6c1 0 3.6.6 3.6.6v4.8h-18.1z"></path>
    </g>

    <g id="icon-home-outline" fill="none" stroke="currentcolor" stroke-width="1.4">
      <!-- icon.now.sh/home -->
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z "></path>
    </g>

    <g id="icon-user" fill="currentcolor">
      <!-- icon.now.sh/user -->
      <path d="M10 8 A6 6 0 0 1 22 8 L22 12 A6 6 0 0 1 10 12 z M2 26 C3 23 10 20 14 20 L18 20 C22 20 29 23 30 26 L30 28 L2 28 z"></path>
    </g>

    <g id="icon-search" fill="currentcolor">
      <!-- icon.now.sh/search -->
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z "></path>
    </g>

    <g id="icon-info-outline" fill="currentcolor">
      <!-- icon.now.sh/info_outline -->
      <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z "></path>
    </g>

    <g id="icon-mail-outline" fill="currentcolor">
      <!-- icon.now.sh/mail_outline -->
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z "></path>
    </g>

  </defs>
</svg>

<!--
Escape key: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility
-->
<button
  on:keydown={e => e.key === 'Escape' && toggle()}
  class="
    input-reset
    z-3 fixed pointer mb5
    bottom-0 right-0 fr
    ba bw2 b--black
    bg-mid-gray;
    hover-bg-white dark-red
    mr0 ml0 pa2 pt1 pb1 tc
    transition"
  on:click={toggle}>
  <!-- bg-light-gray -->
  <svg viewBox="0 0 32 32" class="db h2 w2 mt1 mb1 mr-auto ml-auto no-select" alt="menu">
    <use xlink:href="#icon-menu"></use>
  </svg>
  <!-- <img
    class="db h2 w2 mt1 mb1 mr-auto ml-auto no-select"
    src={logo} alt="menu"
  /> -->
	<span class="dib dib-ns dn-m dib-l f8 tracked ttu mb2 b ">Menu</span><!-- bb  -->
</button>

<!-- debug: `head meta` w3schools.com/csSref/pr_class_cursor.asp  -->
<div
style="cursor: context-menu"
class="dn-ns dn-m dn-l
fixed bg-black-30
left-0 right-0 btm-0
vh-100 vw-100 h-100 w-100
transition"
  on:click={toggle}
  class:open={!user.showMenu}
  on:keydown={e => e.key === 'Escape' && toggle()}
></div>
<nav
  class:toggle={user.showMenu}
  class="
  transition backface-hidden
  w-two-thirds w-third-ns w-25-m w-25-l
  h-100 vh-100 top-0 right-0 fixed z-2
  bl b--black bg-dark-gray
  touch-scrolling
  white antialias
  pa3 pb6 f5 f6-ns f6-m f4-l"
>
<div class="f6 f7-ns f8-m f5-l">
  <div class="w-third mw3">
    <Sting/>
  </div>
</div>
<!---- ABOUT  ---->
<ul class="list pl0">
  {#each routesAbout as about}
    <!-- Note the reactive string literal doesn't need escaping //javascript.info/regexp-escaping -->
    <li class={about.header}>
      <a
        class="lh-nav no-underline link o-80 glow inherit transition"
        class:active={$page.path === `${about.href}`}
        sveltekit:prefetch href="{about.href}"
      >{about.title}</a>
    </li>
  {/each}
</ul>
<!---- ABOUT ---->

<!---- Support ---->
<ul class="list pl0">
  {#each routesSupport as support}
    <li class={support.header}>
      <a
        class="lh-nav no-underline link o-80 glow inherit transition"
        class:active={$page.path === `${support.href}`}
        sveltekit:prefetch href="{support.href}"
      >{support.title}</a>
    </li>
  {/each}
</ul>
<!---- Support ---->

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

<hr class="o-50 mv4 ba"/><!-- style="border:2px solid white" -->

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

</nav>


<style>
a{ will-change: opacity }
a.active{
  opacity: 1;
  text-decoration: underline;
}
.lh-nav { line-height: 2rem }



nav {
  transform: translateX(100%);
  transition: transform .28s cubic-bezier(.3, 0, .02, 1);
}
.toggle {
  transform: translateX(0);
}
.bg-mid-gray { background-color:#ddd }

.open {
  visibility: hidden;
  opacity: 0;
}

</style>

<!--
{#if user.showMenu}
	<div>
		Menu is open
	</div>
{:else}
	<div>
		Menu is hidden
	</div>
{/if}
-->