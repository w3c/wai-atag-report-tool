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

<div {id} class={`criterion--${selectedResult}`}>
  <h2>{related_atag}: {name}</h2>
  <p>{description}</p>
  <select name={id} bind:value={selectedResult}>
    {#each results as result}
      <option name=({id}-{result.id}) value={result.text}>
        {result.text}
      </option>
    {/each}
  </select>
</div>

<style>
</style>