<script>
    import { appContext } from './appContext.js';
    import { setContext } from 'svelte';
    setContext('context', appContext);
</script>



<slot></slot>