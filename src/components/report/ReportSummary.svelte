<script>
  import { evaluation } from '../../stores/evaluation.js';
  import marked from 'marked';

  let editing = false;
  let section;

  function toggleEdit() {
    editing = !editing; 
    section.focus();
  }
</script>

<div bind:this={section} tabindex="-1">
<h2>Executive Summary </h2>

{#if editing}
  <div class="field">
    <label for={`evaluation-meta-edit-executiveSummary`}>Executive Summary</label>
    <textarea bind:value={$evaluation["meta"]["executiveSummary"]["value"]} id={`evaluation-meta-edit-executiveSummary`} on:blur={() => evaluation.updateCache($evaluation)}></textarea>
  </div>
  <button type="button button-secondary" on:click={toggleEdit}>Save</button>
{:else}
  {#if $evaluation["meta"]["executiveSummary"]["value"]}
  {@html marked($evaluation["meta"]["executiveSummary"]["value"])}
  {:else}
  Not provided
  {/if}
  <button type="button" class="button-secondary" on:click={toggleEdit}>Edit</button>
{/if}
</div>

<style>
  h2 {
    display: flex;
  }
  div:focus { 
    outline: none; 
  }
</style>
