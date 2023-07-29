<script lang="ts">
	import { base } from '$app/paths';
	import Accordion from '$lib/components/Accordion.svelte';
	import { slide } from 'svelte/transition';
	import { AntType, whitelist } from './constants';

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

	let address = '';
	let submittedAddress = '';
	let addressIsWhitelisted: AntType | undefined;

	$: if (address != submittedAddress) addressIsWhitelisted = undefined;

	const checkAddress = function (address: string) {
		submittedAddress = address;
		addressIsWhitelisted = whitelist.find((ant) => ant.address == address.toLowerCase())?.type ?? AntType.Renegade;
	};
</script>

<svelte:head>
	<title>Tiny Ants</title>
</svelte:head>

<img src="{base}/svgs/header.svg" alt="header" height="844" width="2501" class="w-full" />
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
<section id="mint">
	<div
		class="container flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:space-x-20 items-center py-36"
	>
		<div class="lg:basis-1/2 flex flex-col items-center space-y-8">
			<span class="text-4xl font-bold text-center">MINTING SOON!</span>
			
			<a href="/mint">
				<div
					class="bg-jordy-blue text-white text-center hover:bg-mauve hover:text-black transition-colors py-5 px-7 text-2xl font-semibold rounded-lg"
				>
					Mint Now
				</div>
			</a>
		</div>
		<div class="lg:basis-1/2">
			<img
				src="{base}/images/loop.gif"
				alt="Tiny Loop"
				height="1500"
				width="1500"
				class="rounded-lg"
			/>
		</div>
	</div>
</section>
<section id="vision" class="bg-jordy-blue">
	<div
		class="container flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:space-x-20 items-center py-36"
	>
		<div class="lg:basis-1/2">
			<img src="{base}/images/animation.gif" alt="OG" height="1500" width="1500" />
		</div>
		<div class="lg:basis-1/2 space-y-10 text-2xl">
			<h2 class="text-5xl font-bold">OUR VISION</h2>
			<p>
				Our team is built with the foundation of trust. We are a group of crypto enthusiasts who met
				in the NFT space and wanted to create something together.
			</p>
			<p>
				Our collection is quality-focused. Every trait is created with the intent to satisfy our
				collectors. We made sure that the variety of our assets hit the sweet spot for the size of
				the collection.
			</p>
			<p>
				We believe in community-oriented projects. Wherever you are in the world Tiny Ants is a home
				you can visit once in while to fuel your passion in life!
			</p>
			<p>
				Our main goal is to spread awareness and love for great art. We believe a piece of art you
				love will never lose its value. If you’re interested to learn more about Tiny Ants, feel
				free to join our community!
			</p>
		</div>
	</div>
</section>
<section id="ants">
	<div class="container py-36 space-y-48">
		<div
			class="flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:space-x-20 lg:items-center mb-10"
		>
			<div class="lg:basis-1/2">
				<img
					src="{base}/svgs/ants/simple_ant.svg"
					alt="aqua_ant"
					height="1500"
					width="1500"
					class="w-full h-auto rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
			</div>
			<div class="lg:basis-1/2 space-y-10 text-2xl">
				<h2 class="text-5xl font-bold">THIS IS A TINY ANT</h2>
				<p>A Tiny Ant comes in many shapes and colors. This is the most common type.</p>
				<p>
					Tiny Ants are all about expressing themselves, so much so that it's permanANTly part of
					their biology. Tiny Ants live in their colony with thousands of other Tiny Ants, but each
					one has it's own elegANT personal traits that make it uniquely different from all of the
					others. This is to show that, even in our Societies/groups we have the power to stand out
					with our creativeness.
				</p>
				<p>
					Our collection consists of 1,111 unique Tiny Ants with over 70+ traits, including a couple
					secret ones.
				</p>
				<p>Every Tiny Ant and trait has been digitally hand-drawn by Pedro Herbet.</p>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10">
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/aqua_ant.svg"
					alt="aqua_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">AQUA ANT</span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/cat_ant.svg"
					alt="cat_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">CAT ANT</span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/robot_ant.svg"
					alt="holy_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">ROBOT ANT</span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/pirate_ant.svg"
					alt="knight_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">PIRATE ANT</span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/mage_ant.svg"
					alt="mage_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">MAGE ANT</span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/knight_ant.svg"
					alt="ninja_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">KNIGHT ANT</span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/space_ant.svg"
					alt="space_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">SPACE ANT</span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<img
					src="{base}/svgs/ants/vampire_ant.svg"
					alt="vampire_ant"
					height="1500"
					width="1500"
					class="rounded-lg transition-transform hover:rotate-3 hover:scale-105"
				/>
				<span class="text-2xl font-semibold">VAMPIRE ANT</span>
			</div>
		</div>
	</div>
