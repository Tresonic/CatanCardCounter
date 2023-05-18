<script>
	export let count;
    export let name;

    $: count = 0;
</script>

<div class="card">
	<button on:click={() => {count = Math.max(0, count-1)}}>-</button>
    <div class="img" style="background-image: url({"images/" + name.toLowerCase() + ".jpeg"});">
        <span>{count}</span>
    </div>
	<button on:click={() => {count += 1}}>+</button>
</div>

<style>
	.card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-top: 10px;
        width: 100%;
        height: 15vh;
	}

	button {
		margin: 0;
        height: 100%;
        width: 30%;
        font-size: xx-large;
	}

    .img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        color: white;
        font-size: 5em;
        line-height: 100%;
    }
</style>