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
    <Link to={'/#markdown'}>
      <span class="visuallyhidden">Markdown supported</span>
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24"><path style="fill: currentColor;" d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z"/></svg>
    </Link>
    <span class="observation__meta">
      <Link to={`/report#criterion-${normalisedCriterionId}`}>View in report<span class="visuallyhidden"> for {normalisedCriterionId}</span></Link>
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