<script lang="ts">
	import { base } from '$app/paths';
	import Accordion from '$lib/components/Accordion.svelte';
	import { slide } from 'svelte/transition';
	import { AntType, whitelist } from '../constants';

	const mintDate = new Date('2023-07-29T18:00:00.000Z').getTime();
	let now = new Date().getTime();
	let distance = mintDate - now;
	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	$: {
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);
	}

	const timer = setInterval(() => {
		now = new Date().getTime();
		distance = mintDate - now;
		if (distance < 0) {
			clearInterval(timer);
		}
	}, 1000);

	
</script>

<svelte:head>
	<title>Tiny Ants</title>
</svelte:head>

<img src="{base}/svgs/header.svg" alt="header" height="844" width="2501" class="w-full" />
<section id="mint" >
	<div
		class="container flex justify-center py-10 max-w-4xl"
	>
		<div
			class="text-center py-10 max-w-4xl"
		>
		<!-- svelte-ignore a11y-missing-attribute -->
		<iframe
		src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0x404c614009cA2080201a8d2Aed338275D517e523&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2Fa8a7f8aa7ddd8115bad1892b179be99f%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&theme=system&primaryColor=pink"
		width="600px"
		height="600px"
		style="max-width:100%;"
		frameborder="0"
		></iframe>
		</div>
		
	</div>
</section>
<section id="countdown">
	<div class="container flex flex-row justify-center py-10 max-w-4xl">
		{#if distance < 0}
			<p class="text-5xl md:text-9xl font-bold">MINT IS LIVE!</p>
		{:else}
			<div class="w-1/4 flex flex-col items-center">
			<p class="text-5xl md:text-9xl font-bold">{days}</p>
			<p class="text-xl md:text-5xl">DAYS</p>
		</div>
		<div class="w-1/4 flex flex-col items-center">
			<p class="text-5xl md:text-9xl font-bold">{hours}</p>
			<p class="text-xl md:text-5xl">HOURS</p>
		</div>
		<div class="w-1/4 flex flex-col items-center">
			<p class="text-5xl md:text-9xl font-bold">{minutes}</p>
			<p class="text-xl md:text-5xl">MINS</p>
		</div>
		<div class="w-1/4 flex flex-col items-center">
			<p class="text-5xl md:text-9xl font-bold">{seconds}</p>
			<p class="text-xl md:text-5xl">SECS</p>
		</div>
		{/if}
		
	</div>
</section>



	

