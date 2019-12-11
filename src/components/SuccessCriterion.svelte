<script>
  export let id;
  export let atag_id;
  export let name;
  export let description;

  let selectedResult, observations;

  let results = [
    { id: 'not-checked', text: 'Not checked' },
    { id: 'passed', text: 'Passed' },
    { id: 'failed', text: 'Failed' },
    { id: 'not-present', text: 'Not present' },
    { id: 'cannot-tell', text: 'Cannot tell' }
  ];
</script>

<div {id} class={`criterion criterion--${selectedResult ? selectedResult.toLowerCase() : ''}`}>
  <h4>{name} <span class="criterion__ref"><abbr title="Success Criterion">SC</abbr> {atag_id}</span></h4>
  <p>{description}</p>
  <div class="criterion__answers">
    <label for={`result-${id}`} class="visuallyhidden">Result for {atag_id}</label>
    <select id={`result-${id}`} name={id} bind:value={selectedResult}>
      {#each results as result}
        <option name=({id}-{result.id}) value={result.text}>
          {result.text}
        </option>
      {/each}
    </select>
    <label for={`comment-${id}`} class="visuallyhidden">Observations for {atag_id}</label>
    <textarea name={`comment-${id}`} id={`comment-${id}`} cols="20"></textarea>
  </div>
</div>

<style>
.criterion {
  margin-bottom: 2em;
  background-color: var(--pure-white);
  border: 1px solid var(--line-grey);
  box-shadow: 1px 1px 4px -4px
    #000;
  padding: 1em;
}
.criterion h4 {
  margin-top: 0;
}
.criterion--passed h4::before {
  content: '👍 ';
}
.criterion--failed h4::before {
  content: '❌ ';
}
  .criterion__answers {
    display: flex;
    align-items: start;
    justify-content: stretch;
  }
    .criterion__answers select {
      margin-right: 1em;
    }
    .criterion__answers textarea {
      flex: 1;
    }
.criterion__ref {
  padding: .25em 1em;
  border-radius: 1em;
  margin-left: .5em;
  background-color: var(--cloudy-subtle);
  font-size: 70%;
}
</style>