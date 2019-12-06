<script>
  import SuccessCriterion from './SuccessCriterion.svelte';
  export let title;
  export let scs;
  export let className;
</script>

<div class={className}>
  <h1>{title}</h1>
  {#each scs as sc }
  <SuccessCriterion {...sc} />
  {/each}
</div>

<style>
</style>