<script>
    import { getContext } from "svelte";
    export let group;
    const context = getContext('context');
    let item = group.item;
    let count = group.count;
    let removeCartItem;

    $: {
        removeCartItem = context.removeCartItem;
    }
    
</script>

<div class="cartItem">
    <img width={50} height={50} src={item.image} class="image" alt="cartItem"/>
    <span style={{ flexGrow: 1 }}><strong>{item.name}</strong></span>
    <span>x {count}</span>
    <button on:click={() => removeCartItem(item)}>remove</button>
</div>