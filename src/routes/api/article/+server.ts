import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
	//
	//console.log(url)
	const slug = url.searchParams.get("slug")
	//console.log(slug);
	const res = await fetch(
		'http://127.0.0.1:1337/api/articles?populate=*&filters[slug][$eq]=' + slug
	);

	return res;
} 
