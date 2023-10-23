<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="bg-gray-200">
	<div class="relative mx-4">
		<div class="translate-y-16 pb-24">
			<div class="flex justify-center">
				<div class="max-w-screen w-screen md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
					<slot><!-- optional fallback --></slot>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />
