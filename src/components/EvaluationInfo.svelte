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

  function importEvaluation(event) {
    let files = event.target.files;

    for (var i = 0, file; file = files[i]; i++) {
      if (!file.type.match('application/json')) {
        return
      }

      var reader = new FileReader();

      reader.onload = function(event) {
        var converted = JSON.parse(event.target.result);

        // simplistic check
        if (converted.evaluationData) {
          evaluation.update(evaluation => converted);
          if (converted.meta.name.value) {
            alert(`Evaluation “${converted.meta.name.value}” loaded`);
          } else {
            alert('Evalution loaded');
          }
          startedNew = true;
        } else {
          alert('No data found / invalid import');
        }
      }

      reader.readAsText(file);
    }
  }

  evaluation.subscribe(value => {
    fresh = evaluation.isFresh();
  });

  $: evaluatedItems = $evaluation ? Object.values($evaluation.evaluationData).filter(item => item.evaluated === true) : [];
</script>

<aside>
  {#if fresh && !startedNew}
   <h2>Your evaluation</h2>
   <p>No existing evaluation found.</p>
   <button class="button" on:click={startNew}>New evaluation</button>
   <input type="file" id="import-evaluation" on:change={importEvaluation} class="visuallyhidden" accept="application/json"/>
   <label for="import-evaluation" class="button button-secondary">Import</label>
  {:else if !$evaluation["meta"]["name"]["value"]}
  <h2>Your evaluation</h2>
  <p>Set up information about your evaluation.</p>
  {:else}
    <h2>
      <small>Evaluating </small>{$evaluation["meta"]["name"]["value"]}
    </h2>
    <p>Evaluated <strong>{evaluatedItems.length}</strong> out of <strong>{Object.values($evaluation.evaluationData).length}</strong> success criteria.</p>
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
  input[type="file"]:focus + label {
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-offset .2s linear;
    border-color: var(--w3c-blue);
    outline-color: var(--w3c-blue);
  }
 </style>