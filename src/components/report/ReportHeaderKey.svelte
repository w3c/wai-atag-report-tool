<script>
  export let field;
  export let editing;
</script>

{#if editing}
<label for={`evaluation-meta-edit-${field}`}><slot></slot></label>
{:else}
<slot></slot>
{/if}