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

<main class="min-h-screen flex flex-col items-center">
	<div class="  md:max-w-md lg:max-w-lg xl:max-w-xl">
		<article>
			<section id="header">
				<h1 class="font-bold text-3xl">{article.headline}</h1>
				<h3 class="font-semibold text-2xl">{article.subheadline}</h3>
				<div class="flex justify-between mt-4">
					<div class="font-bold text-sm">
						written by {article.author}
					</div>
					<div class="text-sm font-bold">{estimatedReadingTime()} min read</div>
				</div>
				<div id="divider" class="border-b-2 border-black" />
				<div class=" text-sm mb-4 text-right">
					{new Date(article.publishedAt).toDateString()}
				</div>
				<div class="border-2 border-black mb-4">
					<img
						src={`http://127.0.0.1:1337${article.featuredImage}`}
						alt=""
						class=" h-60 sm:h-[calc(100vh-22rem)] w-full object-cover"
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
		<section id="bottom" class=" w-full my-8">
			<ul class="my-2 flex gap-2">
				{#each article.categories as category}
					<!-- content here -->
					<li class="border-black border-2 rounded-full py-1 px-2">
						{category}
					</li>
				{/each}
			</ul>
		</section>
	</div>
</main>

<section id="recommendations" class="my-8">
	<h1 class="font-bold text-2xl my-2">Recommendations</h1>
	<div class="flex flex-col flex-wrap md:grid md:grid-cols-3 gap-y-8 gap-x-4">
		{#each recommendedArticles as article}
			<BlogpostCard {article} />
		{/each}
	</div>
</section>
