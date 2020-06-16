<script>
  import { onMount } from "svelte";
  import { evaluation } from "../../stores/evaluation.js";

  import ReportHeader from "./ReportHeader.svelte";
  import ReportResultsTable from "./ReportResultsTable.svelte";

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
  <ReportResultsTable />
</div>
