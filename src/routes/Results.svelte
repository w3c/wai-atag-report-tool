<script>
  import { evaluation } from '../stores/evaluation.js';
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import NavLink from '../components/NavLink.svelte';

  $: jsonDownload = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(Object.values($evaluation)))}`;
</script>

<Header>
  <HeaderSub>ATAG Report Tool</HeaderSub>
  Results
</Header>
<p>Thanks for using this tool. Your evaluation is displayed in full below. You can also <a href={jsonDownload} download="data.json">Download JSON</a>.</p>

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
		<td>{result.observations ? result.observations : 'No observations'}</td>
	</tr>
	{/each}
	</tbody>
</table>
