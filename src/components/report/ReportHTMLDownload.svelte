<script>
  import { onMount } from "svelte";
  import { evaluation } from "../../stores/evaluation.js";

  import ReportHeader from "./ReportHeader.svelte";
  import ReportNumbers from "./ReportNumbers.svelte";
  import ReportSummary from "./ReportSummary.svelte";
  import ReportResultsTable from "./ReportResultsTable.svelte";

  import {
    resultCategories,
    getEvaluatedItems,
    getMissingItems,
    getItemsFromCategory,
  } from "../../utils/getEvaluatedItems.js";
  import { cleanUp } from "../../utils/cleanUpReportHTML.js";
  import { createHTMLDownload } from "../../utils/createHTMLDownload.js";

  const title = "Accessibility Report";
  let htmlDownload, htmlDownloadTemplate, nameProvided;

  onMount(() => {
    htmlDownload = createHTMLDownload(htmlDownloadTemplate, title);
  });
  $: nameProvided =
    $evaluation["meta"] &&
    $evaluation["meta"]["name"] &&
    $evaluation["meta"]["name"]["value"];

  $: items = getEvaluatedItems($evaluation);
  $: missingItems = getMissingItems($evaluation);
</script>

<a href={htmlDownload} download="report.html" class="button">
  Download Report (HTML)
</a>

<div hidden use:cleanUp bind:this={htmlDownloadTemplate}>
  <h1>
    {title}
    {#if nameProvided}for {$evaluation['meta']['name']['value']}{/if}
  </h1>
  <ReportHeader />
  <ReportSummary editing={false} />
  <h2>Results</h2>
  <h3>Summary</h3>
  <ReportNumbers />
  <ul>
    {#each resultCategories as category}
      <li>{getItemsFromCategory(items, category).length} {category}</li>
    {/each}
    <li>{missingItems.length} Not Checked</li>
  </ul>
  <ReportResultsTable />
</div>
