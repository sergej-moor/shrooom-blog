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
	class="border-black border-b-2 fixed z-50 w-full h-12 backdrop-blur-lg backdrop-opacity-100 bg-white"
>
	<!-- 	<div class="w-full h-full mix-blend-difference absolute" /> -->
	<ul class="flex justify-between items-center h-full w-full px-4">
		<li>
			<a
				href="/"
				class="font-heading font-bold hover:font-extrabold hover:transition-all duration-1000"
				>Shrooom</a
			>
		</li>
		<li class="sm:hidden">
			<button class="text-2xl flex items-center" on:click={() => (navbarActive = !navbarActive)}>
				{#if !navbarActive}
					<iconify-icon icon="ic:baseline-menu" />
				{:else}
					<iconify-icon icon="mdi:close" />
				{/if}
			</button>
		</li>
		<span class="sm:flex gap-x-8 hidden">
			{#each navbarLinks as link}
				<li class="hover:underline hover:font-semibold transition-all">
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</span>
	</ul>
</nav>
<!-- menu -->
{#if navbarActive}
	<!-- content here -->
	<div class="fixed bg-white w-full h-full z-50">
		<div class="h-12 border-black border-b-2">
			<ul class="flex justify-between items-center h-full w-full px-4">
				<li><a href="/" class="font-heading font-bold">Shrooom</a></li>
				<li>
					<button
						class="text-2xl flex items-center"
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
				<li class="border-black border-b-2">
					<button
						on:click={() => navigate(link.url)}
						class="text-3xl font-semibold p-4 hover:underline hover:font-bold transition-all w-full flex"
						>{link.name}</button
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}
