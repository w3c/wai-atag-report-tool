<script>
  import ExpandCollapseAll from '../components/ExpandCollapseAll.svelte';
  import Header from '../components/Header.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
</script>

<Header>ATAG Report Tool</Header>

<aside class="box">
  <header class="box-h ">About</header>
  <div class="box-i">
This tool guides you through the individual requirements of the <a href="https://www.w3.org/WAI/standards-guidelines/atag/">W3C Authoring Tool Accessibility Guidelines (ATAG)</a>, to help you record your evaluation of authoring tools in consistent reports.
  </div>
</aside>

<p>Authoring tools include content management systems (CMS), code editors, and other software used to create web content. With this tool, you can produce a report of an authoring tool's conformance with the <a href="https://www.w3.org/TR/ATAG20/">ATAG 2.0</a> standard. The tool is designed for accessibility auditors.</p>

<p><small>Note: this evaluation happens on your computer, no data is sent to us. To save the report on your computer, use <kbd>Ctrl</kbd>/<kbd>⌘ (Command)</kbd> + <kdb>S</kdb>.</small></p>

<ExpandCollapseAll />

<details>
	<summary><h2>Structure of this tool</h2></summary>
	<p>Following the structure of ATAG, this tool takes you through eight <strong>Principles</strong>. Each principle has a number of <strong>Guidelines</strong>, which are further divided into <strong>Success Criteria</strong>. For each, you can select a result and note down any observations. Results include "Not checked", "Passed", "Failed", "Not applicable", and "Cannot tell".</p>
	<p>Part A (Principles A.1 to A.4) is related to the <strong>editing experience</strong> with the authoring tool. It helps ensure that content can be created by people with disabilities.</p>
	<p>Part B (Principles B.1 to B.4) is about the <strong>output</strong> of the authoring tool. It helps ensure that content editors can create accessible content, and are encouraged to do so.</p>
</details>

<details>
	<summary><h2>Legend of results</h2></summary>
	<p>As you go through and evaluate your tool, you will select a "result" for each criterion. Here is the legend of what those selections mean:</p>
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
	<summary><h2>Tips for using this tool</h2></summary>
	<ul>
		<li>Remember to regularly save the information that you enter because it is not stored on a server.</li>
		<li>More information on each ATAG Success Criterion is in <a href="https://www.w3.org/TR/IMPLEMENTING-ATAG20/" target="_blank">Implementing ATAG 2.0</a>. Links in this tool lead you to the relevant sections of the “Implementing” document.</li>
		<li>You can go back and forth between the pages (each is a Principle) in any order. None of the fields are required.</li>
		<li>The tool provides your report as HTML (web page) and as JSON (structured data).</li>
	</ul>
</details>

<Pager label="Previous/Next Principle">
  <PagerLink to="/your-evaluation" direction="next">Your evaluation</PagerLink>
</Pager>
