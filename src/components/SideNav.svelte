<script>
  export let jsonDownload;
</script>

<div class="sidenav">
  <nav class="sn-contents" aria-label="Secondary">
    <div class="sidenav--head">
      <div class="sidenav--head-title">
        <div class="sidenav--head-subsection">Your evaluation</div>
      </div>
    </div>
    <ul class="sidenav--list">
      <li>
        <a href="/" aria-current="page" class="page-link" lang="en"><span>Evaluate</span></a>
      </li>
      <li>
        <a href={jsonDownload} class="page-link"><span>Download JSON</span></a>
      </li>
    </nav>
</div>