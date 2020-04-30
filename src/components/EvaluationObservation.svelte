<script>
  import { Link } from "svelte-routing";
  import { evaluation } from '../stores/evaluation.js';
  import { normaliseCriterionId } from '../utils/normaliseCriterionId';

  export let id;
  export let num;

  $: normalisedCriterionId = normaliseCriterionId(num);
</script>

<div class="observation">
  <div class="observation__header">
    <label for={`comment-${normalisedCriterionId}`}>
      Observations
      <span class="visuallyhidden">for {num}</span>
    </label>
    <span class="observation__meta">
      Markdown supported ・ <Link to={`/report#criterion-${normalisedCriterionId}`}>Preview in report<span class="visuallyhidden"> for {normalisedCriterionId}</span></Link>
    </span>
  </div>

  <textarea 
    name={`comment-${normalisedCriterionId}`} 
    bind:value={$evaluation['evaluationData'][id]['observations']} 
    id={`comment-${normalisedCriterionId}`} 
    cols="20" 
    rows="5" 
    on:change={() => { evaluation.updateCache($evaluation); $evaluation['evaluationData'][id]['evaluated'] = true; }}
  ></textarea>
</div>

<style>
.observation {
  margin-top: 1em;
}
@media (min-width: 35em) {
  .observation {
    margin-top: 0;
  }
}
.observation__header {
  display: flex;
  flex-direction: column;
}
@media (min-width: 35em) {
  .observation__header {
    flex-direction: row;
  }
}
  .observation__meta {
    margin-left: auto;
    font-size: smaller;
    align-self: baseline;
  }
</style>