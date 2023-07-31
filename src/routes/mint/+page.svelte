<script lang="ts">
	import { base } from '$app/paths';

	

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
<section id="mint">
    <div class="container flex flex-row justify-center max-w-4xl">        
	    <p class="text-3xl text-align: center md:text-3xl font-bold">PUBLIC TINY ANTS MINT!</p>    
    </div>
    <div class="container flex flex-row justify-center  max-w-6xl">        
	    <p class="text-1xl text-align: center md:text-1xl ">Please make sure you are connected to the right Network [Polygon Mainnet] and the correct address </p>    
    </div>
   
    <div class="container flex flex-row justify-center py-10 max-w-4xl">
        
        <iframe title="mint"
        src="https://bafybeialple2tsk7p3nhmqidhl5i5kpebuva6fubfoag6t3zgyblim7zum.gateway.ipfscdn.io/?contract=0x51F7F4BeF17aa541F57Bf36e3a719d0a3AD3e761&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2Fa8a7f8aa7ddd8115bad1892b179be99f%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&primaryColor=purple"
        width="600px"
        height="600px"
        style="max-width:100%;"
        frameborder="0"
        ></iframe>
    </div>
</section>

