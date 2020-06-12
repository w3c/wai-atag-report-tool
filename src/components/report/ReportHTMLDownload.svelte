<script>
  import { onMount } from "svelte";

  import ReportHeader from "./ReportHeader.svelte";
  import ReportResultsTable from "./ReportResultsTable.svelte";

  import { cleanUp } from "../../utils/cleanUpReportHTML.js";
  import { createHTMLDownload } from "../../utils/createHTMLDownload.js";

  const title = "Authoring Tool Accessibility Report";
  let htmlDownload, htmlDownloadTemplate;

  onMount(() => {
    htmlDownload = createHTMLDownload(htmlDownloadTemplate, title);
  });
</script>

<a href={htmlDownload} download="report.html" class="button">
  Download Report (HTML)
</a>

<div hidden use:cleanUp bind:this={htmlDownloadTemplate}>
  <h1>{title}</h1>
  <ReportHeader />
  <ReportResultsTable />
</div>
