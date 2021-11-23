<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;

</script>

<form
	accept-charset=utf-8
	method=POST enctype="application/x-www-form-urlencoded"
	class="f5 f4-ns highlight system cf no-clutter pv6"
	name="Contact"
	netlify-honeypot="gotcha"
	netlify>
<!-- action="/done.html" // form data-netlify="true" -->
<!-- For each detected tag, it sets up a dedicated "form" which is pretty much an append-only schemaless document store of all submissions.
		- from: swyx.io/sveltekit-netlify-forms/
-->
	<input type="hidden" name="form-name" value="Contact" />
	<!-- - from: https://docs.netlify.com/forms/setup/#html-forms -->

	<input name="subject" type="hidden" value="InstantWebapp inquiry" />
	<input name="gotcha" class="visually-hidden" />
	<div class="mb4">
		<label for="email" class="f6 f5-ns ttu tracked-mega pl3">Address</label>
		<!-- simple client-side html form validation using email pattern: stackoverflow.com/questions/19605773/html5-email-validation/57993606#57993606
		unable to pass: `pattern={pattern}`
		-->
		<input type="email" name="email" class=" input-reset br0 bn mt3 pa3 w-100 bg-white-80" placeholder="your@email.com" required>

	</div>

	<div class="mb4">
		<label for="message" class="f6 f5-ns ttu tracked-mega pl3">Message</label>
		<textarea class="mw-100 input-reset br0 bn mt3 pa3 w-100 bg-white-80" name="message" rows="4" placeholder="Your message&hellip;" style="min-width:100%;" required></textarea>
		<!-- f5 f5-ns input-reset -->
	</div>
	<div class="fr cb cf mb3 mb6-ns mb3-m mb3-l bg-black ma0">
		<input class="transition input-reset pointer br0 f6 f5-ns b ph5 pv3 ba bw2 b--black white ttu tracked-mega bg-primary-back hover-bg-near-black w-100 db b system"
		type=submit value=Send>
		<!-- bw2-ns bg-mid-gray hover-bg-white accent  -->
	</div>
</form>

<style>
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