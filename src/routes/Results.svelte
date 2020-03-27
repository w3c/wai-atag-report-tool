<script>
  import marked from 'marked';
  import { evaluation } from '../stores/evaluation.js';
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';

  $: jsonDownload = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(Object.values($evaluation)))}`;
</script>

<Header>
  <HeaderSub>ATAG Report Tool</HeaderSub>
  Results
</Header>
<p>Thanks for using this tool. Your evaluation is displayed in full below.</p>
<p><a href={jsonDownload} class="button button-secondary" download="evaluation.json">Download evaluation (JSON)</a></p>
<dl>
  {#if $evaluation["evaluationMeta"]["name"]["value"]}
  <dt>Name</dt>
  <dd>{$evaluation["evaluationMeta"]["name"]["value"]}</dd>
  {/if}
  {#if $evaluation["evaluationMeta"]["evaluatorName"]["value"]}
  <dt>Evaluator</dt>
  <dd>{$evaluation["evaluationMeta"]["evaluatorName"]["value"]}</dd>
  {/if}
  {#if $evaluation["evaluationMeta"]["evaluatorOrg"]["value"]}
  <dt>Organisation</dt>
  <dd>{$evaluation["evaluationMeta"]["evaluatorOrg"]["value"]}</dd>
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
	{#each Object.values($evaluation) as result}
	<tr>
		<td>{result.num}: {result.handle}</td>
		<td>{result.result ? result.result : 'No result'}</td>
		<td>{#if result.observations}
    {@html marked(result.observations)}
    {:else}
    No observations
  {/if}</td>
	</tr>
	{/each}
	</tbody>
</table>
