<script>
  import { Router, Route } from "svelte-routing";
  import Start from "./routes/Start.svelte";
  import Results from "./routes/Results.svelte";
  import Principle from './components/Principle.svelte';
  import SideNav from './components/SideNav.svelte';
  import NavLink from './components/NavLink.svelte';
  import atag from './data/atag.js';
  export let url = "";
</script>

<SideNav>
  <Router>
    <NavLink to="/">Start</NavLink>
    {#each atag as { principle, guidelines }, i }
    <NavLink to="step/{i+1}">{principle.num}: {principle.handle}</NavLink>
    {/each}
    <NavLink to="/results">Results</NavLink>
  </Router>
</SideNav>
<main>
  <Router url={url}>
    <Route path="/">
      <Start />
    </Route>
    <Route path="/step/:id" let:params>
      <Principle id="{params.id-1}" />
    </Route>
    <Route path="/results">
      <Results />
    </Route>
  </Router>
</main>

<style>
  main {
    grid-column-end: 10;
  }
</style>
