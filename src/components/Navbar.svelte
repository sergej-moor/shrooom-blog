<script lang="ts">
	import { goto } from '$app/navigation';
	import 'iconify-icon';

	let navbarActive = false;

	let navbarLinks = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'About',
			url: '/about'
		},
		{
			name: 'Contact',
			url: '/contact'
		}
	];

	function navigate(url: string) {
		goto(url);
		navbarActive = false;
	}
</script>

<nav
	class="fixed z-50 h-12 w-full border-b-2 border-black bg-white backdrop-blur-lg backdrop-opacity-100"
>
	<!-- 	<div class="w-full h-full mix-blend-difference absolute" /> -->
	<ul class="flex h-full w-full items-center justify-between px-4">
		<li>
			<a
				href="/"
				class="font-heading font-bold duration-1000 hover:font-extrabold hover:transition-all"
				>Shrooom</a
			>
		</li>
		<li class="sm:hidden">
			<button class="flex items-center text-2xl" on:click={() => (navbarActive = !navbarActive)}>
				{#if !navbarActive}
					<iconify-icon icon="ic:baseline-menu" />
				{:else}
					<iconify-icon icon="mdi:close" />
				{/if}
			</button>
		</li>
		<span class="hidden gap-x-8 sm:flex">
			{#each navbarLinks as link}
				<li class="transition-all hover:font-semibold hover:underline">
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</span>
	</ul>
</nav>
<!-- menu -->
{#if navbarActive}
	<!-- content here -->
	<div class="fixed z-50 h-full w-full bg-white">
		<div class="h-12 border-b-2 border-black">
			<ul class="flex h-full w-full items-center justify-between px-4">
				<li><a href="/" class="font-heading font-bold">Shrooom</a></li>
				<li>
					<button
						class="flex items-center text-2xl"
						on:click={() => (navbarActive = !navbarActive)}
					>
						{#if !navbarActive}
							<iconify-icon icon="ic:baseline-menu" />
						{:else}
							<iconify-icon icon="mdi:close" />
						{/if}
					</button>
				</li>
			</ul>
		</div>
		<ul>
			{#each navbarLinks as link}
				<li class="border-b-2 border-black">
					<button
						on:click={() => navigate(link.url)}
						class="flex w-full p-4 text-3xl font-semibold transition-all hover:font-bold hover:underline"
						>{link.name}</button
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}
