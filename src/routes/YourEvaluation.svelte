<script>
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
  import { evaluation } from '../stores/evaluation.js';
</script>

<Header>
  <HeaderSub>
    ATAG Report Tool
  </HeaderSub>
  Your Evaluation
</Header>

<p>On this page, you can set up your evaluation.</p>

<h2>About the authoring tool</h2>

{#if $evaluation["meta"]["name"]}
<div class="field">
  <label for="evaluation-meta-name">Name</label>
  <input type="text" bind:value={$evaluation["meta"]["name"]["value"]} id="evaluation-meta-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>
{/if}

{#if $evaluation["meta"]["website"]}
<div class="field">
  <label for="evaluation-meta-website">Website</label>
  <input type="url" bind:value={$evaluation["meta"]["website"]["value"]} id="evaluation-meta-website" on:change={() =>  evaluation.updateCache($evaluation)} />
</div>
{/if}


<h2>About the evaluation</h2>

{#if $evaluation["meta"]["evaluatorName"]}
<div class="field">
  <label for="evaluation-meta-your-name">Name of evaluator</label>
  <input type="text" bind:value={$evaluation["meta"]["evaluatorName"]["value"]} id="evaluation-meta-your-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>
{/if}

{#if $evaluation["meta"]["evaluatorOrg"]}
<div class="field">
  <label for="evaluation-meta-org-name">Organization of evaluator</label>
  <input type="text" bind:value={$evaluation["meta"]["evaluatorOrg"]["value"]} id="evaluation-meta-org-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>
{/if}

<Pager label="Previous/Next Principle">
  <PagerLink to="/principle/1" direction="next">Principle 1: Accessibility Guidelines</PagerLink>
</Pager>
