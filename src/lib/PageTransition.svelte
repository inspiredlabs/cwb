<script>
	/*
	--Note: `style="will-change:opacity"`, post this fix here: https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6
	Originally from: el3um4s.medium.com/sveltekit-github-pages-4fe2844773de
	*/
  import { fade } from "svelte/transition"
  export let refresh = ""
</script>

{#key refresh}
	<div
		style="will-change:opacity"
		in:fade={{  duration: 88, delay: 180 }}
    out:fade={{ duration: 180 }}>
    <slot />
  </div>
{/key}