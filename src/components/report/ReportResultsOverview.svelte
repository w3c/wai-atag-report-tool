<script>
  import { Link } from "svelte-navigator";
  import ResultCard from "./ResultCard.svelte";
  import { evaluation } from "../../stores/evaluation.js";
  import {
    getEvaluatedItems,
    getMissingItems,
  } from "../../utils/getEvaluatedItems.js";
  import { getLinkToSC } from "../../utils/getLinkToSC.js";

  const resultCategories = [
    "Passed",
    "Failed",
    "Cannot tell",
    "Not applicable",
  ];

  function getItemsFromCategory(category) {
    return items.filter(item => item.result === category);
  }

  $: items = getEvaluatedItems($evaluation);
  $: missingItems = getMissingItems($evaluation);
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
  .result-cards {
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
    background-color: var(--off-white);
    border-radius: 0.5em;
  }
  @media (min-width: 60em) {
    .result-missing {
      column-count: 2;
    }
  }
</style>

<h3>Summary</h3>

<p>This report has results for {items.length} Success Criteria.</p>

<ul class="result-cards">
  {#each resultCategories as category}
    <ResultCard label={category} items={getItemsFromCategory(category)} />
  {/each}
  <ResultCard label="Not checked" items={missingItems} />
</ul>

{#if missingItems.length > 0}
  <details>
    <summary>
      <h3>Not checked ({missingItems.length})</h3>
    </summary>
    <ul class="result-missing">
      {#each missingItems as item}
        <li>
          <Link to={getLinkToSC(item.num)}>{item.num}: {item.handle}</Link>
        </li>
      {/each}
    </ul>
  </details>
{/if}
