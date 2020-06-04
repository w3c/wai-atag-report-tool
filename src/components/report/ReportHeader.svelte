<script>
  import { Link } from "svelte-navigator";
  import { evaluation } from "../../stores/evaluation.js";
</script>

<h2 class="report-header">
  General
  <Link to="/start">
    <span class="visuallyhidden">Edit details</span>
    <svg aria-hidden="true" focusable="false"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
  </Link>
</h2>
<dl>
  <dt>Tool Name</dt>
  {#if $evaluation["meta"]["name"] && $evaluation["meta"]["name"]["value"]}
  <dd>{$evaluation["meta"]["name"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Website</dt>
  {#if $evaluation["meta"]["website"] && $evaluation["meta"]["website"]["value"]}
  <dd>{$evaluation["meta"]["website"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Conformance Target</dt>
  {#if $evaluation["meta"]["conformanceTarget"] && $evaluation["meta"]["conformanceTarget"]["value"]}
  <dd>Level {$evaluation["meta"]["conformanceTarget"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Report Identifier</dt>
  {#if $evaluation["meta"]["evaluationId"] && $evaluation["meta"]["evaluationId"]["value"]}
  <dd>{$evaluation["meta"]["evaluationId"]["value"]}</dd>
  {/if}
  <dt>Evaluator</dt>
  {#if $evaluation["meta"]["evaluatorName"] && $evaluation["meta"]["evaluatorName"]["value"]}
  <dd>{$evaluation["meta"]["evaluatorName"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
  <dt>Organization</dt>
  {#if $evaluation["meta"]["evaluatorOrg"] && $evaluation["meta"]["evaluatorOrg"]["value"]}
  <dd>{$evaluation["meta"]["evaluatorOrg"]["value"]}</dd>
  {:else}
  <dd>Not provided</dd>
  {/if}
</dl>

<style>
   .report-header {
    display: flex;
  }
    :global(.report-header a) {
      margin-left: auto;
    }
  dt {
    grid-column: 1 / 2;
    margin-top: 0;
    font-weight: normal;
  }
  dt:after {
    content: ':';
  }
  dd {
    font-weight: bold;
    margin-left: 0;
    margin-bottom: 1em;
  }
  @media (min-width: 40em) {
    dl {
      display: grid;
      grid-template-columns: auto 2fr;
      gap: .5em 1em;
    }
    dd {
      margin-bottom: 0;
    }
  }
</style>
