<script>
  import { evaluation } from '../stores/evaluation.js';
  import MoreInfo from './MoreInfo.svelte';
  import EvaluationResultSelector from './EvaluationResultSelector.svelte';
  import EvaluationObservation from './EvaluationObservation.svelte';
  import SuccessCriterionDetails from './SuccessCriterionDetails.svelte';
  import { normaliseCriterionId } from '../utils/normaliseCriterionId';

  export let id;
  export let num;
  export let handle;
  export let text;
  export let level = 'A';
  export let details = null;

  let notes = null;
  let list = null;

  $: normalisedCriterionId = normaliseCriterionId(num);
  $: linkToImplementing = `https://www.w3.org/WAI/AU/2012/WD-IMPLEMENTING-ATAG20-20121011/#sc_${normalisedCriterionId}`;
  $: notes = details ? details.filter(detail => detail.type === 'note') : null;
  $: list = details ? details.filter(detail => detail.type === 'olist' || detail.type === 'ulist') : null;
</script>

<div id={normalisedCriterionId} class="criterion">
  <h3>
    {num}: {handle} <em>{level}</em>
    <a href={linkToImplementing} class="criterion__ref" target="_blank">Implementing {num}</a>
  </h3>
  <p>{text}</p>
  {#if list}<SuccessCriterionDetails type="list" details={list} />{/if}
  {#if notes && notes.length > 0}<SuccessCriterionDetails type="notes" details={notes} />{/if}
  <div class="criterion__answers">
    <EvaluationResultSelector {id} {num} />
    <EvaluationObservation {id} {num} />
  </div>
</div>

<style>
.criterion {
  margin-bottom: 4em;
  background-color: var(--pure-white);
  border: 1px solid var(--line-grey);
  box-shadow: 1px 1px 4px -4px
    #000;
  padding: 1em;
}
.criterion h3 {
  margin-top: 0;
  font-weight: normal;
}
.criterion h3 em {
  font-size: smaller;
  font-style: normal;
  margin: 0 2em 0 .5em;
}
.criterion ol li {
  list-style: lower-alpha;
}
.criterion__ref {
  padding: .25em 1em;
  border-radius: 1em;
  margin-left: .75em;
  background-color: var(--cloudy-subtle);
  border: 1px solid var(--cloudy-subtle);
  font-size: 70%;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.criterion__ref:hover {
  background-color: transparent;
  border-color: var(--ocean);
}
.criterion__answers {
  display: flex;
  align-items: start;
  justify-content: stretch;
  flex-direction: column;
}
  /* use :global for children as they are in different components */
  :global(.criterion__answers label) {
    font-size: 90%;
    display: block;
    color: var(--wai-green);
    font-weight: bold;
    margin-bottom: .5em; 
  }
  :global(.criterion__answers select) {
    margin-right: 1em;
  }
  :global(.criterion__answers div:first-child) {
    flex: 1;
  }
  :global(.criterion__answers div:last-child) {
    flex: 3;
  }
  :global(.criterion__answers textarea) {
    width: 100%;
    font-family: "Noto Sans Mono", monospace;
  }
@media (min-width: 35em) {
  .criterion__answers {
    flex-direction: row;
  }
}

</style>