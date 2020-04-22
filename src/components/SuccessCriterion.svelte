<script>
  import { Link } from "svelte-routing";
  import { evaluation } from '../stores/evaluation.js';
  import MoreInfo from './MoreInfo.svelte';
  import SuccessCriterionDetails from './SuccessCriterionDetails.svelte';
  export let id;
  export let num;
  export let handle;
  export let text;
  export let level = 'A';
  export let details = null;

  $: results = [
    { id: 'not-checked', text: 'Not checked' },
    { id: 'passed', text: 'Passed' },
    { id: 'failed', text: 'Failed' },
    { id: 'cannot-tell', text: 'Cannot tell' },
    { id: 'not-applicable', text: 'Not applicable' } 
  ];

  let notes = null;
  let list = null;

  $: normalisedCriterionId = num.replace(/\./g, '').toLowerCase();
  $: linkToImplementing = `https://www.w3.org/WAI/AU/2012/WD-IMPLEMENTING-ATAG20-20121011/#sc_${normalisedCriterionId}`;
  $: notes = details ? details.filter(detail => detail.type === 'note') : null;
  $: list = details ? details.filter(detail => detail.type === 'olist' || detail.type === 'ulist') : null;
</script>

<div {id} class="criterion">
  <h3>
    {num}: {handle}
    <a href={linkToImplementing} class="criterion__ref" target="_blank">Implementing {num}</a>
  </h3>
  <p>{text}</p>
  {#if list}<SuccessCriterionDetails type="list" details={list} />{/if}
  <p><em>{level}</em></p>
  {#if notes && notes.length > 0}<SuccessCriterionDetails type="notes" details={notes} />{/if}
  <div class="criterion__answers">
    <div>
      <label for={`result-${id}`}>Result<span class="visuallyhidden"> for {num}</span></label>
      <select id={`result-${id}`} name={`result-${id}`} bind:value={$evaluation['evaluationData'][id]['result']} on:change={() => { evaluation.updateCache($evaluation); $evaluation['evaluationData'][id]['evaluated'] = true}}>
        {#each results as result}
          <option name={`option-${id}-${result.id}`}>
            {result.text}
          </option>
        {/each}
      </select>
    </div>
    <div class="observation">
      <div class="observation__header">
        <label for={`comment-${id}`}>Observations<span class="visuallyhidden">for {num}</span></label>
        <span class="observation__meta">Markdown supported (<a href="https://daringfireball.net/projects/markdown/basics" target="_blank" rel="noopener">syntax</a>, <Link to={`/report#observation-${num}`}>preview<span class="visuallyhidden"> for {num}</span></Link>) </span>
       </div>
      <textarea name={`comment-${id}`} bind:value={$evaluation['evaluationData'][id]['observations']} id={`comment-${id}`} cols="20" rows="5" on:change={() => { evaluation.updateCache($evaluation); $evaluation['evaluationData'][id]['evaluated'] = true; }}></textarea>
    </div>
  </div>
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
.criterion ol li {
  list-style: lower-alpha;
}
  .criterion__answers {
    display: flex;
    align-items: start;
    justify-content: stretch;
    flex-direction: column;
  }
    .criterion__answers label {
      font-size: 90%;
      display: block;
      color: var(--wai-green);
      font-weight: bold;
      margin-bottom: .5em; 
    }
    .criterion__answers select {
      margin-right: 1em;
    }
    .criterion__answers div:first-child {
      flex: 1;
    }
    .criterion__answers div:last-child {
      flex: 3;
    }
    .criterion__answers textarea {
      width: 100%;
      font-family: "Noto Sans Mono", monospace;
    }
  @media (min-width: 35em) {
    .criterion__answers {
      flex-direction: row;
    }
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
}
.criterion__ref:hover {
  background-color: transparent;
  border-color: var(--ocean);
}
</style>