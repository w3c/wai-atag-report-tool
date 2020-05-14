<script>
  import LinkToSC from './LinkToSC.svelte';
  import { normaliseCriterionId } from '../utils/normaliseCriterionId';

  export let num, handle, level, linkToImplementing;

  $: normalisedCriterionId = normaliseCriterionId(num);
  $: linkToImplementing = `https://www.w3.org/WAI/AU/2012/WD-IMPLEMENTING-ATAG20-20121011/#sc_${normalisedCriterionId}`;
</script>

<h3>
  {num}: {handle} <em>Level {level}</em>
  <LinkToSC href={linkToImplementing}>Implementing {num}</LinkToSC>
</h3>

<style>
h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: normal;
}
:global([open] h3) {
  margin-bottom: 1em;
}
h3 em {
  font-size: smaller;
  font-style: normal;
  margin: 0 2em 0 .5em;
}
</style>
