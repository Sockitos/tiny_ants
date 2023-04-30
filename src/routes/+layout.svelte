<script>
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<a href="#main" class="sr-only">Saltar para o conteúdo principal da página</a>
	<Header />
	<main id="main" class="grow"><slot /></main>
	<Footer />
</div>
