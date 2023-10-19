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
			class=" h-[calc(100vh-100px)] flex flex-col max-w-full overflow-hidden"
		>
			<div class="hidden md:block mt-8">
				<h1 class="font-bold text-4xl">
					{coverStory.headline}
				</h1>
				<h2 class="font-bold text-2xl text-gray-500">
					{coverStory.subheadline}
				</h2>
				<div id="divider" class="border-b-2 border-black my-4" />
			</div>

			<div class="border-2 border-black relative h-[calc(100vh-100px)] md:h-fit overflow-hidden">
				<img
					src={`http://127.0.0.1:1337${coverStory.featuredImage}`}
					alt=""
					class="h-full w-full object-cover"
				/>

				<div
					id="info"
					class="border-2 border-white absolute w-[calc(100%-1rem)] bottom-0 p-2 m-2 text-white bg-black/60 backdrop-blur-sm flex flex-col gap-y-2 md:p-6"
				>
					<div class="  mb-4">
						<h1 class=" md:hidden text-3xl font-bold">{coverStory.headline}</h1>
						<h3 class="md:hidden font text-2xl">{coverStory.subheadline}</h3>
						<span class="hidden md:block text-lg">{@html coverStory.introduction}</span>
					</div>

					<!-- author and publishdate -->
					<div class="flex flex-wrap justify-between gap-y-2 md:gap-x-16">
						<div class="w-full md:w-auto flex flex-wrap justify-between md:gap-x-16">
							<div id="writtenby" class="">
								<div class="flex flex-col gap-y-1">
									<div class="text-sm hidden md:block font-semibold">Written by</div>
									<div class="flex items-center gap-x-2">
										<img
											src="/images/personplaceholder.jpg"
											class="rounded-full h-8 w-8 object-cover hidden md:block"
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
									<div class="text-sm hidden md:block font-semibold">Published on</div>
									<div class="flex items-center">
										<div class="h-8" />
										<div class=" text-sm">
											{new Date(coverStory.publishedAt).toDateString()}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="categories" class="flex flex-col gap-y-1 w-full md:w-auto">
							<div class="text-sm hidden md:block font-semibold">Tags</div>
							<ul class="flex gap-2 flex-wrap">
								{#each coverStory.categories as category}
									<li class="border-2 rounded-full w-fit py-1 px-2 text-sm">
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
		<h1 class="font-bold text-2xl my-2">Latest Articles</h1>
		<div class="flex flex-col flex-wrap md:grid md:grid-cols-3 gap-y-8 gap-x-4">
			{#each articles as article}
				<BlogpostCard {article} />
			{/each}
		</div>
	</section>
</div>
