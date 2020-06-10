<script>
  import { onMount } from "svelte";

  import ReportHeader from "./ReportHeader.svelte";
  import ReportResultsTable from "./ReportResultsTable.svelte";

  let htmlDownload, htmlDownloadTemplate;

  onMount(() => {
    htmlDownload = createHTMLDownload();
  });

  function createHTMLDownload() {
    const htmlDocument = document.implementation.createHTMLDocument(
      "ATAG Conformance Report"
    );
    let blob, download;

    htmlDocument.body.innerHTML = htmlDownloadTemplate.innerHTML;

    blob = new Blob([htmlDocument.documentElement.outerHTML], {
      type: "text/html",
    });
    download = URL.createObjectURL(blob);

    return download;
  }

  function cleanUp(node) {
    const els = Array.from(
      node.querySelectorAll("[class], [id], [aria-labelledby]")
    );

    els.forEach(el => {
      el.removeAttribute("id");
      el.removeAttribute("class");
      el.removeAttribute("aria-labelledby");
    });
  }
</script>

<a href={htmlDownload} download="report.html" class="button">
  Download Report (HTML)
</a>

<div hidden use:cleanUp bind:this={htmlDownloadTemplate}>
  <ReportHeader />
  <ReportResultsTable />
</div>
