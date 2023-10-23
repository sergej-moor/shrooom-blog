import { convertArticlesResponse } from '$lib/server/convertArticleResponse';

export async function load({ fetch }) {
	// `fetch` understands the relative path and saves the response
	// inside the HTML to be reused avoiding additional requests
	const response = await fetch('/api/articles');

	// SvelteKit is going to generate the types
	const articles = await response.json();
	console.log(articles);

	const allArticles = await convertArticlesResponse(articles);

	return { allArticles };
}
