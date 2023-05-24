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

    export let devDeck;
    export let devCards;

    $: remainingDevCards = devDeck.length;
    
    function discardDevcard() {
        devDeck.pop();
        remainingDevCards--;
        console.log(devDeck);
    }
    const buyDevcard = () => {
        const card = devDeck.pop();
        devCards[card] += 1;
        remainingDevCards--;
    }
    function playDevcard(type) {
        devCards[type]--;
        if (type === DEV_CARDS.knight) {
            devCards[DEV_CARDS.playedKnights]++;
        }
        getModal("devcards").close();
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
            {#if devCards[DEV_CARDS.knight] > 0}
                <button on:click={() => playDevcard(DEV_CARDS.knight)}><span><Sword class="icon" /></span></button>
            {/if}
            {#if devCards[DEV_CARDS.yop] > 0}
                <button on:click={() => playDevcard(DEV_CARDS.yop)}><span><HeadLightbulbOutline class="icon" /></span></button>
            {/if}   
            {#if devCards[DEV_CARDS.roadbuilding] > 0}
                <button on:click={() => playDevcard(DEV_CARDS.roadbuilding)}><span><Road class="icon" /></span></button>
            {/if}
            {#if devCards[DEV_CARDS.monopoly] > 0}
                <button on:click={() => playDevcard(DEV_CARDS.monopoly)}><span><HatFedora class="icon" /></span></button>
            {/if}
        </div>
	</Modal>
</div>

<style>
    .devbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
    }

    .devcol {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
    }

    button {
        height: 40%;
        font-size: 1.2em;
    }

    span {
        margin: 0 5px;
        font-size: 25px;
    }
</style>