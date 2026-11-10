<script>
	import Sting from '$lib/header/Sting.svelte';
	import { FORMSPREE_ENDPOINT, submitFormspree } from '$lib/formspree.js';

	let form;
	let name = 'Join Our Newsfeed';
	let submitted = false;
	let isSubmitting = false;
	let errorMessage = '';

	async function handleSubmit() {
		if (isSubmitting) return;
		isSubmitting = true;
		errorMessage = '';
		try {
			await submitFormspree(form);
			form.reset();
			submitted = true;
		} catch (error) {
			errorMessage = error.message || 'Your subscription could not be sent. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form
on:submit|preventDefault={handleSubmit}
bind:this={form}
name={name}
action={FORMSPREE_ENDPOINT}
method="POST">


  <div class="cf f5 f6-l no-clutter" id="subscribe">
    <div class="fn fl-l w-third-l pr2-l">&nbsp;</div><!-- /Column1 -->
    <div class="fn fl-l w-two-thirds-l pl2-l b white-80"><!-- pl2-l tr -->
      <label for="newsfeed" class="{ submitted ? 'o-0' : '' } transition">{name}</label>
    </div>
  </div>

  <div class="cf pv4 f5 f6-l no-clutter ">
    <div class="fn fl-l w-third-l pr2-l">&nbsp;</div><!-- /Column1 -->
    <div class="fn fl-l w-two-thirds-l pl2-l flex justify-between "><!-- pl2-l tr -->
      {#if !submitted}
      <input type="hidden" name="subject" value="Newsfeed subscription — Clowns Without Borders" />
      <input type="text" name="_gotcha" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />
      <input
        id="newsfeed"
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        class="bg-transition input-reset br0 ba bw2 w-50 w-60-ns w-60-m w-60-l bg-white-80 b--secondary-fore f6 f5-ns pv3 db active pa3"
        style="border-right:none"
        >

      <input
        class="{ isSubmitting ? "no-select" : "pointer" } bg-transition input-reset pointer br0 f6 f5-ns pv3 ba bw2 b--secondary-fore white ttu tracked-mega bg-black-30 hover-bg-secondary-fore w-50 w-40-ns w-40-m w-40-l db b system tc"
        type="submit"
        value={isSubmitting ? 'Sending…' : 'Subscribe'}
        disabled={isSubmitting}>
      {:else}
      <div class="fn fl-l w-20 pr2-l">
        <div class="w3 h3">
          <Sting />
        </div>
      </div><!-- /Column1 -->
      <div class="fn fl-l w-80-l pl2-l flex justify-between h3 pt3">
        <pre class="b red bg-primary-fore br2 pa3 lh-none">Thank you for joining!</pre><!-- Thank you for joining {name} -->
      </div><!-- /Column2&3 -->
      {/if}

    </div>
  </div><!-- /Three columns -->

  {#if errorMessage}<p role="alert" class="red">{errorMessage}</p>{/if}
</form>

<style>
.lh-none {
  line-height: 0;
}
.honeypot { display: none; }
.active:focus {
  background-color: white;
  /* border-color: var(--egyptian); */
}

/* NOT Inclusively Hidden: css-tricks.com/inclusively-hidden/ */
/* .visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
} */
</style>
