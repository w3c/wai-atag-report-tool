<script>
  import atag from './data/atag.js';
  import Guideline from './components/Guideline.svelte';
  import ProgressBar from './components/ProgressBar.svelte';
  import SideNav from './components/SideNav.svelte';

  $: evaluation = {};
  $: jsonDownload = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(evaluation))}`;

  let current = 0;
  let nextSection = function() {
    if (current + 1 < atag.length) {
      current++;
    }
  }
  let prevSection = function() {
    if (current > 0) {
      current--;
    }
  }
  let handleSubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    evaluation = JSON.stringify(Object.fromEntries(data));
    evaluation = JSON.parse(evaluation); 

    nextSection();
  }

  $: progression = ((current + 1) / atag.length * 100);
</script>

<SideNav {jsonDownload}></SideNav>
<main>
  <h1>Check your authoring tool's accessibility</h1>
  <p style="font-size: 1.2em">With this tool, you can find out how accessible your authoring tool (CMS, LMS, wiki, form generator etc) is, by checking it against the <a href="https://www.w3.org/TR/ATAG20/">Authoring Tool Accessibility Guidelines</a> (ATAG).</p>
  <ProgressBar percentage={progression}></ProgressBar>
  <form method="POST" action="" on:submit={handleSubmit}>
  {#each atag as { guideline, scs }, i }
    {#if current === i}
      <Guideline title="{guideline}" subtitle={`Step ${current+1} of ${atag.length}`} {scs} />
    {:else}
      <Guideline title="{guideline}" {scs} className="visuallyhidden" />    
    {/if}
  {/each}
  <button on:click={prevSection}>Previous</button>
  <button type="submit">Next</button>
  </form>
</main>

<aside>
  <pre>
  </pre>
</aside>

<style>
  main {
    grid-column-end: 8;
  }
</style>