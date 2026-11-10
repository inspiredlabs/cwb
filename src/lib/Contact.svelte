<script>
	import { FORMSPREE_ENDPOINT, submitFormspree } from '$lib/formspree.js';

	let form;
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
			errorMessage = error.message || 'Your message could not be sent. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

{#if submitted}
	<p class="f5 f4-ns highlight system pv6" role="status">Thank you for your message.</p>
{:else}
<form
	bind:this={form}
	on:submit|preventDefault={handleSubmit}
	action={FORMSPREE_ENDPOINT}
	method="POST"
	class="f5 f4-ns highlight system cf no-clutter pv6"
	name="Contact">
	<input name="subject" type="hidden" value="Contact enquiry — Clowns Without Borders" />
	<input name="_gotcha" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />
	<div class="mb4">
		<label for="contact-email" class="f6 f5-ns ttu tracked-mega pl3">Address</label>
		<input id="contact-email" type="email" name="email" class="input-reset br0 bn mt3 pa3 w-100 bg-white-80" placeholder="your@email.com" required>

	</div>

	<div class="mb4">
		<label for="contact-message" class="f6 f5-ns ttu tracked-mega pl3">Message</label>
		<textarea id="contact-message" class="mw-100 input-reset br0 bn mt3 pa3 w-100 bg-white-80" name="message" rows="4" placeholder="Your message&hellip;" style="min-width:100%;" required></textarea>
	</div>
	{#if errorMessage}<p role="alert" class="red">{errorMessage}</p>{/if}
	<div class="fr cb cf mb3 mb6-ns mb3-m mb3-l bg-black ma0">
		<input class="bg-transition input-reset pointer br0 f6 f5-ns b ph5 pv3 ba bw2 b--black white ttu tracked-mega bg-primary-back hover-bg-near-black w-100 db b system"
		type="submit" value={isSubmitting ? 'Sending…' : 'Send'} disabled={isSubmitting}>
	</div>
</form>
{/if}

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
