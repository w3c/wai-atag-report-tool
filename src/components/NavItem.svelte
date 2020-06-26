<script>
  import { Link } from "svelte-navigator";
  import vars from "../../config/__buildEnv__.json";

  export let to = "";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === `${vars.pathPrefix}/` ? isCurrent : isPartiallyCurrent || isCurrent;

    console.log('href', href);
    console.log('isActive', isActive);
    console.log('isCurrent', isCurrent);

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "active" };
    }
    return {};
  }
</script>

<li class="nav__item">
  <Link {to} {getProps}>
    <slot />
  </Link>
</li>
