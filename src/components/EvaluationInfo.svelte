<script>
  import EvaluationInfoPrincipleDetail from "./EvaluationInfoPrincipleDetail.svelte";
  import { navigate, Router, Link } from "svelte-navigator";
  import { evaluation } from "../stores/evaluation.js";
  import { currentPage } from "../stores/currentPage.js";
  import { importEvaluation } from "../utils/importEvaluation.js";
  import { getEvaluatedItems } from "../utils/getEvaluatedItems.js";
  import MoreInfo from "./MoreInfo.svelte";

  let fresh;

  function startNew() {
    navigate("/start", { replace: false });
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

  evaluation.subscribe(value => {
    fresh = evaluation.isFresh();
  });

  $: fresh = evaluation.isFresh();
  $: evaluatedItems = getEvaluatedItems($evaluation);
  $: totalCriteria = Object.values($evaluation.evaluationData).filter(
    item =>
      item.level &&
      item.level.length <= $evaluation.meta.conformanceTarget.value.length
  ).length;
</script>

<style>
  aside {
    background: var(--footer-grey);
    box-shadow: 0px 2px 8px -7px #000;
    padding: 1em;
    border: 1px solid var(--line-grey);
    grid-column: 8 / span 2;
    grid-row-start: 2;
    align-self: start;
    margin-bottom: 2em;
  }
  @media (min-width: 60em) {
    aside {
      position: sticky;
      top: 1em;
    }
  }
  h2 {
    font-weight: bold;
    font-size: 1em;
    margin: 0;
  }
  h2 small {
    display: block;
    font-weight: normal;
    color: var(--dk-blue);
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
</style>

<aside>
  {#if fresh && $currentPage === 'Overview'}
    <h2>Your report</h2>
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
  {:else if $currentPage === 'Start'}
    <Router>
      <h2>
        {#if $evaluation['meta'] && $evaluation['meta']['name'] && $evaluation['meta']['name']['value']}
          <small>Report for</small>
          {$evaluation['meta']['name']['value']}
        {:else}Your Report{/if}
      </h2>
      <p>
        On this page, you can add information about your report, or start
        evaluating straight away in
        <Link to="/principle/1">Principle 1</Link>
        .
      </p>
    </Router>
  {:else}
    <h2>
      {#if $evaluation['meta'] && $evaluation['meta']['name'] && $evaluation['meta']['name']['value']}
        <small>Report for</small>
        {$evaluation['meta']['name']['value']}
      {:else}Your Report{/if}
    </h2>
    {#if evaluatedItems && $evaluation.evaluationData}
      <p>
        Reported on
        <strong>{evaluatedItems.length}</strong>
        out of
        <strong>{totalCriteria}</strong>
        success criteria.
      </p>
    {/if}
    <div style="columns: 2; column-gap: 1.5em;">
      <EvaluationInfoPrincipleDetail
        principle="A.1"
        done={evaluatedItems.length}
        total={totalCriteria} />
      <EvaluationInfoPrincipleDetail principle="A.2" done="3" total="7" />
      <EvaluationInfoPrincipleDetail principle="A.3" done="3" total="5" />
      <EvaluationInfoPrincipleDetail principle="A.4" done="1" total="3" />
      <EvaluationInfoPrincipleDetail principle="B.1" done="1" total="4" />
      <EvaluationInfoPrincipleDetail principle="B.2" done="4" total="4" />
      <EvaluationInfoPrincipleDetail principle="B.3" done="3" total="4" />
      <EvaluationInfoPrincipleDetail principle="B.4" done="1" total="2" />
    </div>
    <button class="button" on:click={toOverview}>View Report</button>
    {#if evaluatedItems.length > 0 && $currentPage === 'Overview'}
      <button class="button button-secondary" on:click={clear}>
        Start new report
      </button>
    {/if}
  {/if}
</aside>
