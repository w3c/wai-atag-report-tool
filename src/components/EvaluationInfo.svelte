<script>
  import { navigate } from 'svelte-routing';
  import { evaluation } from '../stores/evaluation.js';
  import MoreInfo from './MoreInfo.svelte';

  let fresh = evaluation.isFresh();
  let startedNew = false;

  function startNew() {
    navigate('/step/1', { replace: false });
    startedNew = true;
  }

  function toOverview() {
    navigate('/results', { replace: false });
  }

  function clear() {
    evaluation.clearCache();
    navigate('/', { replace: true });    
  }

  evaluation.subscribe(value => {
    fresh = evaluation.isFresh();
  });

  $: evaluatedItems = Object.values($evaluation).filter(item => item.evaluated === true);
</script>

<div class="evaluation-info">
  {#if fresh && !startedNew}
   <h2>Your evaluation</h2>
   <p>No existing evaluation found.</p>
   <button class="button" on:click={startNew}>New evaluation</button> 
   <button class="button button-secondary" disabled>Import</button>
  {:else}
    <h2>
      <small>Evaluating </small>PowerCMS 2.5 <MoreInfo label="What is this title?">
      <p><small>Editor's note: title is fixed at the moment. I think we could have a page before the first criteria that prompts for a name and some other meta data.</small></p>
    </MoreInfo>
    </h2>
    <p>Evaluated <strong>{evaluatedItems.length}</strong> out of <strong>{Object.values($evaluation).length}</strong> success criteria. <MoreInfo label="More info">
      <p><small>Editor's note: we could also display a pie or bar chart visualisation of progress.</small></p>
    </MoreInfo></p>
    <button class="button" on:click={toOverview}>Save / Overview</button>
    <button class="button button-secondary" on:click={clear}>Clear</button>
  {/if}
</div>

<style>
  div {
    background: var(--footer-grey);box-shadow: 0px 2px 8px -7px #000;padding: 1em;border: 1px solid var(--line-grey);
    margin-bottom: 2em;
  }
  h2 {
    font-weight: bold;font-size: 1em;margin: 0;
  }
  h2 small {
    display: block;font-weight: normal;color: var(--dk-blue);
  }
</style>