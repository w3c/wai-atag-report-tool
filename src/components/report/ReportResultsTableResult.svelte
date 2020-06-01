<script>
  import { Link } from "svelte-routing";
  import marked from 'marked';
  import { getLinkToSC } from '../../utils/getLinkToSC.js';

  export let result;
  export let conformanceTarget = "AA";

  const isMultiLevelSC = result.level === 'A, AA, AAA';
  const isInConformanceTarget = conformanceTarget.length < result.level.length;
  const isEvaluated = result.evaluated === true;
  const rowId = `criterion-${result.num.replace(/\./g, '').toLowerCase()}`;
</script>

{#if isInConformanceTarget && !isMultiLevelSC && !isEvaluated}
  <tr class="result-row" id={rowId}>
    <td colspan="4">{result.num} was not in scope for this report</td>
  </tr>
{:else}
  <tr class="result-row" id={rowId}>
    <td class="results-label-sc">{result.num}: {result.handle}</td>
    <td><span class="results-label-mobile">Result: </span>{result.result && result.result !== '--' ? result.result : 'No result'}</td>
    <td>
      {#if result.observations}
        <span class="results-label-mobile">Observations: </span>{@html marked(result.observations)}
      {/if}
    </td>
    <td>
      <Link to={getLinkToSC(result.num)}>
        <span class="visuallyhidden">Edit {result.num}</span>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      </Link>
    </td>
  </tr>
{/if}

<style>
  .result-row {
    margin-bottom: 1em;
    border-bottom: 1px solid var(--cloudy);
  }
    .result-row td {
      display: block;
      border-style: none;
    }
  .results-label-sc {
    font-weight: bold;
  }
  @media (min-width: 60em) {
    .results-label-mobile {
      display: none;
    }
    .results-label-sc {
      font-weight: normal;
    }
    .result-row {
      border-bottom: 0;
    }
    .result-row td {
      display: table-cell;
      border: 1px solid var(--cloudy);
    }
  }
</style>