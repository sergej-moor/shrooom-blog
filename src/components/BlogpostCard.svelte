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

<div class="text-sm flex flex-col gap-y-2">
	<a href={'/articles/' + article.slug} class=" flex flex-col gap-y-2">
		<img
			src={`http://127.0.0.1:1337${article.featuredImage}`}
			class="border-2 border-black h-64 w-full object-cover mb-4"
			alt=""
		/>

		<h2 class="font-bold text-2xl flex">
			<span>{article.headline}</span>
			<IcRoundArrowOutward class="h-8 w-8" />
		</h2>
		<p>{@html article.introduction}</p>
	</a>

	<ul class="my-2 flex gap-2 flex-wrap">
		{#each article.categories as category}
			<!-- content here -->
			<li class="border-black border-2 rounded-full py-1 px-2 w-fit">
				{category}
			</li>
		{/each}
	</ul>
</div>
