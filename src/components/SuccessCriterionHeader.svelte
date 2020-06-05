<script>
  import LinkToGuidance from './LinkToGuidance.svelte';
  import { normaliseCriterionId } from '../utils/normaliseCriterionId';

  export let num, handle, level, linkToImplementing;

  $: normalisedCriterionId = normaliseCriterionId(num);
  $: linkToImplementing = `https://www.w3.org/TR/IMPLEMENTING-ATAG20/#sc_${normalisedCriterionId}`;
</script>

<div class="criterion-header">
  <h3>{num}: {handle}</h3> 
  <em class="criterion-header__level">Level {level}</em>
  <LinkToGuidance href={linkToImplementing}>Implementing {num}</LinkToGuidance>
</div>

<style>
.criterion-header h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: normal;
  display: inline;
}
:global([open] .criterion-header) {
  margin-bottom: 1em;
}
.criterion-header__level {
  font-size: .8125rem;
  font-style: normal;
  margin: 0 2em 0 .5em;
}
</style>
