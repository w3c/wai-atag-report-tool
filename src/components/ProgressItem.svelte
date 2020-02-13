<script>
  import { Link } from "svelte-routing";

  export let to = "";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "active" };
    }
    return {};
  }
</script>

<style>
  .progress__item {
    list-style: none;
    margin: 0;
    padding: .5em;
    text-decoration: none;
  }
    .progress__item li {
      font-size: 75%;
    }
</style>

<li class="progress__item">
  <Link to="{to}" getProps="{getProps}">
    <slot />
  </Link>
</li>