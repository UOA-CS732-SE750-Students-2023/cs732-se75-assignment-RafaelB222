<script>
    //This is the page that will be displayed at "/"
    import Product from "./Product.svelte";
	import ShoppingCart from "./ShoppingCart.svelte";
    import { appWritableStore } from "./appWritableStore";    
</script>


<div class="mainGrid">
    <div class="productContainer">
         
        {#each $appWritableStore.products as product}
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