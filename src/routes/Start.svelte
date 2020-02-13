<script>
  import Header from '../components/Header.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
  import { evaluation } from '../stores/evaluation.js';

  let acknowledged = false;
  const acknowledge = function() { acknowledged = true; }
</script>

<Header>ATAG Report Tool</Header>

<p style="font-size: 1.5em; margin-top: -.25em">Manually check authoring tools against the <a href="https://www.w3.org/TR/ATAG20/">Authoring Tool Accessibility Guidelines</a> (ATAG) and report on the results.</p>
{#if evaluation.reused && !acknowledged}
<section class="doc-note-box" aria-label="Evaluation version info">
	<p><strong>Note</strong>: we have restored your previous evaluation.</p>
	<button type="button" on:click={acknowledge}>OK</button>
	<button type="button" on:click={evaluation.clearCache}>Clear and start over</button>
</section>
{/if}

<p>With this tool, you can produce a report of an authoring tool's conformance with the ATAG standard. The tool is designed for accessibility auditors and  requires a working knowledge of <a href="https://www.w3.org/TR/ATAG20/">ATAG 2.0</a>.</p>

<details>
	<summary><h2>What to expect</h2></summary>
	<p>Following the structure of ATAG, this tool takes you through eight  <strong>Principles</strong>. Each principle has a number of <strong>Guidelines</strong>, which break down into <strong>Success Criteria</strong>. For each, you can select a result and note down any observations.</p>
	<p>Part A (Principles A.1 to A.4) is related to the authoring tool's <strong>editing experience</strong>. It helps ensure that content can be created by people with disabilities.</p>
	<p>Part B (Principles B.1 to B.4) is about the <strong>output</strong> of the tool. It helps ensure that content editors can create accessible content, and are  encouraged to do so.</p>
	<p><small>Note: this evaluation happens on your computer, no data is sent to us. To save the results on your computer, use <kbd>Ctrl</kbd>/<kbd>⌘ (Command)</kbd> + <kdb>S</kdb>.</small></p>
</details>

<details>
	<summary><h2>Legend of results</h2></summary>
	<p>This is what the possible results mean:</p>
	<dl>
		<dt>Not checked</dt>
		<dd>You did not check this success criterion</dd>
		<dt>Pass</dt>
		<dd>This success criterion is met.</dd>
		<dt>Failed</dt>
		<dd>This success criterion is not met.</dd>
		<dt>Not applicable</dt>
		<dd>This success criterion relates to a feature the authoring tool does not have, it does not apply.</dd>
		<dt>Cannot tell</dt>
		<dd>It is unclear whether the success criterion is met.</dd>
	</dl>
</details>

<details>
	<summary><h2>Tips for usage</h2></summary>
	<ul>
		<li>Find more information on ATAG Success Criteria (SCs) in <a href="https://www.w3.org/TR/IMPLEMENTING-ATAG20/" target="_blank">Implementing ATAG 2.0</a>. You will find a link to the relevant “Implementing” section listed with each SC.</li>
		<li>You can go back and forth between the steps in any order.</li>
		<li>None of the fields are required.</li>
		<li>The tool provides your report as HTML (web page) and as JSON (structured data).</li>
	</ul>
</details>

<Pager label="Previous/Next Step">
  <PagerLink to="/step/1" direction="next">Get started</PagerLink>
</Pager>
