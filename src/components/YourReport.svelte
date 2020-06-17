<script>
  import YourReportProgress from "./YourReportProgress.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import ButtonShowHide from "./ButtonShowHide.svelte";
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
  .your-report {
    grid-column: 8 / span 2;
    grid-row-start: 2;
    align-self: start;
    justify-self: end;
    padding: 1em 0;
    border: 1px solid transparent;
    outline: none;
  }
  .your-report--expanded {
    background: var(--footer-grey);
    box-shadow: 0px 2px 8px -7px #000;
    border-color: var(--line-grey);
    margin-bottom: 2em;
    padding: 1em;
  }
  @media (min-width: 60em) {
    .your-report--expanded {
      position: sticky;
      top: 1em;
    }
  }

  .your-report__heading {
    font-weight: bold;
    font-size: 1em;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .your-report__heading-pre {
    display: block;
    font-weight: normal;
    color: var(--dk-blue);
  }
  .your-report__import:focus + .your-report__import-label {
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-offset 0.2s linear;
    border-color: var(--w3c-blue);
    outline-color: var(--w3c-blue);
  }
  .your-report__progress-by-principle {
    columns: 2;
    column-gap: 1.5em;
    margin: 2.25em 0 1.75em 0;
  }
  .your-report__description {
    margin-bottom: 0.5em;
  }
</style>

<aside
  class="your-report"
  class:your-report--expanded={$showYourReport === true}
  bind:this={box}
  tabindex="-1">
  {#if $showYourReport === true}
    {#if fresh && $currentPage === 'Overview'}
      <h2 class="your-report__heading">
        Your report
        <ButtonShowHide expanded={true} on:toggle={toggleYourReport}>
          Hide
        </ButtonShowHide>
      </h2>
      <p>No report started.</p>
      <button class="button" on:click={startNew}>Start new report</button>
      <input
        type="file"
        id="import-evaluation"
        on:change={importEvaluation}
        class="visuallyhidden your-report__import"
        accept="application/json" />
      <label
        for="import-evaluation"
        class="button button-secondary your-report__import-label">
        Import report
      </label>
    {:else}
      <h2 class="your-report__heading">
        {#if nameProvided}
          <div>
            <small class="your-report__heading-pre">Report for</small>
            {$evaluation['meta']['name']['value']}
          </div>
        {:else}Your Report{/if}
        <ButtonShowHide expanded={true} on:toggle={toggleYourReport}>
          Hide
        </ButtonShowHide>
      </h2>
      <p class="your-report__description">
        Reported on
        <strong>{evaluatedItems.length}</strong>
        of
        <strong>{totalCriteria}</strong>
        {#if $evaluation.meta.conformanceTarget.value === 'A'}Level&nbsp;A{/if}
        {#if $evaluation.meta.conformanceTarget.value === 'AA'}
          Level&nbsp;A,&nbsp;AA
        {/if}
        success criteria.
      </p>
      <ProgressBar percentage={100 / (totalCriteria / evaluatedItems.length)} />
      <div class="your-report__progress-by-principle">
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
    <ButtonShowHide expanded={false} on:toggle={toggleYourReport}>
      Show sidebar
    </ButtonShowHide>
  {/if}
</aside>