</section>
<section id="team" class="bg-mauve">
	<div class="container flex flex-col py-36 space-y-16">
		<h2 class="text-5xl font-bold text-center">TEAM</h2>
		<div class="flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:space-x-20">
			<div
				class="basis-1/3 bg-white/50 min-h-40 flex flex-col p-10 rounded-lg transition-transform lg:-rotate-3 hover:rotate-0 hover:scale-110"
			>
				<img
					src="{base}/images/4200.png"
					alt="Tyler Marquez"
					height="1500"
					width="1500"
					class="mb-8 rounded-md"
				/>
				<h3 class="text-3xl font-semibold mb-2">TYLER MARQUEZ</h3>
				<h4 class="text-2xl font-semibold mb-5">FOUNDER</h4>
				<p>
					My name's Tyler and I'm a project manager who fell in love with the beauty of crypto and
					the NFT world. I'm an art lover who appreciates enthusiasm and talent. I think long term
					in everything I do.
				</p>
			</div>
			<div
				class="basis-1/3 bg-white/50 min-h-40 flex flex-col p-10 transition-transform hover:scale-110"
			>
				<img
					src="{base}/images/1300.png"
					alt="Pedro Herbet"
					height="1500"
					width="1500"
					class="mb-8 rounded-md"
				/>
				<h3 class="text-3xl font-semibold mb-2">PHIL HERBET</h3>
				<h4 class="text-2xl font-semibold mb-5">ARTIST</h4>
				<p>
					Hey I’m Phil Herbet and I'm a digital post-production ilustrator and animator. I've worked
					on multiple advertisement projects with Adidas, EDP, and more. Inspired at a young age
					from cartoons and anime art, i was led to try different art styles. I hope to share my
					passion with the NFT community through the creation of cute Tiny Ants with a realistic
					touch.
				</p>
			</div>
			<div
				class="basis-1/3 bg-white/50 min-h-40 flex flex-col p-10 transition-transform lg:rotate-3 hover:rotate-0 hover:scale-110"
			>
				<img
					src="{base}/images/420.png"
					alt="John Milesz"
					height="1500"
					width="1500"
					class="mb-8 rounded-md"
				/>
				<h3 class="text-3xl font-semibold mb-2">JOHN MILES</h3>
				<h4 class="text-2xl font-semibold mb-5">DEVELOPER</h4>
				<p>
					Hi, my name is John Miles and im a Web developer. I've spent most of my successful career
					building and running Web sites for large organizations. I'm looking forward to explore
					Web3 with you, and see what NFT space is capable of.
				</p>
			</div>
		</div>
	</div>
</section>
<section id="faqs">
	<div class="container flex flex-col py-36 space-y-16">
		<h2 class="text-5xl font-bold text-center">FAQS</h2>
		<Accordion
			items={[
				{
					label: 'Why Tiny Ants?',
					content:
						"Tiny Ants are much more than just a brand or a community. They represent creativeness in any collective body. Just like Ants, our society is always in sync, moving as one. But ultimately, we're all infinitely unique. So let's be like our Tiny Ant Friends"
				},
				{
					label: 'How many NFTs are there in the collection?',
					content:
						'1,111. 61 are reserved for giveaways and promotions, and 3 Team Ants. 1,047 will be available to mint.'
				},
				{
					label: 'Will there be a pre-sale?',
					content: 'Yes. You need to reach Whitelist status to participate.'
				},
				{
					label: 'What is the mint price?',
					content: 'The whitelist pre-sale is FREE'
				},

				{
					label: 'What are the rarities?',
					content: 'Rarities will be shared shortly after launch.'
				},
				{
					label: 'Are there royalties?',
					content: '10% royalty on our main policy.'
				},
				{
					label: 'Wen launch?',
					content:
						'Pre-Sale minting will be on the 29th of July. Public sale begins shortly after in case pre-sale doesnt sell-out'
				},
				{
					label: 'How to mint?',
					content:
						'First get whitelisted by registering in the premint, interact with our Twitter posts or engage on our Discord. Then access tinyants.io/mint for the mint page with instructions.'
				},
				{
					label: 'How many Tiny Ants can I mint for FREE?',
					content:
						'We have 3 roles that give you access to the FREE MINT: <br> -Worker Tiny Ant (1 per wallet) <br>- Flying Tiny Ant (3 per wallet) <br>- Warrior Tiny Ant (6 per wallet) <br>There are limited spots, so get them before they run out!'
				}
			]}
		/>
	</div>
</section>
<section id="wl-checker">
	<div class="container flex flex-col items-center py-36 space-y-16">
		<h2 class="text-5xl font-bold text-center">WHITELIST CHECKER</h2>
		<p class="text-2xl text-center">
			Insert your address below and press the button to verify that you are whitelisted.
		</p>
		<div class="w-full">
			<input
				type="text"
				placeholder="Polygon Address"
				class="block border border-jordy-blue focus:border-mauve focus:outline-mauve text-2xl rounded-lg w-full max-w-4xl m-auto py-5 px-7 transition-colors"
				bind:value={address}
			/>
			{#if addressIsWhitelisted != undefined}
				<p transition:slide class="text-2xl text-center mt-4">
					{#if addressIsWhitelisted === AntType.Worker}
						Congrats! You are on the AntList as a Worker Tiny Ant, you can mint 1 Free Tiny Ant when
						mint goes live 🔥
					{:else if addressIsWhitelisted === AntType.Explorer}
						Congrats! You are on the AntList as a Explorer Tiny Ant, you can mint 3 Free Tiny Ants
						when mint goes live 🔥
					{:else if addressIsWhitelisted === AntType.Warrior}
						Congrats! You are on the AntList as a Warrior Tiny Ant, you can mint 6 Free Tiny Ants
						when mint goes live 🔥
					{:else if addressIsWhitelisted === AntType.Renegade}
						Sorry! Your wallet is not on the WL! Try engaging with one of our next posts to get in!
					{/if}
				</p>
			{/if}
		</div>

		<button
			on:click={() => checkAddress(address)}
			class="bg-jordy-blue text-white text-center hover:bg-mauve hover:text-black transition-colors py-5 px-7 text-2xl font-semibold rounded-lg"
			>CHECK ADDRESS</button
		>
	</div>
</section>
