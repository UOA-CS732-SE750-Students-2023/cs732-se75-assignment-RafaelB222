<script>
    //import the appContext object from the appContext.js file and set it as the context state for the app. 
    import { appContext } from './appContext.js';
    import { setContext } from 'svelte';    
    setContext('context', appContext);
    
    
</script>


<h1>🚀Rocket Game Corner 🚀 - Prize Shop</h1>
<nav>This is the nav bar</nav>



<slot></slot>