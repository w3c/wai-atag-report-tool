<script>
  import NavLink from "./NavLink.svelte";
  import Guideline from './Guideline.svelte';
  import atag from '../data/atag.js';
  export let id = null;
  export let className = undefined;

  $: principle = atag[id].principle || null;
  $: guidelines = atag[id].guidelines || null;
</script>

<div class={className}>
  <h2>{principle.description}</h2>
  {#each guidelines as guideline }
  <Guideline {...guideline} />
  {/each}
  {#if id > 0 && id < atag.length }
  <button type="button" on:click={()=>id--}>Previous step</button>
  {/if}
  {#if (id + 1) < atag.length }
  <button type="button" on:click={()=>id++}>Next step</button>
  {/if}
</div>

<style>
</style>