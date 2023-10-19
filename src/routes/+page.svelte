<script lang="ts">
	import type { Article } from '../app';
	import { compile } from 'mdsvex';
	import BlogpostCard from '../components/BlogpostCard.svelte';
	export let data;
	const items = [1, 2, 3, 4];
	//console.log(data);

	const coverStory: Article = data.allArticles[0];

	//coverStory.publishedAt = coverStory.publishedAt.toLocaleDateString('en-GB');

	const articles = data.allArticles.slice(1);
</script>

<div>
	<section id="hero">
		<a
			href={`/articles/${coverStory.slug}`}
			class=" flex h-[calc(100vh-100px)] max-w-full flex-col overflow-hidden"
		>
			<div class="mt-8 hidden md:block">
				<h1 class="text-4xl font-bold">
					{coverStory.headline}
				</h1>
				<h2 class="text-2xl font-bold text-gray-500">
					{coverStory.subheadline}
				</h2>
				<div id="divider" class="my-4 border-b-2 border-black" />
			</div>

			<div class="relative h-[calc(100vh-100px)] overflow-hidden border-2 border-black md:h-fit">
				<img
					src={`http://127.0.0.1:1337${coverStory.featuredImage}`}
					alt=""
					class="h-full w-full object-cover"
				/>

				<div
					id="info"
					class="absolute bottom-0 m-2 flex w-[calc(100%-1rem)] flex-col gap-y-2 border-2 border-white bg-black/60 p-2 text-white backdrop-blur-sm md:p-6"
				>
					<div class="  mb-4">
						<h1 class=" text-3xl font-bold md:hidden">{coverStory.headline}</h1>
						<h3 class="font text-2xl md:hidden">{coverStory.subheadline}</h3>
						<span class="hidden text-lg md:block">{@html coverStory.introduction}</span>
					</div>

					<!-- author and publishdate -->
					<div class="flex flex-wrap justify-between gap-y-2 md:gap-x-16">
						<div class="flex w-full flex-wrap justify-between md:w-auto md:gap-x-16">
							<div id="writtenby" class="">
								<div class="flex flex-col gap-y-1">
									<div class="hidden text-sm font-semibold md:block">Written by</div>
									<div class="flex items-center gap-x-2">
										<img
											src="/images/personplaceholder.jpg"
											class="hidden h-8 w-8 rounded-full object-cover md:block"
											alt=""
										/>
										<div class=" text-sm">
											{coverStory.author}
										</div>
									</div>
								</div>
							</div>

							<div id="publishdate" class="">
								<div class="flex flex-col gap-y-1">
									<div class="hidden text-sm font-semibold md:block">Published on</div>
									<div class="flex items-center">
										<div class="h-8" />
										<div class=" text-sm">
											{new Date(coverStory.publishedAt).toDateString()}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="categories" class="flex w-full flex-col gap-y-1 md:w-auto">
							<div class="hidden text-sm font-semibold md:block">Tags</div>
							<ul class="flex flex-wrap gap-2">
								{#each coverStory.categories as category}
									<li class="w-fit rounded-full border-2 px-2 py-1 text-sm">
										{category}
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<div />
				</div>
			</div>
		</a>
	</section>

	<section id="latestarticles" class="my-8">
		<h1 class="my-2 text-2xl font-bold">Latest Articles</h1>
		<div class="flex flex-col flex-wrap gap-x-4 gap-y-8 md:grid md:grid-cols-3">
			{#each articles as article}
				<BlogpostCard {article} />
			{/each}
		</div>
	</section>
</div>
