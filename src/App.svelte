<script>
  import { Router, Route } from "svelte-navigator";
  import Overview from "./routes/Overview.svelte";
  import Start from './routes/Start.svelte';
  import EvaluationInfo from './components/EvaluationInfo.svelte';
  import Report from "./routes/Report.svelte";
  import Principle from './components/Principle.svelte';
  import Progress from './components/Progress.svelte';
  import ProgressItem from './components/ProgressItem.svelte';
  import { currentPage } from './stores/currentPage.js';
  import atag from './data/atag.js';
  export let url = "";
</script>

<Router {url}>
  <Progress>
    <ProgressItem to="/">Overview</ProgressItem>
    <ProgressItem to="/start">Start</ProgressItem>
    {#each atag as { principle, guidelines }, i }
    <ProgressItem to="principle/{i+1}">{principle.num}<span class="visuallyhidden">: {principle.handle}</span></ProgressItem>
    {/each}
    <ProgressItem to="/report">Report</ProgressItem>
  </Progress>
  <section class="app-content" aria-label="Main content">
    <Route path="/">
      <Overview />
    </Route>
    <Route path="/start">
      <Start />
    </Route>
    <Route path="/principle/:id" let:params>
      <Principle id="{params.id-1}" />
    </Route>
    <Route path="/report">
      <Report />
    </Route>
  </section>
  {#if $currentPage !== "Report"}
  <EvaluationInfo />
  {/if}
</Router>

<style>
  .app-content {
    grid-column: 2 / span 6;
    grid-row-start: 2;
  }
</style>
