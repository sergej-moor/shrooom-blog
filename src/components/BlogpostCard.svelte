<script lang="ts">
	import type { Article } from '../app';
	import IcRoundArrowOutward from './IcRoundArrowOutward.svelte';
	import PhArrowDownRightBold from './PhArrowDownRightBold.svelte';

	export let article: Article;

	// trim the introduction text if neccessary

	let introLength = 200;
	if (article.introduction.length > introLength) {
		article.introduction = article.introduction.substring(0, introLength) + '...';
	}
</script>

<a href={'/articles/' + article.slug} class="flex flex-col justify-between gap-y-2 text-sm">
	<div>
		<img
			src={article.featuredImage}
			class="mb-4 h-64 w-full border-2 border-black object-cover"
			alt=""
		/>

		<h2 class="flex justify-between text-2xl font-bold">
			<span>{article.headline}</span>
			<iconify-icon icon="mdi:arrow-top-right" class="  text-3xl" />
		</h2>
		<p>{@html article.introduction}</p>
	</div>
	<ul class="my-2 flex flex-wrap gap-2">
		{#each article.categories as category}
			<li class="w-fit rounded-full border-2 border-black px-2 py-1">
				{category}
			</li>
		{/each}
	</ul>
</a>
