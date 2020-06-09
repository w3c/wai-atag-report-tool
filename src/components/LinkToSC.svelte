<script>
  export let href;
</script>

<style>
  .link-to-sc {
    padding: 0.25em 1em;
    border-radius: 1em;
    margin-left: 0.75em;
    background-color: var(--cloudy-subtle);
    border: 1px solid var(--cloudy-subtle);
    font-size: 70%;
    color: inherit;
    text-decoration: none;
    white-space: nowrap;
  }
  .link-to-sc:hover {
    background-color: transparent;
    border-color: var(--ocean);
  }
</style>

<a {href} class="link-to-sc">
  <slot />
</a>
