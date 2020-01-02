<script>
  import SuccessCriterion from './SuccessCriterion.svelte';
  export let id;
  export let num;
  export let handle;
  export let text;
  export let successcriteria = [];
</script>

<div {id} class="guideline">
  <h3>{num}: {handle}</h3>
  <p>{text}</p>
  {#each successcriteria as sc}
    <SuccessCriterion {...sc} />
  {/each}
</div>

<style>
.guideline {
  margin-bottom: 2em;
}
</style>