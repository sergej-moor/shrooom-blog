
import { STRAPI_URL } from '$env/static/private';
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const res = await fetch(`${STRAPI_URL}/articles?populate=*`);

	return res;
}
