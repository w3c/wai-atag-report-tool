<script>
  import LinkToSC from '../LinkToSC.svelte';
  import { evaluation } from "../../stores/evaluation.js";
  import { getLinkToSC } from '../../utils/getLinkToSC.js';
  import { getEvaluatedItems } from '../../utils/getEvaluatedItems.js';

  $: items = getEvaluatedItems($evaluation);
  $: itemsByResult = {
    passed: items.filter(item => item.result === 'Passed'),
    failed: items.filter(item => item.result === 'Failed'),
    cannottell: items.filter(item => item.result === 'Cannot tell'),
    na: items.filter(item => item.result === 'Not applicable'),
    notchecked: items.filter(item => item.result === 'Not checked')
  };
</script>

<h3>Overview</h3>

<p>This report has results for {items.length} out of {Object.values($evaluation.evaluationData).length} Success Criteria.</p>

<ul>
  {#if itemsByResult.passed.length > 0 }
  <li>Passed ({itemsByResult.passed.length}):
    {#each itemsByResult.passed as item}
    <LinkToSC href={getLinkToSC(item.num)}>{item.num}</LinkToSC>
    {/each}
  </li>
  {/if}
  {#if itemsByResult.failed.length > 0 }
  <li>Failed ({itemsByResult.failed.length}):
    {#each itemsByResult.failed as item}
    <LinkToSC href={getLinkToSC(item.num)}>{item.num}</LinkToSC>
    {/each}
  </li>
  {/if}
  {#if itemsByResult.cannottell.length > 0 }
  <li>Cannot tell ({itemsByResult.cannottell.length}):
    {#each itemsByResult.cannottell as item}
    <LinkToSC href={getLinkToSC(item.num)}>{item.num}</LinkToSC>
    {/each}
  </li>
  {/if}
  {#if itemsByResult.na.length > 0 }
  <li>Not applicable:
    {#each itemsByResult.na as item}
    <LinkToSC href={getLinkToSC(item.num)}>{item.num}</LinkToSC>
    {/each}
  </li>
  {/if}
  {#if itemsByResult.notchecked.length > 0 }
  <li>Not checked ({itemsByResult.notchecked.length}):
    {#each itemsByResult.notchecked as item}
    <LinkToSC href={getLinkToSC(item.num)}>{item.num}</LinkToSC>
    {/each}
  {/if}
</ul>