<script>
  import { onMount } from 'svelte';

  import ReportHeader from './ReportHeader.svelte';
  import ReportResultsTable from './ReportResultsTable.svelte';

  let htmlDownload, htmlDownloadTemplate;

  onMount(() => {
    htmlDownload = createHTMLDownload();
  });

  function createHTMLDownload() {
    const htmlDocument = document.implementation.createHTMLDocument('ATAG Conformance Report');
    let blob, download;

    htmlDocument.body.innerHTML = htmlDownloadTemplate.innerHTML;

    blob = new Blob([htmlDocument.documentElement.outerHTML], { type: 'text/html' });
    download = URL.createObjectURL(blob);

    return download
  }
</script>

<a href={htmlDownload} download="report.html" class="button">Download Report (HTML)</a>

<div hidden bind:this={htmlDownloadTemplate}>
  <ReportHeader />
  <ReportResultsTable />
</div>
