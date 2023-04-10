import { writable } from 'svelte/store';
//A writable store is an object is basically the equivalent of setState() in React. When it is written to it will update all components 
//which use it. 

const products = [
    { name: 'Abra', cost: 180, image: '/Abra.png', onSpecial: false },
    { name: 'Clefairy', cost: 500, image: '/Clefairy.png', onSpecial: false },
    { name: 'Nidorina', cost: 1200, image: '/Nidorina.png', onSpecial: false },
    { name: 'Dratini', cost: 2800, image: '/Dratini.png', onSpecial: false },
    { name: 'Scyther', cost: 5500, image: '/Scyther.png', onSpecial: false },
    { name: 'Porygon', cost: 9999, image: '/Porygon.png', onSpecial: false },
];

//specify the initial state before creating the store. 
const initialState = {
    products,
    cart: [],
};

function createStore() {
    //create the store as the initial state and specify which methods can be used to interact with it.
    const { subscribe, set, update } = writable(initialState);

    //update the state of the store by setting the state as the current state with an updated cart. 
    function handleAddToCart(item) {
        update(state => {
            return { ...state, cart: [...state.cart, item] };
        });
    }

    //Update the state of the store by setting the cart to empty. 
    function clearCart() {
        update(state => {
            return {... state, cart: [] }
        });
    }

    //Take an item, find its index within the current cart, and then update the state with the item removed from the cart. 
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
      //When the create store function is called, everything which the function returns will be added to the store along with the 
      //initial state. 
    return {
        update,
        subscribe,
        handleAddToCart,
        clearCart,
        removeCartItem
    };
}

export const appWritableStore = createStore(); 

