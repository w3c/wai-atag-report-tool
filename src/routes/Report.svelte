<script>
  import marked from 'marked';
  import { evaluation } from '../stores/evaluation.js';
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';

  function createDownload(evaluation) {
    let blob = new Blob([JSON.stringify(evaluation)]);
    return url
  }

  $: jsonDownload = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify($evaluation))}`;
</script>

<Header>
  <HeaderSub>ATAG Report Tool</HeaderSub>
  Report
</Header>
<p>Thanks for using this tool. Your evaluation is displayed in full below.</p>
<p><a href={jsonDownload} class="button button-secondary">Download evaluation (JSON)</a></p>
<dl>
  {#if $evaluation["meta"]["name"] && $evaluation["meta"]["name"]["value"]}
  <dt>Name</dt>
  <dd>{$evaluation["meta"]["name"]["value"]}</dd>
  {/if}
  {#if $evaluation["meta"]["website"] && $evaluation["meta"]["website"]["value"]}
  <dt>Website</dt>
  <dd>{$evaluation["meta"]["website"]["value"]}</dd>
  {/if}
  {#if $evaluation["meta"]["evaluatorName"] && $evaluation["meta"]["evaluatorName"]["value"]}
  <dt>Evaluator</dt>
  <dd>{$evaluation["meta"]["evaluatorName"]["value"]}</dd>
  {/if}
  {#if $evaluation["meta"]["evaluatorOrg"] && $evaluation["meta"]["evaluatorOrg"]["value"]}
  <dt>Organisation</dt>
  <dd>{$evaluation["meta"]["evaluatorOrg"]["value"]}</dd>
  {/if}
  {#if $evaluation["meta"]["createdWith"] && $evaluation["meta"]["createdWith"]["value"]}
  <dt>Created with ATAG Report Tool version</dt>
  <dd>{$evaluation["meta"]["createdWith"]["value"]}</dd>
  {/if}
</dl>
<table>
	<thead>
		<tr>
			<th>Success Criterion</th>
			<th>Result</th>
			<th>Observations</th>
		</tr>
	</thead>
	<tbody>
	{#each Object.values($evaluation.evaluationData) as result}
	<tr>
		<td id={`criterion-${result.num}`}>{result.num}: {result.handle}</td>
		<td id={`result-${result.num}`}>{result.result ? result.result : 'No result'}</td>
		<td id={`observation-${result.num}`}>
      {#if result.observations}
        {@html marked(result.observations)}
      {:else}
        No observations
      {/if}
    </td>
	</tr>
	{/each}
	</tbody>
</table>
