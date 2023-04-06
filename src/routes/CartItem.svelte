<script>
    import { appContext } from "./appContext";
    export let group;
    let item = group.item;
    let count = group.count;
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
