<script>
  import { Router, Route } from "svelte-navigator";
  import Overview from "./routes/Overview.svelte";
  import About from "./routes/About.svelte";
  import YourReport from "./components/YourReport.svelte";
  import Report from "./routes/Report.svelte";
  import Principle from "./components/Principle.svelte";
  import Nav from "./components/Nav.svelte";
  import NavItem from "./components/NavItem.svelte";
  import { currentPage } from "./stores/currentPage.js";
  import { showYourReport } from "./stores/showYourReport.js";
  import atag from "./data/atag.js";
  export let url = "";
</script>

<style>
  .app-content {
    grid-column: 2 / span 6;
    grid-row-start: 2;
  }
  .app-content--wide {
    grid-column: 2 / span 8;
  }
</style>

<Router {url}>
  <Nav>
    <NavItem to="/">Overview</NavItem>
    <NavItem to="/about">About</NavItem>
    {#each atag as { principle, guidelines }, i}
      <NavItem to="principle/{i + 1}">
        {principle.num}
        <span class="visuallyhidden">: {principle.handle}</span>
      </NavItem>
    {/each}
    <NavItem to="/report">Report</NavItem>
  <section
    class="app-content"
    class:app-content--wide={$currentPage === 'Report' || !$showYourReport}
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
