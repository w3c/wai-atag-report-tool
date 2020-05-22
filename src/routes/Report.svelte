<script>
  import { onMount } from 'svelte';
  import { Link } from "svelte-routing";
  import marked from 'marked';
  
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import ReportHeader from '../components/ReportHeader.svelte';
  import ReportResultsTable from '../components/ReportResultsTable.svelte';

  import { evaluation } from '../stores/evaluation.js';
  import { currentPage } from '../stores/currentPage.js';

  onMount(() => {
    currentPage.update( currentPage => 'Report' );
    
    // by setting location.hash explictly, we ensure :target 
    // selectors will work as expected
    if (location.hash.length > 0) {
      location.hash = location.hash;
    }
  });



  }

  $: jsonDownload = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify($evaluation))}`;
</script>

<Header>
  <HeaderSub>ATAG Report Tool</HeaderSub>
  Report
</Header>

<p>
  <a href={jsonDownload} download="report.json" class="button button-secondary">Download evaluation (JSON)</a> 
</p>

<ReportHeader />
<ReportResultsTable />


