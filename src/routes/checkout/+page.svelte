<script>
    import { getContext } from "svelte";
    import { goto } from '$app/navigation';
    import { groupItems } from "../groupItems";

    const context = getContext('context');
	let cart = [];
	let totalCost;
	let groups;
    let clearCart;

	$: if ($context.cart) {
		cart = $context.cart;
		totalCost = cart.map((item) => item.cost).reduce((prev, cost) => prev + cost, 0);
		groups = groupItems(cart);
        clearCart = context.clearCart;
	}

    function handlePay() {
        console.log("handle pay function called");
        clearCart();
        alert('Thank you for your purchase!');
        goto('/', { replaceState: true});
    }

</script>

<h1>Checkout</h1>

<ul>
    {#each groups as group}
        <li >{group.count} {group.item.name}, 🪙{group.item.cost.toLocaleString('en-NZ')}ea</li>
    {/each}
</ul>
<p><strong>Total cost</strong> 🪙{totalCost.toLocaleString('en-NZ')}</p>
<button on:click={() => handlePay()}>Pay now</button>