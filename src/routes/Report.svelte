<script>
  import { onMount } from 'svelte';
  import { Link } from "svelte-routing";
  import marked from 'marked';
  import { evaluation } from '../stores/evaluation.js';
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import { currentPage } from '../stores/currentPage.js';
  import { getEvaluatedItems } from '../utils/getEvaluatedItems.js';

  onMount(() => {
    currentPage.update( currentPage => 'Report' );
    
    // by setting location.hash explictly, we ensure :target 
    // selectors will work as expected
    if (location.hash.length > 0) {
      location.hash = location.hash;
    }
  });

  function createDownload(evaluation) {
    let blob = new Blob([JSON.stringify(evaluation)]);
    return url
  }

  function linkToSC(num) {
    const principle = num.substring(0, 1) === 'A' ? num.substring(2, 3) : parseInt(num.substring(2, 3), 10) + 4;
    const criterion = num.replace(/\./g, '').toLowerCase();

    return `/principle/${principle}#${criterion}`;
  }

  $: jsonDownload = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify($evaluation))}`;
  $: evaluatedItems = getEvaluatedItems($evaluation);
  $: evaluatedItemsByResult = {
      passed: evaluatedItems.filter(item => item.result === 'Passed'),
      failed: evaluatedItems.filter(item => item.result === 'Failed'),
      cannottell: evaluatedItems.filter(item => item.result === 'Cannot tell'),
      na: evaluatedItems.filter(item => item.result === 'Not applicable'),
      notchecked: evaluatedItems.filter(item => item.result === 'Not checked')
  };
</script>

<Header>
  <HeaderSub>ATAG Report Tool</HeaderSub>
  Report
</Header>
<p><a href={jsonDownload} download="report.json" class="button button-secondary">Download evaluation (JSON)</a></p>
<h2 class="report-header">
  General
  <Link to="/start">
    <span class="visuallyhidden">Edit details</span>
    <svg aria-hidden="true" focusable="false"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
  </Link>
</h2>
<dl>
  <dt>Tool Name 
  </dt>
  {#if $evaluation["meta"]["name"] && $evaluation["meta"]["name"]["value"]}
  <dd>{$evaluation["meta"]["name"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Website</dt>
  {#if $evaluation["meta"]["website"] && $evaluation["meta"]["website"]["value"]}
  <dd>{$evaluation["meta"]["website"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Conformance Target</dt>
  {#if $evaluation["meta"]["conformanceTarget"] && $evaluation["meta"]["conformanceTarget"]["value"]}
  <dd>Level {$evaluation["meta"]["conformanceTarget"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Evaluator</dt>
  {#if $evaluation["meta"]["evaluatorName"] && $evaluation["meta"]["evaluatorName"]["value"]}
  <dd>{$evaluation["meta"]["evaluatorName"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Organization</dt>
  {#if $evaluation["meta"]["evaluatorOrg"] && $evaluation["meta"]["evaluatorOrg"]["value"]}
  <dd>{$evaluation["meta"]["evaluatorOrg"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
</dl>

<h2 id="results">Results</h2>
<h3>Summary</h3>
<p>This report has results for {evaluatedItems.length} out of {Object.values($evaluation.evaluationData).length} Success Criteria.</p>
<ul>
  {#if evaluatedItemsByResult.passed.length > 0 }
  <li>Passed: 
    {#each evaluatedItemsByResult.passed as item}
    <a href={linkToSC(item.num)} class="criterion__ref">{item.num}</a>
    {/each}
  </li>
  {/if}
  {#if evaluatedItemsByResult.failed.length > 0 }
  <li>Failed:
    {#each evaluatedItemsByResult.failed as item}
    <a href={linkToSC(item.num)} class="criterion__ref">{item.num}</a>
    {/each}
  </li>
  {/if}
  {#if evaluatedItemsByResult.cannottell.length > 0 }
  <li>Cannot tell:
    {#each evaluatedItemsByResult.cannottell as item}
    <a href={linkToSC(item.num)} class="criterion__ref">{item.num}</a>
    {/each}
  </li>
  {/if}
  {#if evaluatedItemsByResult.na.length > 0 }
  <li>Not applicable:
    {#each evaluatedItemsByResult.na as item}
    <a href={linkToSC(item.num)} class="criterion__ref">{item.num}</a>
    {/each}
  </li>
  {/if}
  {#if evaluatedItemsByResult.notchecked.length > 0 }
  <li>Not checked: 
    {#each evaluatedItemsByResult.notchecked as item}
    <a href={linkToSC(item.num)} class="criterion__ref">{item.num}</a>
    {/each}
  {/if}
</ul>
<h3>All results</h3>
<table aria-labelledby="results">
	<thead>
		<tr>
			<th>Success Criterion</th>
			<th>Result</th>
			<th>Observations</th>
      <th></th>
		</tr>
	</thead>
	<tbody>
	{#each Object.values($evaluation.evaluationData) as result}
  {#if ($evaluation.meta.conformanceTarget.value.length < result.level.length) && result.level !== 'A, AA, AAA' }
  <tr>
    <td colspan="4">{$evaluation.meta.conformanceTarget.value} -- {result.level} -- {result.num} was not in scope for this report</td>
  </tr>
  {:else}
	<tr id={`criterion-${result.num.replace(/\./g, '').toLowerCase()}`}>
		<td class="results-label-sc">{result.num}: {result.handle}</td>
		<td><span class="results-label-mobile">Result: </span>{result.result ? result.result : 'No result'}</td>
		<td>
      {#if result.observations}
        <span class="results-label-mobile">Observations: </span>{@html marked(result.observations)}
      {/if}
    </td>
    <td>
      <Link to={linkToSC(result.num)}>
        <span class="visuallyhidden">Edit {result.num}</span>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      </Link>
    </td>
	</tr>
  {/if}
	{/each}
	</tbody>
</table>

{#if $evaluation["meta"]["createdWith"] && $evaluation["meta"]["createdWith"]["value"]}
<p><small>Created with ATAG Report Tool version {$evaluation["meta"]["createdWith"]["value"]}</p>
{/if}


<style>
  .report-header {
    display: flex;
  }
    :global(.report-header a) {
      margin-left: auto;
    }
  dt {
    grid-column: 1 / 2;
    margin-top: 0;
    font-weight: normal;
  }
  dt:after {
    content: ':';
  }
  dd {
    font-weight: bold;
    margin-left: 0;
    margin-bottom: 1em;
  }
  @media (min-width: 40em) {
    dl {
      display: grid;
      grid-template-columns: auto 2fr;
      gap: .5em 3em;
    }
    dd {
      margin-bottom: 0;
    }
  }
  table {
    width: 100%;
  }
  tr:target {
    outline: 2px solid var(--gold);
  }
  thead {
    position: sticky;
    top: 0;
  }
  thead th {
    position: absolute;
    left: -9999em;
    top: -9999em;
  }
  tbody td {
    display: block;
    border-style: none;
  }
  tbody tr {
    margin-bottom: 1em;
    border-bottom: 1px solid var(--cloudy);
  }
  .results-label-sc {
    font-weight: bold;
  }
  @media (min-width: 60em) {
    thead th {
      position: static;
    }
    tbody td {
      display: table-cell;
      border: 1px solid var(--cloudy);
    }
    tbody tr {
      border-bottom: 0;
    }
    .results-label-mobile {
      display: none;
    }
    .results-label-sc {
      font-weight: normal;
    }
  }
.criterion__ref {
  padding: .25em 1em;
  border-radius: 1em;
  margin-left: .75em;
  background-color: var(--cloudy-subtle);
  border: 1px solid var(--cloudy-subtle);
  font-size: 70%;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.criterion__ref:hover {
  background-color: transparent;
  border-color: var(--ocean);
}
</style>
