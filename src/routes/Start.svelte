<script>
  import NavLink from '../components/NavLink.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
  import { evaluation } from '../stores/evaluation.js';

  let acknowledged = false;
  const acknowledge = function() { acknowledged = true; }
</script>
<h1>Check your authoring tool's accessibility</h1>
<p style="font-size: 1.2em">With this tool, you can find out how accessible your authoring tool (CMS, LMS, wiki, form generator etc) is, by checking it manually against the <a href="https://www.w3.org/TR/ATAG20/">Authoring Tool Accessibility Guidelines</a> (ATAG).</p>
{#if evaluation.reused && !acknowledged}
<section class="doc-note-box">
	<p><strong>Note</strong>: we have restored your previous evaluation.</p>
	<button type="button" on:click={acknowledge}>OK</button>
	<button type="button" on:click={evaluation.clearCache}>Clear and start over</button>
</section>
{/if}
<h2>Principles, guidelines and success criteria</h2>
<p>This process will take you through 8 steps, the <strong>Principles</strong>. Within these, there are <strong>Guidelines</strong>, which break down into <strong>Success Criteria</strong>.</p>
<p>For each Success Criterion, you can select whether the authoring tool you are evaluation meets it or not.</p>
<h2>Editor experience vs output</h2>
<p>Guidelines 1 to 4 are related to the tool itself: the back-end of your CMS, the <strong>editing experience</strong>. Can it be used by people with disabilities?</p>
<p>Guidelines 4 to 8 are about the <strong>output</strong> of the tool: does it encourage content editors to create accessible content, and is accessible content creation possible at all?</p>

<Pager label="Previous/Next Step">
  <PagerLink to="/step/1" direction="next">Get started</PagerLink>
</Pager>