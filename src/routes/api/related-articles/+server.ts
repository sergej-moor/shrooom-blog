/* /articles?populate=*&filters[categories][Name][$eq]=Trivia&filters[categories][Name][$eq]=Biology */

import { json } from '@sveltejs/kit';
import { STRAPI_URL } from '$env/static/private';
/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	//
	//console.log(url)
	console.log(event.url.searchParams.getAll('category'));
	const categoryFilter = event.url.searchParams.getAll('category').reduce((prevVal, curVal) => {
		return prevVal + '&filters[categories][Name][$eq]=' + curVal;
	}, '');
	console.log('hey');
	console.log(categoryFilter);

	//console.log(slug);
	const res = await fetch(`${STRAPI_URL}/articles?populate=*${categoryFilter}`);

	return res;
}
