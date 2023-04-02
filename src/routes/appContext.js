import { writable } from 'svelte/store';

const products = [
    { name: 'Abra', cost: 180, image: '/Abra.png' },
    { name: 'Clefairy', cost: 500, image: '/Clefairy.png' },
    { name: 'Nidorina', cost: 1200, image: '/Nidorina.png' },
    { name: 'Dratini', cost: 2800, image: '/Dratini.png' },
    { name: 'Scyther', cost: 5500, image: '/Scyther.png' },
    { name: 'Porygon', cost: 9999, image: '/Porygon.png' },
];

const initialState = {
    products,
    cart: [],
};

function createStore() {
    const { subscribe, set, update } = writable(initialState);

    function handleAddToCart(item) {
        console.log("handleAddToCart function called");
        update(state => {
            return { ...state, cart: [...state.cart, item] };
        });
    }

    function clearCart() {
        console.log('clear cart function called');
        update(state => {
            return {... state, cart: [] }
        });
    }

    function removeCartItem(itemToRemove) {
        update(state => {
          const newCart = [...state.cart];
          const indexToRemove = newCart.findIndex(item => item.name === itemToRemove.name);
      
          if (indexToRemove !== -1) {
            newCart.splice(indexToRemove, 1);
          }
      
          return { ...state, cart: newCart };
        });
      }

    return {
        subscribe,
        handleAddToCart,
        clearCart,
        removeCartItem
    };
}

export const appContext = createStore();