<script>
  import { navigate, Router, Link } from 'svelte-routing';
  import { evaluation } from '../stores/evaluation.js';
  import { importEvaluation } from '../utils/importEvaluation.js';
  import MoreInfo from './MoreInfo.svelte';

  let fresh = evaluation.isFresh();
  let startedNew = false;

  function startNew() {
    navigate('/your-evaluation', { replace: false });
    startedNew = true;
  }

  function toOverview() {
    navigate('/report', { replace: false });
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

  $: evaluatedItems = $evaluation && $evaluation.evaluationData && Object.keys($evaluation.evaluationData).length > 0 ? Object.values($evaluation.evaluationData).filter(item => item.evaluated === true) : [];
</script>

<aside>
  {#if fresh && !startedNew}
   <h2>Your evaluation</h2>
   <p>Welcome to the ATAG Report Tool.</p>
   <button class="button" on:click={startNew}>Start new evaluation</button>
   <input type="file" id="import-evaluation" on:change={importEvaluation} class="visuallyhidden" accept="application/json"/>
   <label for="import-evaluation" class="button button-secondary">Import evaluation</label>
  {:else if !(evaluatedItems.length > 0) }
  <h2>Your evaluation</h2>
  <Router>
    <p>You can <Link to="your-evaluation">add information</Link> about your report, or start evaluating straight away in <Link to="step/1">Step 1</Link>.</p>
  </Router>
  {:else}
    <h2>
      {#if $evaluation["meta"]["name"]["value"]}
      <small>Evaluating </small>{$evaluation["meta"]["name"]["value"]}
      }
      {:else}
      Your evaluation
      {/if}
    </h2>
    <p>Evaluated <strong>{evaluatedItems.length}</strong> out of <strong>{Object.values($evaluation.evaluationData).length}</strong> success criteria.</p>
    <button class="button" on:click={toOverview}>View report</button>
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
  @media (min-width: 60em) {
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
  .button + .button,
  .button + input + .button /* the file upload button */ {
    margin-top: .25em;
  }
  input[type="file"]:focus + label {
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-offset .2s linear;
    border-color: var(--w3c-blue);
    outline-color: var(--w3c-blue);
  }
 </style>