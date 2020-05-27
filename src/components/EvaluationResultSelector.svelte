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

  function setEvaluatedStatus(id) {
    if ($evaluation['evaluationData'][id] && $evaluation['evaluationData'][id]['result'] !== '--') {
      $evaluation['evaluationData'][id]['evaluated'] = true;
    } else {
      $evaluation['evaluationData'][id]['evaluated'] = false;
    }
  } 
  
  $: normalisedCriterionId = normaliseCriterionId(num);
</script>

<label for={`result-${normalisedCriterionId}`}>Result<span class="visuallyhidden"> for {num}</span></label>
<select id={`result-${normalisedCriterionId}`} name={`result-${id}`} bind:value={$evaluation['evaluationData'][id]['result']} on:change={() => { evaluation.updateCache($evaluation); setEvaluatedStatus(id); }}>
  {#each results as result}
    <option name={`option-${id}-${result.id}`}>{result.text}</option>
  {/each}
</select>

<style>
  select {
    margin-bottom: 1em;
  }
</style>
