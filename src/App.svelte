<script>
  import atag_a from './data/features_a.js';
  import Guideline from './components/Guideline.svelte';
  import ProgressBar from './components/ProgressBar.svelte';

  let evaluation = {};
  let current = 0;
  let nextSection = function() {
    if (current + 1 < atag_a.length) {
      current++;
    }
  }
  let prevSection = function() {
    if (current > 0) {
      current--;
    }
  }
  let handleSubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    evaluation = JSON.stringify(Object.fromEntries(data));
    evaluation = JSON.parse(evaluation);

    console.log(evaluation);

    nextSection();
  }

  $: progression = ((current + 1) / atag_a.length * 100);
</script>

<main>
  <ProgressBar percentage={progression}></ProgressBar>

  <form method="POST" action="" on:submit={handleSubmit}>
  {#each atag_a as { guideline, scs }, i }
    {#if current === i}
      <Guideline title="{guideline}" {scs} />
      <button on:click={prevSection}>Previous</button>
      <button type="submit">Next</button>
    {:else}
      <Guideline title="{guideline}" {scs} className="visuallyhidden" />    
    {/if}
  {/each}
  </form>
</main>

<aside>
  <pre>
    {evaluation.length}
    {evaluation}
  </pre>
</aside>

<style>
</style>