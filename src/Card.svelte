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
        width: 100%;
	}

	button {
		margin: 0;
        height: 100%;
        width: 30%;
        font-size: 4em;
        padding: 0;
	}

    span {
        font-size: 4em;
    }

    .img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        color: white;
        line-height: 100%;
    }
</style>