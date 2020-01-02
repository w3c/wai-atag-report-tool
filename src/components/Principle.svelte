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
</script>

<div class={className}>
  <h2>{principle.description}</h2>
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