import { json } from '@sveltejs/kit';
import { STRAPI_URL } from '$env/static/private';
/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	//
	//console.log(url)
	const slug = event.url.searchParams.get("slug")
	
	//console.log(slug);
	const res = await fetch(
		`${STRAPI_URL}/articles?populate=*&filters[slug][$eq]=${slug}`
	);

	return res;
} 
