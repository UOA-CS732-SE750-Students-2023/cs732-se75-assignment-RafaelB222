<script>
    import { appContext } from "./appContext";    
    export let item;
  
    let handleAddToCart = appContext.handleAddToCart;
    
    
  </script>
  
  <div class="product">
    <div>
      
      <img width={200} height={200} src={item.image} alt="product" class="img">
    </div>
    <div>
      <h3>{item.name}</h3>
      <p><strong>Cost: </strong> 🪙{item.cost.toLocaleString('en-NZ')}</p>
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