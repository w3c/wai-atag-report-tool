<script>
  import ReportResultsOverviewResult from "./ReportResultsOverviewResult.svelte";
  import { evaluation } from "../../stores/evaluation.js";
  import { getEvaluatedItems } from "../../utils/getEvaluatedItems.js";

  const resultCategories = [
    "Passed",
    "Failed",
    "Cannot tell",
    "Not applicable",
    "Not checked",
  ];

  function getItemsFromCategory(category) {
    return items.filter(item => item.result === category);
  }

  $: items = getEvaluatedItems($evaluation);
</script>

<h3>Overview</h3>

<p>This report has results for {items.length} Success Criteria.</p>

<ul>
  {#each resultCategories as category}
    <ReportResultsOverviewResult
      label={category}
      items={getItemsFromCategory(category)} />
  {/each}
</ul>
