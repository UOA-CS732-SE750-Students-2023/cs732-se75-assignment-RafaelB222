<script>
    import { appWritableStore } from '../appWritableStore';
    import { goto } from '$app/navigation';
    import { groupItems } from "../groupItems";
    
    //this time they don't need to be reactive because cart is not updated from this page
	const cart = $appWritableStore.cart;	
    const clearCart = appWritableStore.clearCart;	
	const totalCost = cart.map((item) => item.cost).reduce((prev, cost) => prev + cost, 0);
	const groups = groupItems(cart);

    //define a function to handle what happens when the user clicks the pay now button
    function handlePay() {
        console.log("handle pay function called");
        clearCart();
        alert('Thank you for your purchase!');
        goto('/', { replaceState: true });
    }

</script>

<h1>Checkout</h1>

<ul>
    {#each groups as group}
        <li> 
            <img width={25} height={25} src={group.item.image} alt="checkoutItem"/> 
            {group.count} 
            {group.item.name}, 
            🪙{group.item.cost.toLocaleString('en-NZ')} ea
        </li>
        
    {/each}
</ul>
<p><strong>Total cost</strong> 🪙{totalCost.toLocaleString('en-NZ')}</p>
<button on:click={() => handlePay()}>Pay now</button>

