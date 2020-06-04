<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function edit() {
    dispatch('edit');
  }
</script>

<button type="button" on:click={edit}>
  <span class="visuallyhidden"><slot></slot></span>
  <svg aria-hidden="true" focusable="false"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
</button>

<style>
  button {
    background-color: transparent;
    padding: 0;
    border: 0;
    margin-left: auto;
    font-size: 1em;
    color: inherit;
  }
    button svg {
      fill: #fff;
    }
</style>