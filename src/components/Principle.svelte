<script>
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import Guideline from "./Guideline.svelte";
  import LinkToGuidance from "./LinkToGuidance.svelte";
  import Pager from "./Pager.svelte";
  import PagerLink from "./PagerLink.svelte";
  import atag from "../data/atag.js";
  import { currentPage } from "../stores/currentPage.js";

  export let id = null;
  export let className = undefined;

  $: principle = atag[id].principle || null;
  $: guidelines = atag[id].guidelines || null;

  onMount(() => {
    currentPage.update(currentPage => "Evaluation");

    // by setting location.hash explictly, we ensure :target
    // selectors will work as expected
    if (location.hash.length > 0) {
      location.hash = location.hash;
    }
  });

  const normalisedPrincipleId = atag[id].principle.num
    .replace(/\./g, "")
    .toLowerCase();
  const linkToPrinciple = `https://www.w3.org/TR/ATAG20/#principle_${normalisedPrincipleId}`;
</script>

<style>
  :global(.criterion:target) {
    outline: 2px solid var(--gold);
  }
</style>

<svelte:head>
  <title>{principle.num} | ATAG Report Tool | W3C WAI</title>
</svelte:head>

<div class={className}>
  <Header>{principle.num}: {principle.handle}</Header>

  <p>
    <LinkToGuidance
      href={linkToPrinciple}
      target="_blank"
      rel="noopener roreferrer">
      {principle.num} {principle.text}
    </LinkToGuidance>
  </p>

  {#each guidelines as guideline, i (guideline.id)}
    <Guideline {...guideline} />
  {/each}

  <Pager label="Previous/Next Principle">
    {#if id === 0}
      <PagerLink to={'/start'} direction="previous">Start</PagerLink>
    {/if}
    {#if id > 0 && id < atag.length}
      <PagerLink to={`/principle/${id}`} direction="previous">
        {atag[id - 1].principle.num}
      </PagerLink>
    {/if}
    {#if id + 1 < atag.length}
      <PagerLink to={`/principle/${id + 2}`} direction="next">
        {atag[id + 1].principle.num}
      </PagerLink>
    {/if}
    {#if id + 1 === atag.length}
      <PagerLink to={'/report'} direction="next">View report</PagerLink>
    {/if}
  </Pager>
</div>
