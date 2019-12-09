<script>
  import SuccessCriterion from './SuccessCriterion.svelte';
  export let title;
  export let subtitle = '';
  export let scs;
  export let className = undefined;
</script>

<div class={className}>
  <h2>{subtitle}: {title}</h2>
  {#each scs as sc }
  <SuccessCriterion {...sc} />
  {/each}
</div>

<style>
</style>