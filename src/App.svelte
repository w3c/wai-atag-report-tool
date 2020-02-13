<script>
  import { Router, Route } from "svelte-routing";
  import Start from "./routes/Start.svelte";
  import Results from "./routes/Results.svelte";
  import Principle from './components/Principle.svelte';
  import Progress from './components/Progress.svelte';
  import ProgressItem from './components/ProgressItem.svelte';
  import atag from './data/atag.js';
  export let url = "";
</script>

<Progress>
  <Router>
    <ProgressItem to="/">Start</ProgressItem>
    {#each atag as { principle, guidelines }, i }
    <ProgressItem to="step/{i+1}">{principle.num}<span class="visuallyhidden">: {principle.handle}</span></ProgressItem>
    {/each}
    <ProgressItem to="/results">Results</ProgressItem>
  </Router>
</Progress>
<div style="grid-column: 1 / 4">(visual indication of progress)</div>
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
