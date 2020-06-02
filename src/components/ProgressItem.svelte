<script>
  import { Link } from "svelte-navigator";

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

<li class="progress__item">
  <Link to="{to}" getProps="{getProps}">
    <slot />
  </Link>
</li>