<script>
  import Guideline from './Guideline.svelte';
  export let title;
  export let subtitle = '';
  export let guidelines;
  export let className = undefined;
</script>

<div class={className}>
  <h2>{subtitle}: {title}</h2>
  {#each guidelines as guideline }
  <Guideline {...guideline} />
  {/each}
</div>

<style>
</style>