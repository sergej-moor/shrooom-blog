import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const res = await fetch('http://127.0.0.1:1337/api/contact-page');

	return res;
}
