<script>
  import { onMount, beforeUpdate } from 'svelte';
  import { evaluation } from '../stores/evaluation.js';
  import { normaliseCriterionId } from '../utils/normaliseCriterionId';

  export let id;
  export let num;

  $: results = [
    { id: 'not-set', text: '--'},
    { id: 'not-checked', text: 'Not checked' },
    { id: 'passed', text: 'Passed' },
    { id: 'failed', text: 'Failed' },
    { id: 'cannot-tell', text: 'Cannot tell' },
    { id: 'not-applicable', text: 'Not applicable' } 
  ];
  
  $: normalisedCriterionId = normaliseCriterionId(num);
</script>

<div>
  <label for={`result-${normalisedCriterionId}`}>Result<span class="visuallyhidden"> for {num}</span></label>
  <select id={`result-${normalisedCriterionId}`} name={`result-${id}`} bind:value={$evaluation['evaluationData'][id]['result']} on:change={() => { evaluation.updateCache($evaluation); $evaluation['evaluationData'][id]['evaluated'] = true}}>
    {#each results as result}
      <option name={`option-${id}-${result.id}`}>{result.text}</option>
    {/each}
  </select>
</div>