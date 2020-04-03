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

<h2>About your evaluation</h2>

<div class="field">
  <label for="evaluation-meta-name">Name of authoring tool</label>
  <input type="text" bind:value={$evaluation["meta"]["name"]["value"]} id="evaluation-meta-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>

<div class="field">
  <label for="evaluation-meta-website">Website</label>
  <input type="url" placeholder="https://" bind:value={$evaluation["meta"]["website"]["value"]} id="evaluation-meta-website" on:change={() =>  evaluation.updateCache($evaluation)} />
</div>


<h2>About you</h2>

<div class="field">
  <label for="evaluation-meta-your-name">Your name</label>
  <input type="text" bind:value={$evaluation["meta"]["evaluatorName"]["value"]} id="evaluation-meta-your-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>

<div class="field">
  <label for="evaluation-meta-org-name">Your organisation</label>
  <input type="text" bind:value={$evaluation["meta"]["evaluatorOrg"]["value"]} id="evaluation-meta-org-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>

<Pager label="Previous/Next Step">
  <PagerLink to="/step/1" direction="next">Step 1</PagerLink>
</Pager>
