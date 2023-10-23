import { convertArticlesResponse } from '$lib/server/convertArticleResponse';

export async function load({ fetch, params }) {


	const slug = params.slug;
	const response = await fetch(`/api/article?slug=${slug}`);
	const articles = await response.json();



	const allArticles = await convertArticlesResponse(articles);
	const article = allArticles[0];

	const searchParams = article.categories.reduce((prevVal, curVal) => {
		return prevVal + 'category=' + curVal + '&';
	}, '?');
	const resRelatedArticles = await fetch(`/api/related-articles${searchParams}`);
	const relatedArticles = await resRelatedArticles.json();

	const moreArticles = await convertArticlesResponse(relatedArticles);

	return { article, moreArticles };
}
