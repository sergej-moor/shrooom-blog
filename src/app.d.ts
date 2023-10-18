// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

interface Article {
	headline: string;
	subheadline: string;
	featuredImage: string;
	author: string;
	introduction: string;
	body: string;
	slug: string;
	publishedAt: Date;
	categories: Array<string>;
}

export { Article };
