export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkapzrj';

export async function submitFormspree(form) {
	const response = await fetch(form.action, {
		method: 'POST',
		body: new FormData(form),
		headers: { Accept: 'application/json' }
	});

	if (response.ok) return;

	const result = await response.json().catch(() => null);
	const errors = Array.isArray(result?.errors) ? result.errors : [];
	const message = errors.map((error) => error.message).filter(Boolean).join(' ');
	throw new Error(message || 'Your message could not be sent. Please try again.');
}
