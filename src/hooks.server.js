import { randomUUID } from 'node:crypto';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let userid = event.cookies.get('userid');
	if (!userid) {
		userid = randomUUID();
		event.cookies.set('userid', userid, { path: '/', httpOnly: true, sameSite: 'lax' });
	}
	event.locals.userid = userid;
	return resolve(event);
}
