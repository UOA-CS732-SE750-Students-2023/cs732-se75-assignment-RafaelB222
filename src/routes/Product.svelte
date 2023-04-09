<script>
    import { appContext } from "./appContext";
    import { getContext } from "svelte";
    export let item;

    //Retreive the daOfTheWeek from the context
    const dayOfTheWeek = getContext('context');
    const handleAddToCart = appContext.handleAddToCart;    

    //reactively update the products in the store according to the dayOfTheWeek
    let updatedProducts;
    $: {
        appContext.update(state => {
            updatedProducts = state.products.map((product) => {
                if (dayOfTheWeek.specials.includes(product.name)) {
                    return {
                        ...product,
                        onSpecial: true,
                        cost: Math.floor(product.cost * 0.9)
                    };
                } else {
                    return product;
                }
            });
            return { ...state, products: updatedProducts };
        });
    }
    
  </script>
  
  <div class="product">
    <div>      
      <img width={200} height={200} src={item.image} alt="product" class="img">
    </div>
    <div>
      <h3>{item.name}</h3>      
        {#if item.onSpecial}
          <p><strong>Cost: </strong> 🪙{item.cost.toLocaleString('en-NZ')}</p>
          <p>HOT DEAL!!!</p>
        {:else}
          <p><strong>Cost: </strong> 🪙{item.cost.toLocaleString('en-NZ')}</p>
        {/if}
      <button on:click={() => handleAddToCart(item)}>Add to cart</button>
    </div>
  </div>

<style>
    .product {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px dotted lightgray;
    }

    .product img {
    display: block;
    }
</style>