<script>
  import { tick } from "svelte";
  export let open = false;
  export let label = '';

  let info;
  $: labelPrefix = open ? 'Close' : 'Open';

  async function toggle() {
    if (open) {
      open = false; 
    } else {
      open = true;
      await tick();
      info.focus();
    }
  };
</script>

<style>
  button {
    padding: 0;
    background-color: transparent;
    border: 0;
    font-size: 1.25em;
    line-height: 1;
    color: var(--light-blue);
    vertical-align: middle;
  }
  div {
    color: var(--off-black);
    padding-left: 1em;
    font-size: 1rem;
    border-left: 4px solid var(--ocean);
  }
</style>

<button type="button" on:click={toggle}>
   <span class="visuallyhidden">{labelPrefix} {label}</span>
    <span aria-hidden="true" class="more-info__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450">
        <path fill="currentColor" d="M256 344v-40c0-4.5-3.5-8-8-8h-24v-128c0-4.5-3.5-8-8-8h-80c-4.5 0-8 3.5-8 8v40c0 4.5 3.5 8 8 8h24v80h-24c-4.5 0-8 3.5-8 8v40c0 4.5 3.5 8 8 8h112c4.5 0 8-3.5 8-8zM224 120v-40c0-4.5-3.5-8-8-8h-48c-4.5 0-8 3.5-8 8v40c0 4.5 3.5 8 8 8h48c4.5 0 8-3.5 8-8zM384 224c0 106-86 192-192 192s-192-86-192-192 86-192 192-192 192 86 192 192z"></path>
      </svg>
    </span>
</button>

<div bind:this={info} hidden={!open} tabindex="-1">
  <slot></slot>
</div>