<script>
  import NavLink from "./NavLink.svelte";
  import Guideline from './Guideline.svelte';
  import Pager from './Pager.svelte';
  import PagerLink from './PagerLink.svelte';
  import atag from '../data/atag.js';
  export let id = null;
  export let className = undefined;

  $: principle = atag[id].principle || null;
  $: guidelines = atag[id].guidelines || null;

  const normalisedPrincipleId = atag[id].principle.num.replace(/\./g, '').toLowerCase();
  const linkToPrinciple = `https://www.w3.org/TR/ATAG20/#principle_${normalisedPrincipleId}`;
</script>

<style>
  h1 span {
    font-size: .4em;
    margin-bottom: .5em;
    color: var(--ocean);
    text-transform: uppercase;
    display: block;
  }
</style>

<div class={className}>
  <h1><span>Your evaluation ({id+1}/8)</span> {principle.handle}</h1>
  <p>See: <a href={linkToPrinciple} target="_blank" rel="noopener roreferrer">{principle.num} {principle.text}</a></p>
  {#each guidelines as guideline }
  <Guideline {...guideline} />
  {/each}

  <Pager label="Previous/Next Step">
    {#if id === 0}
    <PagerLink to={"/"} direction="previous">Start</PagerLink>
    {/if}
    {#if id > 0 && id < atag.length }
    <PagerLink to={`/step/${id}`} direction="previous">
      {`${atag[id-1].principle.handle}`}
    </PagerLink>
    {/if}
    {#if (id + 1) < atag.length }
    <PagerLink to={`/step/${id+2}`} direction="next">
      {`${atag[id+1].principle.handle}`}
    </PagerLink>
    {/if}
    {#if (id + 1) === atag.length }
    <PagerLink to={"/results"} direction="next">View results</PagerLink>
    {/if}
  </Pager>
</div>