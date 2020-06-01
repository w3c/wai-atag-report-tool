<script>
  import { onMount } from 'svelte';
  import { Link } from "svelte-routing";
  
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import ReportHeader from '../components/report/ReportHeader.svelte';
  import ReportResults from '../components/report/ReportResults.svelte';
  import ReportHTMLDownload from '../components/report/ReportHTMLDownload.svelte';
  import ReportJSONDownload from '../components/report/ReportJSONDownload.svelte';

  import { currentPage } from '../stores/currentPage.js';

  onMount(() => {
    currentPage.update( currentPage => 'Report' );
    
    // by setting location.hash explictly, we ensure :target 
    // selectors will work as expected
    if (location.hash.length > 0) {
      location.hash = location.hash;
    }
  });
</script>

<Header>
  <HeaderSub>ATAG Report Tool</HeaderSub>
  Report
</Header>

<p>
  <ReportHTMLDownload />
  <ReportJSONDownload />
</p>

<ReportHeader />
<ReportResults />


