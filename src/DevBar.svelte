<script>
    import SwordCross from "svelte-material-icons/SwordCross.svelte";
    import Counter from "svelte-material-icons/Counter.svelte";


    export let devCards;


</script>

<div class="devbar">
    <div class="devcol">
        <span><SwordCross class="icon" /> {devCards[0].count}</span>
        <span><Counter class="icon" /> {devCards[1].count}</span>
    </div>
    <div class="devcol">
        Hand
    </div>
    <div class="devcol">
        <button>Kaufen</button>
        <button>Weglegen</button>
    </div>
</div>

<style>
    .devbar {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        font-size: 15px;
        margin: 10px;
    }

    .devcol {
        display: flex;
        flex-direction: column;
    }
</style>