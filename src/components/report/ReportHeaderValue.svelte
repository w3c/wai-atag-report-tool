<script>
  import { evaluation } from "../../stores/evaluation.js";

  import NoResult from "../NoResult.svelte";

  export let field;
  export let editing;
</script>

{#if editing}
  <input
    type="text"
    bind:value={$evaluation['meta'][field]['value']}
    id={`evaluation-meta-edit-${field}`}
    on:blur={() => evaluation.updateCache($evaluation)} />
{:else}
  {#if $evaluation['meta'][field] && $evaluation['meta'][field]['value']}
    {$evaluation['meta'][field]['value']}
  {:else}
  <NoResult>Not provided</NoResult>
  {/if}
{/if}
