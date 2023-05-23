<script>
	import Modal, { getModal } from "./Modal.svelte";

    import SwordCross from "svelte-material-icons/SwordCross.svelte";
    import Counter from "svelte-material-icons/Counter.svelte";
    import Road from "svelte-material-icons/Road.svelte";
    import Sword from "svelte-material-icons/Sword.svelte";
    import HeadLightbulbOutline from "svelte-material-icons/HeadLightbulbOutline.svelte";
    import HatFedora from "svelte-material-icons/HatFedora.svelte";
    import StackOverflow from "svelte-material-icons/StackOverflow.svelte";


    import { DEV_CARDS } from "./util.js";

    export let devCards;
    export let devDeck;

    // $: remainingDevCards = devCards.reduce((count, val) => count - val, 25)
    $: remainingDevCards = devDeck.length;
    
    function discardDevcard() {
        devDeck.pop();
        remainingDevCards--;
        console.log(devDeck);
    }
    const buyDevcard = () => {
        const card = devDeck.pop();
        console.log(devCards);
        devCards[card] += 1;
        console.log(devCards);

        remainingDevCards--;
    }
    function playDevcard(type) {
        devCards[type]--;
    }
</script>

<div class="devbar">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="devcol" on:click={() => getModal("devcards").open()}>
        <div><span><SwordCross class="icon" /> {devCards[DEV_CARDS.playedKnights]}</span><span><Sword class="icon" /> {devCards[DEV_CARDS.knight]}</span><span><Road class="icon" /> {devCards[DEV_CARDS.roadbuilding]}</span></div>
        <div><span><Counter class="icon" /> {devCards[DEV_CARDS.vp]}</span><span><HeadLightbulbOutline class="icon" /> {devCards[DEV_CARDS.yop]}</span><span><HatFedora class="icon" /> {devCards[DEV_CARDS.monopoly]}</span></div>
    </div>
    <div class="devcol"><span><StackOverflow class="icon" /> {remainingDevCards}</span></div>
    <div class="devcol">
        <button on:click={buyDevcard}>Kaufen</button>
        <button on:click={discardDevcard}>Weglegen</button>
    </div>

    <Modal id="devcards">
		<div>Entwicklungskarte ausspielen:</div>
		<div>
            {#if devCards[DEV_CARDS.knight]}
                <button on:click={playDevcard(DEV_CARDS.knight)}><span><Sword class="icon" /></span></button>
            {/if}
            {#if devCards[DEV_CARDS.yop]}
                <button on:click={playDevcard(DEV_CARDS.yop)}><span><HeadLightbulbOutline class="icon" /></span></button>
            {/if}   
            {#if devCards[DEV_CARDS.roadbuilding]}
                <button on:click={playDevcard(DEV_CARDS.roadbuilding)}><span><Road class="icon" /></span></button>
            {/if}
            {#if devCards[DEV_CARDS.monopoly]}
                <button on:click={playDevcard(DEV_CARDS.monopoly)}><span><HatFedora class="icon" /></span></button>
            {/if}
        </div>
	</Modal>
</div>

<style>
    .devbar {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 15px;
        margin: 10px;
    }

    .devcol {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
    }

    span {
        margin: 0 5px;
        font-size: 25px;
    }
</style>