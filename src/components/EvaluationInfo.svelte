<script>
  import { navigate } from 'svelte-routing';
  import { evaluation } from '../stores/evaluation.js';
  import MoreInfo from './MoreInfo.svelte';

  let fresh = evaluation.isFresh();
  let startedNew = false;

  function startNew() {
    navigate('/your-evaluation', { replace: false });
    startedNew = true;
  }

  function toOverview() {
    navigate('/results', { replace: false });
  }

  function clear() {
    if (window.confirm("This will clear the current evaluation and start a new one. Are you sure that's what you'd like to do?")) {
      evaluation.clearCache();
      navigate('/', { replace: true });    
    }
  }

  evaluation.subscribe(value => {
    fresh = evaluation.isFresh();
  });

  $: evaluatedItems = $evaluation ? Object.values($evaluation).filter(item => item.evaluated === true) : [];
</script>

<aside>
  {#if fresh && !startedNew}
   <h2>Your evaluation</h2>
   <p>No existing evaluation found.  <MoreInfo label="On import functionality">
      <p><small>Editor's note: import functionality is not yet built, it is planned for the next iteration. This is why the button below is disabled.</small></p>
    </MoreInfo></p>
   <button class="button" on:click={startNew}>New evaluation</button> 
   <button class="button button-secondary" disabled>Import</button>
  {:else if !$evaluation["evaluationMeta"]["name"]["value"]}
  <h2>Your evaluation</h2>
  <p>Set up information about your evaluation.</p>
  {:else}
    <h2>
      <small>Evaluating </small>{$evaluation["evaluationMeta"]["name"]["value"]}
    </h2>
    <p>Evaluated <strong>{evaluatedItems.length}</strong> out of <strong>{Object.values($evaluation).length}</strong> success criteria. <MoreInfo label="More info">
      <p><small>Editor's note: we could also display a pie or bar chart visualisation of progress.</small></p>
    </MoreInfo></p>
    <button class="button" on:click={toOverview}>Save / Overview</button>
    <button class="button button-secondary" on:click={clear}>Clear</button>
  {/if}
</aside>

<style>
  aside {
    background: var(--footer-grey);box-shadow: 0px 2px 8px -7px #000;padding: 1em;border: 1px solid var(--line-grey);
    grid-column: 2 / 4;
    align-self: start;
    margin-bottom: 2em;
  }
  @media (min-width: 50em) {
    aside {
      position: sticky;
      top: 1em;
      }
  }
  h2 {
    font-weight: bold;font-size: 1em;margin: 0;
  }
  h2 small {
    display: block;font-weight: normal;color: var(--dk-blue);
  }
  .button + .button {
    margin-top: .25em;
  }
</style>