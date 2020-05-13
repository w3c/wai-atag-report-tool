<script>
  export let href;
</script>

<a {href} class="link-to-sc" target="_blank"><slot></slot></a>

<style>
.link-to-sc {
  padding: .25em 1em;
  border-radius: 1em;
  margin-left: .75em;
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