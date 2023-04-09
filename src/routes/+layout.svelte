<script>
     //Set a day of the week value as the context of the app
    import { setContext } from 'svelte'; 
    import { daysOfTheWeek } from './daysOfTheWeek.js'; 
    
    
    const dayNumber =  Math.floor(Math.random() * 7);
    const dayOfTheWeek = daysOfTheWeek[dayNumber];
    setContext('context', dayOfTheWeek);    
</script>


<h1>🚀Rocket Game Corner 🚀 - Prize Shop</h1>




<slot></slot>