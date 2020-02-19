<script>
  import { Router, Route } from "svelte-routing";
  import Start from "./routes/Start.svelte";
  import EvaluationInfo from './components/EvaluationInfo.svelte';
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

<section aria-label="Main content">
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
</section>

<aside style="grid-column: 2 / 4; grid-row-start: 2;
    align-self: start;">
  <EvaluationInfo></EvaluationInfo>
  <nav class="sidenav-languages" aria-labelledby="languagehead">
    <header id="languagehead">Languages/Translations</header>
    <ul class="langlist">
      <li style="margin-bottom: 2px;"><strong style="text-transform: capitalize;">English (original)</strong></li><li style="margin-bottom: 2px;"><a style="text-transform: capitalize;" href="/WAI/fundamentals/accessibility-intro/ar" dir="auto" translate="no" lang="ar">العربية</a></li><li style="margin-bottom: 2px;"><a style="text-transform: capitalize;" href="/WAI/fundamentals/accessibility-intro/es" dir="auto" translate="no" lang="es">español</a></li><li style="margin-bottom: 2px;"><a style="text-transform: capitalize;" href="/WAI/fundamentals/accessibility-intro/fr" dir="auto" translate="no" lang="fr">français</a></li><li style="margin-bottom: 2px;"><a style="text-transform: capitalize;" href="/WAI/fundamentals/accessibility-intro/ru" dir="auto" translate="no" lang="ru">русский язык</a></li><li style="margin-bottom: 2px;"><a style="text-transform: capitalize;" href="/WAI/fundamentals/accessibility-intro/zh-hans" dir="auto" translate="no" lang="zh-hans">简体汉语</a></li></ul>
      <p><a href="/WAI/translations/">All&nbsp;Translations</a></p>
      <p><a href="/WAI/about/translating/">Translating WAI Resources</a></p>
  </nav>
</aside>

<style>
  section {
    grid-column: content-start / content-end;
  }
  @media (min-width: 50em) {
    aside {
      position: sticky;
      top: 1em;
      }
  }

</style>
