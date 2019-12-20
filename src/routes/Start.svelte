<script>
  import NavLink from '../components/NavLink.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
</script>

<h2>Principles, guidelines and success criteria</h2>
<p>This process will take you through 8 steps, the <strong>Principles</strong>. Within these, there are <strong>Guidelines</strong>, which break down into <strong>Success Criteria</strong>.</p>
<p>For each Success Criterion, you can select whether the authoring tool you are evaluation meets it or not.</p>
<h2>Editor experience vs output</h2>
<p>Guidelines 1-4 are related to the tool itself: the back-end of your CMS, the <strong>editing experience</strong>. Can it be used by people with disabilities?</p>
<p>Guideliens 4-8 are about the <strong>output</strong> of the tool: does it encourage content editors to create accessible content, and is accessible content creation possible at all?</p>

<Pager label="Previous/Next Step">
  <PagerLink to="/step/1" direction="next">Get started</PagerLink>
</Pager>