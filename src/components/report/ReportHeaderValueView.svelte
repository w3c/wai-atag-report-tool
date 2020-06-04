<script>
  import { evaluation } from "../../stores/evaluation.js";

  export let field;
</script>

{#if $evaluation["meta"][field] && $evaluation["meta"][field]["value"]}
<dd>{$evaluation["meta"][field]["value"]}</dd>
{:else}
<dd>Not provided</dd>
{/if}
