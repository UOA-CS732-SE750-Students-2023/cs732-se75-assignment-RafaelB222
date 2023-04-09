<script>
    import { appContext } from "./appContext";
    //Receive a group of products to be purchased as a prop
    export let group;
    //access the properties of the group prop. These must be reactively assigned using the $ syntax.     
    let item;
    let count;
    $: {
        item = group.item;
        count = group.count;
    }
    console.log(count);
    //access the remove item method from the store
    let removeCartItem = appContext.removeCartItem;
    
    
</script>

<div class="cartItem">
    <img width={50} height={50} src={item.image} class="image" alt="cartItem"/>
    <span style={{ flexGrow: 1 }}><strong>{item.name}</strong></span>
    <span>x {count}</span>
    <button on:click={() => removeCartItem(item)}>remove</button>
</div>

<style>
    .cartItem {
        background-color: gainsboro;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
    }
</style>
