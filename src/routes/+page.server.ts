import { marked } from 'marked';
import type { Article } from '../app';

export async function load({ fetch, params }) {
	// `fetch` understands the relative path and saves the response
	// inside the HTML to be reused avoiding additional requests
	const response = await fetch('/api/articles');

	// SvelteKit is going to generate the types
	const articles = await response.json();

	const allArticles: Array<Article> = await Promise.all(
		articles.data.map(async (a) => {
			//console.log(a.attributes.Title);
			const b = (await marked.parse(a.attributes.body));
			const i = (await marked.parse(a.attributes.Introduction));
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

	// this becomes available on the page as `data.posts`
	return { allArticles };
}
