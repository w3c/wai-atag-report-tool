<script>
  import { navigate } from 'svelte-routing';
  import { evaluation } from '../stores/evaluation.js';

  let fresh = evaluation.isFresh();
  let startedNew = false;

  function startNew() {
    navigate('/step/1', { replace: false });
    startedNew = true;
  }

  evaluation.subscribe(value => {
    fresh = evaluation.isFresh();
  });
</script>

<aside>
  {#if fresh && !startedNew}
   <h2>Your evaluation</h2>
   <p>No existing evaluation found.</p>
   <button class="button" on:click={startNew}>Start new evaluation</button> 
   <button class="button button-secondary" disabled>Import from JSON</button>
  {:else}
    <h2>
      <small>Evaluating </small>PowerCMS 2.5
    </h2>
    <p>Evaluated <strong>4</strong> out of <strong>{Object.values($evaluation).length}</strong> success criteria.</p>
    <button class="button">Save / Overview</button>
    <button class="button button-secondary" on:click={evaluation.clearCache}>Clear</button>
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
</style>