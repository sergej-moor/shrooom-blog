import { marked } from "marked";
import type { Article } from "../../app";

async function convertArticlesResponse(res){
    const allArticles: Array<Article> = await Promise.all(
		res.data.map(async (a) => {
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
    return allArticles;
}

export {convertArticlesResponse}