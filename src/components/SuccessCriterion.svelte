<script>
  export let id;
  export let related_atag;
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

  function logResult() {
    console.log(selectedResult);
  }
</script>

<div {id} class={`criterion criterion--${selectedResult ? selectedResult.toLowerCase() : ''}`}>
  <h3>{related_atag}: {name}</h3>
  <p>{description}</p>
  <div class="criterion__answers">
    <label for={`result-$(id)`} class="visuallyhidden">Result for {related_atag}</label>
    <select id={`result-$(id)`} name={id} bind:value={selectedResult}>
      {#each results as result}
        <option name=({id}-{result.id}) value={result.text}>
          {result.text}
        </option>
      {/each}
    </select>
    <label for={`comment-$(id)`} class="visuallyhidden">Result for {related_atag}</label>
    <textarea name={`comment-$(id)`} id={`comment-$(id)`} cols="20"></textarea>
  </div>
</div>

<style>
.criterion {
  margin-bottom: 2em;
}
.criterion--passed h3::before {
  content: '👍 ';
}
.criterion--failed h3::before {
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
</style>