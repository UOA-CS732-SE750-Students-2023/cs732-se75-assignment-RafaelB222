<script>
	import { appWritableStore } from './appWritableStore.js';
	import { groupItems } from './groupItems.js';
	import CartItem from './CartItem.svelte';
	let cart;
	let totalCost;
	let groups;

	$: {
		//cart must be reactively assigned to $appContext.cart so that whenever the store is updated the cart variable is reassigned. 
		//The same is true for the groups
		cart = $appWritableStore.cart;	
		totalCost = cart.map((item) => item.cost).reduce((prev, cost) => prev + cost, 0);
		groups = groupItems($appWritableStore.cart);
	}
	
	
		
		
</script>

<div class="cart">
	<h3>My Cart</h3>
	{#if cart.length > 0} 
		{#each groups as group}
			<CartItem {group} />			
		{/each}
	{:else}
		<p>Cart is empty</p>
	{/if}
	<p style={{ alignSelf: 'flex-end' }}>
		<strong>Total cost:</strong> 🪙{totalCost.toLocaleString('en-NZ')}
	</p>
	<a href="/checkout" style={{ alignSelf: 'flex-end' }}>Checkout</a>
</div>

<style>
	.cart {
		border: 1px dotted black;
		background-color: aliceblue;
		position: sticky;
		top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		gap: 5px;
		padding: 5px;
	}

	
</style>
