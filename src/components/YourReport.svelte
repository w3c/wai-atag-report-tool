<script>
  import YourReportProgress from "./YourReportProgress.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import { navigate, Router, Link } from "svelte-navigator";
  import { evaluation } from "../stores/evaluation.js";
  import { currentPage } from "../stores/currentPage.js";
  import { showYourReport } from "../stores/showYourReport.js";
  import { importEvaluation } from "../utils/importEvaluation.js";
  import { getEvaluatedItems } from "../utils/getEvaluatedItems.js";
  import {
    getProgressPerPrinciple,
    principles,
  } from "../utils/getProgressPerPrinciple.js";
  import { inConformanceTarget } from "../utils/inConformanceTarget.js";

  let fresh, showButton, box;

  function startNew() {
    navigate("/about", { replace: false });
  }

  function toOverview() {
    navigate("/report", { replace: false });
  }

  function clear() {
    if (
      window.confirm(
        "This will clear the current evaluation and start a new one. Are you sure that's what you'd like to do?"
      )
    ) {
      evaluation.clearCache();
      navigate("/", { replace: true });
    }
  }

  function toggleYourReport() {
    showYourReport.update(v => (v = !v));
    box.focus();
  }

  evaluation.subscribe(value => {
    fresh = evaluation.isFresh();
  });

  $: fresh = evaluation.isFresh();
  $: nameProvided =
    $evaluation["meta"] &&
    $evaluation["meta"]["name"] &&
    $evaluation["meta"]["name"]["value"];
  $: evaluatedItems = getEvaluatedItems($evaluation);
  $: progressPerPrinciple = getProgressPerPrinciple($evaluation);
  $: totalCriteria = Object.values($evaluation.evaluationData).filter(item =>
    inConformanceTarget(item, $evaluation)
  ).length;
</script>

<style>
  aside {
    grid-column: 8 / span 2;
    grid-row-start: 2;
    align-self: start;
    justify-self: end;
    padding: 1em 0;
    border: 1px solid transparent;
    outline: none;
  }
  aside.has-report-box {
    background: var(--footer-grey);
    box-shadow: 0px 2px 8px -7px #000;
    border-color: var(--line-grey);
    margin-bottom: 2em;
    padding: 1em;
  }
  @media (min-width: 60em) {
    aside.has-report-box {
      position: sticky;
      top: 1em;
    }
  }
  .button-showhide {
    border-width: 1px;
    border-color: transparent;
    font-weight: normal;
    background-color: var(--grey);
    color: var(--pure-white);
    padding: 0 6px;
  }
  h2 {
    font-weight: bold;
    font-size: 1em;
    margin: 0;
    display: flex;
    align-items: center;
  }
  h2 small {
    display: block;
    font-weight: normal;
    color: var(--dk-blue);
  }
  h2 button {
    margin-left: auto;
    margin-bottom: 2px;
    margin-top: 2px;
  }
  .button + .button,
  .button + input + .button /* the file upload button */ {
    margin-top: 0.25em;
  }
  input[type="file"]:focus + label {
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-offset 0.2s linear;
    border-color: var(--w3c-blue);
    outline-color: var(--w3c-blue);
  }
  .your-report-progress {
    columns: 2;
    column-gap: 1.5em;
    margin: 2.25em 0 1.75em 0;
  }
</style>

<aside
  class:has-report-box={$showYourReport === true}
  bind:this={box}
  tabindex="-1">
  {#if $showYourReport === true}
    {#if fresh && $currentPage === 'Overview'}
      <h2>
        Your report
        <button
          type="button"
          class="button-secondary button-small button-showhide"
          on:click={toggleYourReport}>
          Hide
        </button>
      </h2>
      <p>No report started.</p>
      <button class="button" on:click={startNew}>Start new report</button>
      <input
        type="file"
        id="import-evaluation"
        on:change={importEvaluation}
        class="visuallyhidden"
        accept="application/json" />
      <label for="import-evaluation" class="button button-secondary">
        Import report
      </label>
    {:else}
      <h2>
        {#if nameProvided}
          <div>
            <small>Report for</small>
            {$evaluation['meta']['name']['value']}
          </div>
        {:else}Your Report{/if}
        <button
          type="button"
          class="button-secondary button-small button-showhide"
          on:click={toggleYourReport}>
          Hide
        </button>
      </h2>
      <p style="margin-bottom: .5em;">
        Reported on
        <strong>{evaluatedItems.length}</strong>
        out of
        <strong>{totalCriteria}</strong>
        success criteria.
      </p>
      <ProgressBar percentage={100 / (totalCriteria / evaluatedItems.length)} />
      <div class="your-report-progress">
        {#each principles as principle}
          <YourReportProgress
            {principle}
            done={progressPerPrinciple[principle]['evaluated']}
            total={progressPerPrinciple[principle]['total']} />
        {/each}
      </div>
      <button class="button" on:click={toOverview}>View Report</button>
      {#if evaluatedItems.length > 0 && $currentPage === 'Overview'}
        <button type="button" class="button button-secondary" on:click={clear}>
          New Report
        </button>
      {/if}
    {/if}
  {:else}
    <button
      type="button"
      class="button-secondary button-small button-showhide"
      on:click={toggleYourReport}>
      Show sidebar
    </button>
  {/if}
</aside>
