<script>
  import { onMount } from 'svelte';
  import { Link } from "svelte-routing";
  import marked from 'marked';
  import { evaluation } from '../stores/evaluation.js';
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import { currentPage } from '../stores/currentPage.js';

  onMount(() => {
    currentPage.update( currentPage => 'Report' );
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
      <th></th>
		</tr>
	</thead>
	<tbody>
	{#each Object.values($evaluation.evaluationData) as result}
	<tr id={`criterion-${result.num.replace(/\./g, '').toLowerCase()}`}>
		<td>{result.num}: {result.handle}</td>
		<td>{result.result ? result.result : 'No result'}</td>
		<td>
      {#if result.observations}
        {@html marked(result.observations)}
      {:else}
      {/if}
    </td>
    <td>
      <Link to={linkToSC(result.num)}>
        <span class="visuallyhidden">Edit {result.num}</span>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      </Link>
    </td>
	</tr>
	{/each}
	</tbody>
</table>

<style>
  tr:target {
    outline: 2px solid black;
  }
</style>
