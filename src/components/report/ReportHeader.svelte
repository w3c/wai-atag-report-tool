<script>
  import { Link, navigate } from "svelte-navigator";
  import EditButton from './EditButton.svelte';
  import ReportHeaderKey from './ReportHeaderKey.svelte';
  import ReportHeaderMultiValue from './ReportHeaderMultiValue.svelte';
  import ReportHeaderValue from './ReportHeaderValue.svelte';
  import { evaluation } from "../../stores/evaluation.js";

  let editing = false;
  let section;

  function toggleEdit() {
    editing = !editing; 
    section.focus();
  }
</script>

<div tabindex="-1" bind:this={section}>
  <h2 class="report-header">
    General
    {#if !editing}
    <EditButton on:edit={toggleEdit}>Edit details</EditButton>
    {/if}
  </h2>
  <dl>
    <dt><ReportHeaderKey {editing} field="name">Tool Name</ReportHeaderKey></dt>
    <dd><ReportHeaderValue {editing} field="name" /></dd>
    <dt><ReportHeaderKey {editing} field="website">Website</ReportHeaderKey></dt>
    <dd><ReportHeaderValue {editing} field="website" /></dd>
    <dt><ReportHeaderKey {editing} field="conformanceTarget">Conformance Target</ReportHeaderKey></dt>
    <dd>
      <ReportHeaderMultiValue {editing} field="conformanceTarget">
        <option value="A">Level A</option>
        <option value="AA">Level AA</option>
        <option value="AAA">Level AAA</option>
      </ReportHeaderMultiValue>
    </dd>
    <dt><ReportHeaderKey {editing} field="evaluationId">Report Identifier</ReportHeaderKey></dt>
    <dd><ReportHeaderValue {editing} field="evaluationId" /></dd>
    <dt><ReportHeaderKey {editing} field="evaluatorName">Evaluator</ReportHeaderKey></dt>
    <dd><ReportHeaderValue {editing} field="evaluatorName" /></dd>
    <dt><ReportHeaderKey {editing} field="evaluatorOrg">Organization</ReportHeaderKey></dt>
    <dd><ReportHeaderValue {editing} field="evaluatorOrg" /></dd>
  </dl>
  {#if editing}
  <button type="button" on:click={toggleEdit}>Save</button>
  {/if}
</div>

<style>
  div:focus { 
    outline: none; 
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
