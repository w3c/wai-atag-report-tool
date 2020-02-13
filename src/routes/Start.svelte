<script>
  import Header from '../components/Header.svelte';
  import NavLink from '../components/NavLink.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
  import { evaluation } from '../stores/evaluation.js';

  let acknowledged = false;
  const acknowledge = function() { acknowledged = true; }
</script>

<Header>ATAG Report Tool</Header>

<p style="font-size: 1.5em; margin-top: -.25em">This tool guides you through the individual requirements of the <a href="https://www.w3.org/WAI/standards-guidelines/atag/">W3C Authoring Tool Accessibility Guidelines (ATAG)</a>, to help you record your evaluation of authoring tools in consistent reports.</p>
{#if evaluation.reused && !acknowledged}
<section class="doc-note-box" aria-label="Evaluation version info">
	<p><strong>Note</strong>: we have restored your previous evaluation.</p>
	<button type="button" on:click={acknowledge}>OK</button>
	<button type="button" on:click={evaluation.clearCache}>Clear and start over</button>
</section>
{/if}

<p>Authoring tools include content management systems (CMS), code editors, and other software used to create content. With this tool, you can produce a report of an authoring tool's conformance with the <a href="https://www.w3.org/TR/ATAG20/">ATAG 2.0</a> standard. The tool is designed for accessibility auditors.</p>

<p><small>Note: This tool does not automatically save the information that you enter. To save your data in a file locally on your computer, use Windows shortcut keys Ctrl+S or Mac shortcut keys ⌘S to open the Save dialog.</small></p>

<details>
	<summary><h2>About this tool</h2></summary>
	<p>Following the structure of ATAG, this tool takes you through eight <strong>Principles</strong>. Each principle has a number of <strong>Guidelines</strong>, which are further divided into <strong>Success Criteria</strong>. For each, you can select a result and note down any observations. Results include "Not checked", "Passed", "Failed", "Not applicable", and "Cannot tell".</p>
	<p>Part A (Principles A.1 to A.4) is related to the <strong>editing experience</strong> with the authoring tool. It helps ensure that content can be created by people with disabilities.</p>
	<p>Part B (Principles B.1 to B.4) is about the <strong>output</strong> of the authoring tool. It helps ensure that content editors can create accessible content, and are encouraged to do so.</p>
</details>

<details>
	<summary><h2>Tips for using this tool</h2></summary>
	<ul>
		<li>Remember to always save the information that you enter because it is not stored in the server.</li>
		<li>More information on eacg ATAG Success Criterion is in <a href="https://www.w3.org/TR/IMPLEMENTING-ATAG20/" target="_blank">Implementing ATAG 2.0</a>. Link in this tool lead you to the relevant sections of the “Implementing” document.</li>
		<li>You can go back and forth between the steps in any order. None of the fields are required.</li>
		<li>The tool provides your report as HTML (web page) and as JSON (structured data).</li>
	</ul>
</details>

<Pager label="Previous/Next Step">
  <PagerLink to="/step/1" direction="next">Get started</PagerLink>
</Pager>
