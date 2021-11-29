<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
  export const prerender = true;
</script>

<script>
import Sting from '$lib/header/Sting.svelte';
let email = "";
let form;
let name = 'Join Our Newsfeed';
let submitted = false;
let isSubmitting = false;

const handleInput = (event) => {
  email = event.target.value;
};

const handleSubmit = (event) => {

  let formData = new FormData(form);

  isSubmitting = true;

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // note: do something:
      console.log("Form submitted!");
      submitted = true;
      isSubmitting = false;

    })
    .finally(() => {
      // note: do something:
      console.log("It works!");
      // xxx
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      isSubmitting = false;
    });
  };
</script>

<form
on:submit|preventDefault={handleSubmit}
bind:this={form}
name={name}
netlify
netlify-honeypot="gotcha"
class="{ submitted ? 'ping' : '' }">


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
      <!-- - from: https://docs.netlify.com/forms/setup/#html-forms -->
      <input type="hidden" name="form-name" value={name} />
      <label for="gotcha" class="sr-only">Gotcha!</label>
      <input type="text" id="gotcha" name="gotcha" class="sr-only" />
      <!-- `name="subject"` only appreas on: app.netlify.com/sites/instantwebapp/settings/forms#form-notifications -->

      <label for="subcribe-subject" class="sr-only">Subject</label>
      <input id="subcribe-subject" name="subject" type="hidden" value="{email} wants to {name}" />
      <input
        id="newsfeed"
        type="email"
        name="newsfeed"
        bind:value={email}
        placeholder="your@email.com"
        required
        class="transition input-reset br0 ba bw2 w-50 w-60-ns w-60-m w-60-l bg-white-80 b--secondary-fore f6 f5-ns pv3 db active pa3"
        style="border-right:none"
        >

      <input
        class="{ isSubmitting ? "no-select" : "pointer" } transition input-reset pointer br0 f6 f5-ns pv3 ba bw2 b--secondary-fore white ttu tracked-mega bg-black-30 hover-bg-near-black w-50 w-40-ns w-40-m w-40-l db b system tc"
        type="submit"
        value="Subscribe">
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


</form>

<style>
.lh-none {
  line-height: 0;
}
.active:focus {
  background-color: white;
  /* border-color: var(--egyptian); */
}

.ping {
  transform: scale(1.1);
  transition:
    transform 3s ease-out,
    opacity 3s 33s ease-out; /* , opacity 3s ease-out */
  transform-origin: top center;
  opacity: 0;
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