<script>
	import Card from "./Card.svelte";
    import DevBar from "./DevBar.svelte";

	let cards = [
		{ name: "lumber", count: 0 },
		{ name: "wheat", count: 0 },
		{ name: "ore", count: 0 },
		{ name: "brick", count: 0 },
		{ name: "sheep", count: 0 },
	];

	$: cardCount = cards.reduce((count, card) => count + card.count, 0);
	$: cardsToDiscard = cardCount > 7 ? Math.floor(cardCount / 2) : 0;
</script>

<main>
	<div class="header">
		<span>Kartenzahl: {cardCount}</span> <span>Abzuwerfen: {cardsToDiscard}</span>
	</div>

	<div class="card-container">
		{#each cards as card}
			<Card bind:count={card.count} name={card.name} />
		{/each}
	</div>

	<DevBar />
</main>

<style>
	main {
		position:fixed;
		padding:0;
		margin:0;

		top:0;
		left:0;

		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	
	span {
		font-size: 20px;
		margin: 10px;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-container {
		width: 90%;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
