<script>
  import { Router, Route } from "svelte-routing";
  import Start from "./routes/Start.svelte";  
  import Results from "./routes/Results.svelte";  
  import Principle from './components/Principle.svelte';
  import SideNav from './components/SideNav.svelte';
  import NavLink from './components/NavLink.svelte';
  import atag from './data/atag.js';

  export let url = "";

  let handleSubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    evaluation = JSON.stringify(Object.fromEntries(data));
    evaluation = JSON.parse(evaluation); 
  }

  $: evaluation = {};
  $: jsonDownload = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(evaluation))}`;
</script>

<div class="sidenav">
  <nav class="sn-contents" aria-label="Secondary">
    <div class="sidenav--head">
      <div class="sidenav--head-title">
        <div class="sidenav--head-subsection">Your evaluation</div>
      </div>
    </div>
    <ul class="sidenav--list">
      <Router>
        <li><NavLink to="/">Start</NavLink></li>
        {#each atag as { principle, guidelines }, i }
        <li>
          <NavLink to="step/{i+1}">{principle.atag_id}: {principle.name}</NavLink>
        </li>
        {/each}
        <li>
          <NavLink to="/results">Results</NavLink>
        </li>
      </Router>
    </ul>
  </nav>
</div>
<main>
  <h1>Check your authoring tool's accessibility</h1>
  <p style="font-size: 1.2em">With this tool, you can find out how accessible your authoring tool (CMS, LMS, wiki, form generator etc) is, by checking it against the <a href="https://www.w3.org/TR/ATAG20/">Authoring Tool Accessibility Guidelines</a> (ATAG).</p>
  <Router url={url}>
    <Route path="/"><Start /></Route>
    <Route path="/step/:id" let:params>
      <Principle id="{params.id-1}" />
    </Route>
    <Route path="/results"><Results /></Route>
  </Router>
  <form method="POST" action="" on:submit={handleSubmit}>
  </form>
</main>

<style>
  main {
    grid-column-end: 10;
  }
</style>