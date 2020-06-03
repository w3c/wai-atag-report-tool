<script>
  import { Link } from "svelte-navigator";

  export let to = "";
  export let direction = "";
</script>

<li class={`pager--item ${direction}`}>
  <Link to={to}>
    {#if direction === 'previous'}
    <svg focusable="false" aria-hidden="true" class="icon-arrow-right pager--item-icon">
      <use xlink:href="/images/icons.svg#icon-arrow-left"></use>
    </svg>
    {:else if direction === 'next'}
    <svg focusable="false" aria-hidden="true" class="icon-arrow-right pager--item-icon">
      <use xlink:href="/images/icons.svg#icon-arrow-right"></use>
    </svg>
    {/if}
    <span class="pager--item-text">
      <span class="pager--item-text-direction">{`${direction.toLowerCase()}:`}</span>
      <span class="pager--item-text-target">
        <slot></slot>
      </span>
    </span>
  </Link>
</li>

<style>
  .pager--item-text-direction {
    text-transform: capitalize;
  }
</style>
