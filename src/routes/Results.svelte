<script>
  import { evaluation } from '../stores/evaluation.js';
  import NavLink from '../components/NavLink.svelte';

  $: jsonDownload = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify($evaluation))}`;
</script>

<h2>Results</h2>
<p>Thanks for using this tool.</p>
<ul>
  <li><a href={jsonDownload} download="data.json">Download JSON</a></li>
</ul>

{JSON.stringify($evaluation)}
<NavLink to="/step/1">Start over</NavLink>
