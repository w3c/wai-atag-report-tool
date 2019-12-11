<script>
  import SuccessCriterion from './SuccessCriterion.svelte';
  export let id;
  export let atag_id;
  export let name;
  export let description;
  export let scs = [];
</script>

<div {id} class="guideline">
  <h3>{atag_id}: {name}</h3>
  <p>{description}</p>
  {#each scs as sc}
    <SuccessCriterion {...sc} />
  {/each}
</div>

<style>
.guideline {
  margin-bottom: 2em;
}
</style>