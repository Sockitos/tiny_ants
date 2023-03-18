<script lang="ts">
	let index: number | undefined;
</script>

<div>
	<button
		class="{index != 0
			? 'bg-jordy-blue text-white'
			: 'bg-mauve text-black'} hover:bg-mauve hover:text-black transition-colors w-full p-5 text-xl text-left font-semibold border-b-white border-b-2 rounded-t-lg"
		on:click={() => (index = index == 0 ? undefined : 0)}
	>
		CLICK 1
	</button>
	<div class="{index == 0 ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all">
		<p class="p-5">ANSWER 1</p>
	</div>
	<button
		class="{index != 1
			? 'bg-jordy-blue text-white'
			: 'bg-mauve text-black'} hover:bg-mauve hover:text-black transition-colors w-full p-5 text-xl text-left font-semibold border-b-white border-b-2"
		on:click={() => (index = index == 1 ? undefined : 1)}
	>
		CLICK 2
	</button>
	<div class="{index == 1 ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all">
		<p class="p-5">ANSWER 2</p>
	</div>
	<button
		class="{index != 2
			? 'bg-jordy-blue text-white'
			: 'bg-mauve text-black'} hover:bg-mauve hover:text-black transition-colors w-full p-5 text-xl text-left font-semibold border-b-white border-b-2"
		on:click={() => (index = index == 2 ? undefined : 2)}
	>
		CLICK 3
	</button>
	<div class="{index == 2 ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all">
		<p class="p-5">ANSWER 3</p>
	</div>
	<button
		class="{index != 3
			? 'bg-jordy-blue text-white'
			: 'bg-mauve text-black'} hover:bg-mauve hover:text-black transition-colors w-full p-5 text-xl text-left font-semibold rounded-b-lg"
		on:click={() => (index = index == 3 ? undefined : 3)}
	>
		CLICK 4
	</button>
	<div class="{index == 3 ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all">
		<p class="p-5">ANSWER 4</p>
	</div>
</div>
