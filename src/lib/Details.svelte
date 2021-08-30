<script>
export let open = !open;
</script>

<section class="cf w-100 pv3 f4 f5-l highlight">
	<div class="fl w-80 w-80-ns w-80-m w-two-thirds-l pl2 pl1-ns pl4-m pr4-m pl2-l">
		<div class="pv4 fr w-100 w-100-ns w-100-m measure-custom-l f4 cf">

      <details class="w-100 bg-cobalt" open={open}>
        <summary class="list no-clutter">
          <slot name="summary">

          <header class="lh-title">
            <h1 class="db f3 f2-ns fw9 mb3">Heading</h1>
            <h2 class="db f4 f3-ns mb3">Subheading</h2>
            <h3 class="db f6 f5-ns mt0-ns">Description</h3>
            <p class="f4-ns mt0-ns semibold">Semibold description</p>
          </header>

          </slot>
        </summary>
        <div>
          <slot name="details"></slot>
        </div>
      </details>

    </div>
  </div>
</section>


<!-- USAGE:
<Details>
  <svelte:fragment let:summary></svelte:fragment>
  <svelte:fragment let:details></svelte:fragment>
</Details>
-->