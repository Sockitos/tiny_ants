<script lang="ts">
	import { slide } from 'svelte/transition';

	let index: number | undefined;

	type AccordionItem = {
		label: string;
		content: string;
	};

	export let items: AccordionItem[];
</script>

<div>
	{#each items as item, i}
		<button
			class="{index != i
				? 'bg-jordy-blue text-white'
				: 'bg-mauve text-black'} hover:bg-mauve hover:text-black transition-colors w-full p-5 text-xl text-left font-semibold border-b-white border-b-2"
			class:rounded-t-lg={i == 0}
			class:rounded-b-lg={i == items.length - 1}
			on:click={() => (index = index == i ? undefined : i)}
		>
			{item.label}
		</button>

		{#if index == i}
			<div transition:slide>
				<p class="p-5">{item.content}</p>
			</div>
		{/if}
	{/each}
</div>
