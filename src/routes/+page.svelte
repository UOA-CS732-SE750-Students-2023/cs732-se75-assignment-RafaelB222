<script>
    import { getContext, onDestroy } from "svelte";
    import Product from "./Product.svelte";
	import ShoppingCart from "./ShoppingCart.svelte";
    const context = getContext('context');
    const products = $context.products;

    
</script>


<h1>🚀Rocket Game Corner 🚀 - Prize Shop</h1>
<div class="mainGrid">
    <div class="productContainer">
        {#each products as product}
            <Product item={product} />
        {/each}
    </div>
    <div>
        <ShoppingCart/>
        
    </div>
</div>

<style>
    .mainGrid {
    display: grid;
    grid-template-columns: 1fr 320px;
    grid-auto-rows: auto;
    gap: 10px;
    }

    .productContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    }
</style>