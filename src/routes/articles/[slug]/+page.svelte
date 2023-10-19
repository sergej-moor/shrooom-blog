<script lang="ts">
	import BlogpostCard from '../../../components/BlogpostCard.svelte';

	export let data;

	let article = data.article;

	let recommendedArticles = [
		data.article,
		data.article,
		data.article,
		data.article,
		data.article,
		data.article,
		data.article
	];

	const estimatedReadingTime = () => {
		return Math.round((article.introduction + ' ' + article.body).split(' ').length / 150) + 1;
	};
</script>

<main class="flex min-h-screen flex-col items-center">
	<div class="  md:max-w-md lg:max-w-lg xl:max-w-xl">
		<article>
			<section id="header">
				<h1 class="text-3xl font-bold">{article.headline}</h1>
				<h3 class="text-2xl font-semibold">{article.subheadline}</h3>
				<div class="mt-4 flex justify-between">
					<div class="text-sm font-bold">
						written by {article.author}
					</div>
					<div class="text-sm font-bold">{estimatedReadingTime()} min read</div>
				</div>
				<div id="divider" class="border-b-2 border-black" />
				<div class=" mb-4 text-right text-sm">
					{new Date(article.publishedAt).toDateString()}
				</div>
				<div class="mb-4 border-2 border-black">
					<img
						src={article.featuredImage}
						alt=""
						class=" h-60 w-full object-cover sm:h-[calc(100vh-22rem)]"
					/>
				</div>
			</section>

			<section class="">
				<div class="text-sm leading-normal">
					<p id="introduction" class="">
						{@html article.introduction}
					</p>
					{@html article.body}
				</div>
			</section>
		</article>
		<section id="bottom" class=" my-8 w-full">
			<ul class="my-2 flex gap-2">
				{#each article.categories as category}
					<!-- content here -->
					<li class="rounded-full border-2 border-black px-2 py-1">
						{category}
					</li>
				{/each}
			</ul>
		</section>
	</div>
</main>

<section id="recommendations" class="my-8">
	<h1 class="my-2 text-2xl font-bold">Recommendations</h1>
	<div class="flex flex-col flex-wrap gap-x-4 gap-y-8 md:grid md:grid-cols-3">
		{#each recommendedArticles as article}
			<BlogpostCard {article} />
		{/each}
	</div>
</section>
