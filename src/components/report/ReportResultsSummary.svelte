<script>
  import { evaluation } from '../../stores/evaluation.js';
  import marked from 'marked';
</script>

{#if $evaluation["meta"]["executiveSummary"]["value"]}
<h3>Executive Summary</h3>
<div>{@html marked($evaluation["meta"]["executiveSummary"]["value"])}</div>
{/if}