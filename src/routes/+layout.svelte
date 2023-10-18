<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="bg-gray-200">
	<div class="mx-4 relative">
		<div class="translate-y-16 pb-24">
			<slot><!-- optional fallback --></slot>
		</div>
	</div>
</div>

<Footer />
