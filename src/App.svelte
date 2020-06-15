<script>
  import { Router, Route } from "svelte-navigator";
  import Overview from "./routes/Overview.svelte";
  import About from "./routes/About.svelte";
  import YourReport from "./components/YourReport.svelte";
  import Report from "./routes/Report.svelte";
  import Principle from "./components/Principle.svelte";
  import Progress from "./components/Progress.svelte";
  import ProgressItem from "./components/ProgressItem.svelte";
  import { currentPage } from "./stores/currentPage.js";
  import atag from "./data/atag.js";
  export let url = "";
</script>

<style>
  .app-content {
    grid-column: 2 / span 6;
    grid-row-start: 2;
  }
  .app-content--report {
    grid-column: 2 / span 8;
  }
</style>

<Router {url}>
  <Progress>
    <ProgressItem to="/">Overview</ProgressItem>
    <ProgressItem to="/about">About</ProgressItem>
    {#each atag as { principle, guidelines }, i}
      <ProgressItem to="principle/{i + 1}">
        {principle.num}
        <span class="visuallyhidden">: {principle.handle}</span>
      </ProgressItem>
    {/each}
    <ProgressItem to="/report">Report</ProgressItem>
  </Progress>
  <section
    class="app-content"
    class:app-content--report={$currentPage === 'Report'}
    aria-label="Main content">
    <Route path="/">
      <Overview />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/principle/:id" let:params>
      <Principle id={params.id - 1} />
    </Route>
    <Route path="/report">
      <Report />
    </Route>
  </section>
  {#if $currentPage !== 'Report'}
    <YourReport />
  {/if}
</Router>
