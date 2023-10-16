<script>
	import BlogpostCard from '../components/BlogpostCard.svelte';

	const items = [1, 2, 3, 4];

	const title = 'Unveiling the Enigmatic World of Mycology: Exploring the Fungi Kingdom';
</script>

<div>
	<section id="hero" class=" h-[calc(100vh-100px)] flex flex-col">
		<div class="hidden md:block mt-8">
			<h1 class="font-bold text-4xl">
				{title}
			</h1>
			<div id="divider" class="border-b-2 border-black my-4" />
		</div>

		<div class="border-2 border-black relative h-[calc(100vh-100px)] md:h-fit overflow-hidden">
			<img src="/images/placeholder.jpg" alt="" class="h-full w-full object-cover" />

			<div
				id="info"
				class="border-2 border-white absolute w-[calc(100%-1rem)] bottom-0 p-2 m-2 text-white bg-black/60 backdrop-blur-sm flex flex-col gap-y-2 md:p-6"
			>
				<div class="  mb-4">
					<span class=" md:hidden text-3xl font-bold">{title}</span>
					<span class="hidden md:block text-lg"
						>Mycology, the study of fungi, is a mysterious field often overshadowed by more
						charismatic branches like botany or zoology, yet fungi play crucial roles in ecosystems
						and human life, hidden in forests, logs, and our bodies.</span
					>
				</div>

				<!-- author and publishdate -->
				<div class="flex flex-wrap justify-between gap-y-2 md:gap-x-16">
					<div class="w-full md:w-auto flex flex-wrap justify-between md:gap-x-16">
						<div id="writtenby">
							<div class="flex flex-col gap-y-1">
								<div class="text-sm hidden md:block">Written by</div>
								<div class="flex items-center gap-x-2">
									<img
										src="/images/personplaceholder.jpg"
										class="rounded-full h-8 w-8 object-cover hidden md:block"
										alt=""
									/>
									<div class="font-bold text-sm">by Amelie Laurent</div>
								</div>
							</div>
						</div>

						<div id="publishdate" class="">
							<div class="flex flex-col gap-y-1">
								<div class="text-sm hidden md:block">Published on</div>
								<div class="flex items-center gap-x-2">
									<div class="font-bold text-sm">14 March 2024</div>
								</div>
							</div>
						</div>
					</div>
					<div id="categories" class="flex flex-col gap-y-1 w-full md:w-auto">
						<div class="text-sm hidden md:block">Tags</div>
						<div class="flex gap-2 flex-wrap">
							<div class="border-2 rounded-full w-fit py-1 px-2 text-sm font-semibold">Design</div>
							<div class="border-2 rounded-full w-fit py-1 px-2 text-sm font-semibold">
								Photography
							</div>
							<div class="border-2 rounded-full w-fit py-1 px-2 text-sm font-semibold">UI & UX</div>
						</div>
					</div>
				</div>

				<!-- categories/tags -->

				<div />
			</div>
		</div>
	</section>

	<section id="latestarticles" class="my-8">
		<h1 class="font-bold text-2xl my-2">Latest Articles</h1>
		<div class="flex flex-col flex-wrap md:grid md:grid-cols-3 gap-y-8 gap-x-4">
			{#each { length: 8 } as _, i}
				<!-- content here -->
				<BlogpostCard />
			{/each}
		</div>
	</section>
</div>
