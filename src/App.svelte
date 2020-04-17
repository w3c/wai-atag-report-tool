<script>
  import { Router, Route } from "svelte-routing";
  import Start from "./routes/Start.svelte";
  import YourEvaluation from './routes/YourEvaluation.svelte';
  import EvaluationInfo from './components/EvaluationInfo.svelte';
  import Report from "./routes/Report.svelte";
  import Principle from './components/Principle.svelte';
  import Progress from './components/Progress.svelte';
  import ProgressItem from './components/ProgressItem.svelte';
  import atag from './data/atag.js';
  export let url = "";
</script>

<Progress>
  <Router>
    <ProgressItem to="/">Start</ProgressItem>
    <ProgressItem to="/your-evaluation">Your Evaluation</ProgressItem>
    {#each atag as { principle, guidelines }, i }
    <ProgressItem to="step/{i+1}">{principle.num}<span class="visuallyhidden">: {principle.handle}</span></ProgressItem>
    {/each}
    <ProgressItem to="/report">Report</ProgressItem>
  </Router>
</Progress>
<EvaluationInfo></EvaluationInfo>
<section aria-label="Main content">
  <Router url={url}>
    <Route path="/">
      <Start />
    </Route>
    <Route path="/your-evaluation">
      <YourEvaluation />
    </Route>
    <Route path="/step/:id" let:params>
      <Principle id="{params.id-1}" />
    </Route>
    <Route path="/report">
      <Report />
    </Route>
  </Router>
</section>

<style>
  section {
    grid-column: content-start / content-end;
  }
</style>
