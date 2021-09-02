<script>
  // https://svelte.dev/tutorial/inline-handlers
	let m = { x: 0, y: 0 };

  // https://svelte.dev/examples#reactive-statements
  $: if (m.y < 42) {
		alert(`Ping!`);
	}

/*
UX considerations for this feature?
- Messaging:
  - "Before you go: we're looking to raise millions in hope and we can't do it without you."
  - "Social and subscibe."
  - "Who do you know that can help?"
- "Don't miss out" & "I'm in.", and Sephora me at the centre, from: appcues.com/blog/mobile-app-modal-windows
- cookie >1 every random N visits
- nag free
- opt-in
- split
Modal:
- right moment
- compelling case for joining

- image on the right
  - branding
  - x
- mobile needs thought:
  - reach users when they’re primed to take action
  - x
*/
</script>

<aside on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
<!-- The mouse position is {m.x} x {m.y} -->

{#if m.y < 42 }
Ping!
{/if}
</aside>

<style>
	aside {
    position: fixed;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(000,111,222, 0.4); */
  }
</style>