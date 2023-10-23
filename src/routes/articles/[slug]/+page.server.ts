import type { Article } from '../../../app';
import { marked } from 'marked';

export async function load({ fetch, params }) {
	// `fetch` understands the relative path and saves the response
	// inside the HTML to be reused avoiding additional requests

	const slug = params.slug;
	const response = await fetch(`/api/article?slug=${slug}`);

	// SvelteKit is going to generate the types
	const articles = await response.json();

	// this becomes available on the page as `data.posts`

	const allArticles: Array<Article> = await Promise.all(
		articles.data.map(async (a) => {
			//console.log(a.attributes.Title);
			const b = await marked.parse(a.attributes.body);
			const i = await marked.parse(a.attributes.Introduction);
			const article: Article = {
				headline: a.attributes.Title,
				subheadline: a.attributes.Subheading,
				featuredImage: a.attributes.featured_image.data.attributes.url,
				author: a.attributes.author.data.attributes.FullName,
				introduction: i ? i : '',
				body: b ? b : '',
				slug: a.attributes.slug,
				publishedAt: a.attributes.publishedAt,
				categories: a.attributes.categories.data.map((e) => e.attributes.Name)
			};
			return article;
		})
	);
	const article = allArticles[0];

	const searchParams = article.categories.reduce((prevVal, curVal) => {
		return prevVal + 'category=' + curVal + '&';
	}, '?');
	const resRelatedArticles = await fetch(`/api/related-articles${searchParams}`);
	const relatedArticles = await resRelatedArticles.json();

	const moreArticles: Array<Article> = await Promise.all(
		relatedArticles.data.map(async (a) => {
			//console.log(a.attributes.Title);
			const b = await marked.parse(a.attributes.body);
			const i = await marked.parse(a.attributes.Introduction);
			const article: Article = {
				headline: a.attributes.Title,
				subheadline: a.attributes.Subheading,
				featuredImage: a.attributes.featured_image.data.attributes.url,
				author: a.attributes.author.data.attributes.FullName,
				introduction: i ? i : '',
				body: b ? b : '',
				slug: a.attributes.slug,
				publishedAt: a.attributes.publishedAt,
				categories: a.attributes.categories.data.map((e) => e.attributes.Name)
			};
			return article;
		})
	);

	return { article, moreArticles };
}
