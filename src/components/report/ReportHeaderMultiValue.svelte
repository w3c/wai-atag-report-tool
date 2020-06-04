<script>
  import { evaluation } from "../../stores/evaluation.js";

  export let field;
  export let editing;
</script>

{#if editing}
  <select name={`evaluation-meta-${field}`} id={`evaluation-meta-${field}`} bind:value={$evaluation["meta"][field]["value"]} on:blur={() => { evaluation.updateCache($evaluation);}}>
      <slot></slot>
  </select>
{:else}
  {#if $evaluation["meta"][field] && $evaluation["meta"][field]["value"]}
  {$evaluation["meta"][field]["value"]}
  {:else}
  Not provided
  {/if}
{/if}

