<script>
  import { Link } from "svelte-navigator";
  import { evaluation } from '../stores/evaluation.js';
  import { normaliseCriterionId } from '../utils/normaliseCriterionId';

  export let id;
  export let num;

  $: normalisedCriterionId = normaliseCriterionId(num);
</script>

<div class="observation">
  <textarea 
    name={`comment-${normalisedCriterionId}`} 
    bind:value={$evaluation['evaluationData'][id]['observations']} 
    id={`comment-${normalisedCriterionId}`} 
    cols="20" 
    rows="5" 
    on:change={() => { evaluation.updateCache($evaluation); $evaluation['evaluationData'][id]['evaluated'] = true; }}
  ></textarea>  
  <div class="observation__header">
    <label for={`comment-${normalisedCriterionId}`}>
      Observations
      <span class="visuallyhidden">for {num}</span>
    </label>
    <span class="observation__meta">
      <Link to={`/report#criterion-${normalisedCriterionId}`}>View in report<span class="visuallyhidden"> for {normalisedCriterionId}</span></Link>
    </span>
  </div>

</div>

<style>
.observation {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
}
@media (min-width: 35em) {
  .observation {
    margin-top: 0;
  }
}
.observation__header {
  display: flex;
  flex-direction: column;
  order: -1;
}
@media (min-width: 35em) {
  .observation__header {
    flex-direction: row;
  }
}
  .observation :global(a) {
    color: var(--wai-green);
  }
  .observation :global(a:hover) {
    color: var(--w3c-blue);
  }
  .observation label {
    margin-right: .5em;
  }
  .observation__meta {
    margin-left: auto;
    font-size: smaller;
    align-self: baseline;
  }
</style>