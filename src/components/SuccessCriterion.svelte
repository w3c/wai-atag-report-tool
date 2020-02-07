<script>
  import { evaluation } from '../stores/evaluation.js';
  import MoreInfo from './MoreInfo.svelte';
  import SuccessCriterionDetails from './SuccessCriterionDetails.svelte';
  export let id;
  export let num;
  export let handle;
  export let text;
  export let level = 'A';
  export let details = null;

  let results = [
    { id: 'not-checked', text: 'Not checked' },
    { id: 'passed', text: 'Passed' },
    { id: 'failed', text: 'Failed' },
    { id: 'cannot-tell', text: 'Cannot tell' },
    { id: 'not-applicable', text: 'Not applicable' } 
  ];

  let notes = null;
  let list = null;
  const normalisedCriterionId = num.replace(/\./g, '').toLowerCase();
  const linkToCriterion = `https://www.w3.org/TR/ATAG20/#sc_${normalisedCriterionId}`;

  $: notes = details ? details.filter(detail => detail.type === 'note') : null;
  $: list = details ? details.filter(detail => detail.type === 'olist' || detail.type === 'ulist') : null;
</script>

<div {id}>
  <h4>
    {handle}
    <a href={linkToCriterion} class="criterion__ref" target="_blank"><abbr title="Success Criterion">SC</abbr> {num}</a>
    <MoreInfo label="Info about {num}">
      <p>Provide plain text alternatives when using icons, images and other non-text content. For instance, if you have a button that is just an icon, make sure there is a label associated.</p>
    </MoreInfo> 
  </h4>
  <p>{text}</p>
  {#if list}<SuccessCriterionDetails type="list" details={list} />{/if}
  <p><em>{level}</em></p>
  {#if notes}<SuccessCriterionDetails type="notes" details={notes} />{/if}
  <div class="criterion__answers">
    <div>
      <label for={`result-${id}`}>Result for {num}</label>
      <select id={`result-${id}`} name={id} bind:value={$evaluation[id]['result']} on:change={() => console.log(`result-${id} is now set to ${$evaluation[id]['result']}`)}>
        {#each results as result}
          <option name=({id}-{result.id}) value={result.text}>
            {result.text}
          </option>
        {/each}
      </select>
    </div>
    <div>
      <label for={`comment-${id}`}>Observations for {num}</label>
      <textarea name={`comment-${id}`} bind:value={$evaluation[id]['observations']} id={`comment-${id}`} cols="20" on:change={() => console.log(`${id} comment is now set to ${$evaluation[id]['observations']}`)}></textarea>
    </div>
  </div>
</div>

<style>
.criterion {
  margin-bottom: 1em;
  background-color: var(--pure-white);
  border: 1px solid var(--line-grey);
  box-shadow: 1px 1px 4px -4px
    #000;
  padding: 1em;
}
.criterion h4 {
  margin-top: 0;
}
.criterion ol li {
  list-style: lower-alpha;
}
  .criterion__answers {
    display: flex;
    align-items: start;
    justify-content: stretch;
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
      flex: 2;
    }
    .criterion__answers textarea {
      width: 100%;
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