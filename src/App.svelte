<script>
	import seedrandom from "seedrandom";
	import Card from "./Card.svelte";
	import DevBar from "./DevBar.svelte";
	import TopBar from "./TopBar.svelte";
	import Modal, { getModal } from "./Modal.svelte";

	const DEV_CARDS = {
		knight: "Ritter",
		vp: "Siegpunkt",
		monopoly: "Monopol",
		roadbuilding: "Straßenbau",
		yop: "Erfindung",
	};

	function makeDevDeck() {
		var rng = seedrandom(seed);

		function shuffle(a) {
			for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(rng() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
			}
			return a;
		}

		let devCards = Array(14)
			.fill(DEV_CARDS.knight)
			.concat(Array(5).fill(DEV_CARDS.vp))
			.concat(Array(2).fill(DEV_CARDS.monopoly))
			.concat(Array(2).fill(DEV_CARDS.roadbuilding))
			.concat(Array(2).fill(DEV_CARDS.yop));

		devCards = shuffle(devCards);
		// console.log(devCards);
		return devCards;
	}

	let cards = [
		{ name: "lumber", count: 0 },
		{ name: "wheat", count: 0 },
		{ name: "ore", count: 0 },
		{ name: "brick", count: 0 },
		{ name: "sheep", count: 0 },
	];

	let devCards = [
		{ name: "playedKnights", count: 0 },
		{ name: "vp", count: 0 },
		{ name: "knight", count: 0 },
		{ name: "roadbuilding", count: 0 },
		{ name: "yop", count: 0 },
		{ name: "monopoly", count: 0 },

	];

	let seed = new Date().toDateString();

	let devDeck = makeDevDeck(seed);

</script>

<div class="full">
	<Modal id="seed">
        <div>Seed für Entwicklungskartenstapel:</div>
        <input bind:value={seed} placeholder="Seed">
		<button on:click={() => {makeDevDeck(); getModal("seed").close()}}>Ok</button>
    </Modal>

	<TopBar {cards} />

	<div class="card-container">
		{#each cards as card}
			<Card bind:count={card.count} name={card.name} />
		{/each}
	</div>

	<DevBar bind:devCards={devCards} />
</div>

<style>
	.full {
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.card-container {
		width: 90%;
		/* height: 70%; */
	}
</style>
