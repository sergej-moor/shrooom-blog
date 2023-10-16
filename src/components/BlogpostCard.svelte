<script>
	import IcRoundArrowOutward from './IcRoundArrowOutward.svelte';
	import PhArrowDownRightBold from './PhArrowDownRightBold.svelte';
</script>

<div class="text-sm flex flex-col gap-y-2 ">
	<a href="#" class=" flex flex-col gap-y-2">
		<img
			src="/images/placeholder.jpg"
			class="border-2 border-black h-64 w-full object-cover mb-4"
			alt=""
		/>

		<h2 class="font-bold text-2xl flex">
			<span>Some Conversations with Makr & Co</span>
			<IcRoundArrowOutward class="h-8 w-8" />
		</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eaque praesentium
			necessitatibus quod hic quibusdam officiis, porro maxime quos voluptate quo quaerat
			molestias...
		</p>
	</a>
	<div class="my-2 flex flex-wrap gap-2">
		<div class="border-black border-2 rounded-full py-1 px-2 w-fit">Design</div>
		<div class="border-black border-2 rounded-full py-1 px-2 w-fit">Design</div>
	</div>
</div>
