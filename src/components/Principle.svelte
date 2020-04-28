<script>
  import { onMount } from 'svelte';
  import Header from './Header.svelte';
  import HeaderSub from './HeaderSub.svelte';
  import Guideline from './Guideline.svelte';
  import Pager from './Pager.svelte';
  import PagerLink from './PagerLink.svelte';
  import atag from '../data/atag.js';
  import { currentPage } from '../stores/currentPage.js';

  export let id = null;
  export let className = undefined;

  $: principle = atag[id].principle || null;
  $: guidelines = atag[id].guidelines || null;

  onMount(() => {
    currentPage.update( currentPage => 'Evaluation' );
  });

  const normalisedPrincipleId = atag[id].principle.num.replace(/\./g, '').toLowerCase();
  const linkToPrinciple = `https://www.w3.org/TR/ATAG20/#principle_${normalisedPrincipleId}`;
</script>

<div class={className}>
  <Header>
    <HeaderSub>
      ATAG Report Tool (<span class="visuallyhidden">Principle </span>{id+1}<span aria-hidden="true">/</span><span class="visuallyhidden"> of </span>8)
    </HeaderSub>
    {principle.num}: {principle.handle}
  </Header>

  <p>More details: <a href={linkToPrinciple} target="_blank" rel="noopener roreferrer">{principle.num} {principle.text}</a></p>
  
  {#each guidelines as guideline }
  <Guideline {...guideline} />
  {/each}

  <Pager label="Previous/Next Principle">
    {#if id === 0}
    <PagerLink to={"/start"} direction="previous">Start</PagerLink>
    {/if}
    {#if id > 0 && id < atag.length }
    <PagerLink to={`/principle/${id}`} direction="previous">
      {atag[id-1].principle.num}
    </PagerLink>
    {/if}
    {#if (id + 1) < atag.length }
    <PagerLink to={`/principle/${id+2}`} direction="next">
      {atag[id+1].principle.num}
    </PagerLink>
    {/if}
    {#if (id + 1) === atag.length }
    <PagerLink to={"/report"} direction="next">View report</PagerLink>
    {/if}
  </Pager>
</div>
