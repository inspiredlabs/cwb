<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
  export const prerender = true;
</script>

<script>
import Section from '$lib/Section.svelte';
import Sting from '$lib/header/Sting.svelte';
let email = "";
let form;
let name = 'Funding Partnership Request';
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

<div class="cf pv4 f5 mb4 bg-secondary-back" id="funding-partner">

  <h2 class="f1 f2-ns f1-m f-headline-l lh-solid fw7 white tc">Become a <span class="accent">Funding&nbsp;Partner</span></h2>

  <Section>
    <h3 class="f3 georgia i lh-copy pb4">Contact us via email, or <a href="mailto:sam@clownswithoutborders.org.uk" class="underline link dim accent">Get in touch</a> directly about developing a Funding&nbsp;Partnership.</h3>
    <!-- tel:+447939522518 -->
    <form
      on:submit|preventDefault={handleSubmit}
      bind:this={form}
      name={name}
      netlify
      netlify-honeypot="gotcha"
      class="{ submitted ? 'ping' : '' }">
      <div class="f5 f6-l no-clutter ">
        <div class="w-100 b white-80"><!-- pl2-l tr -->
          <label for="email" class="{ submitted ? 'o-0' : '' } transition">{name}</label>
        </div>
      </div>

      <div class="pv4 f5 f6-l no-clutter ">
        <div class="w-100 flex justify-between "><!-- pl2-l tr -->
          {#if !submitted}
          <!-- - from: https://docs.netlify.com/forms/setup/#html-forms -->
          <input type="hidden" name="form-name" value={name} />
          <input type="text" name="gotcha" class="visually-hidden" />
          <!-- `name="subject"` only appreas on: app.netlify.com/sites/instantwebapp/settings/forms#form-notifications -->
          <input name="subject" type="hidden" value="{name} wants to be part of the Newsfeed" />
          <input
            style="border-right:none"
            id="email"
            type="email"
            name="email"
            bind:value={email}
            placeholder="your@email.com"
            required
            class="transition input-reset br0 ba bw2 w-two-thirds w-80-l bg-white-80 b--accent f6 f5-ns pv3 db active pa3">

          <input
            class="{ isSubmitting ? "no-select" : "pointer" } transition input-reset pointer br0 f6 f5-ns pv3 ba bw2 b--accent primary-back ttu tracked-mega bg-accent hover-bg-white w-third w-20-l db b system tc"
            type="submit"
            value="Send">
          {:else}
          <div class="fn fl-l w-20 pr2-l">
            <div class="w3 h3">
              <Sting />
            </div>
          </div><!-- /Column1 -->
          <div class="fn fl-l w-80-l pl2-l flex justify-between h3 pt3">
            <pre class="b red bg-primary-fore br2 pa3 lh-none">Thank you for joining our Newsfeed!</pre>
          </div><!-- /Column2&3 -->
          {/if}
        </div>
      </div><!-- /Three columns -->
    </form><!-- /contents -->
  </Section>
</div>

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
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>