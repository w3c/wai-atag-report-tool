<script>
  import ProgressBar from "./ProgressBar.svelte";
  import { getLinkToPrinciple } from "../utils/getLinkToPrinciple";

  export let principle;
  export let done;
  export let total;

  $: percentage = 100 / (total / done);
</script>

<style>
  .detail {
    margin-bottom: 1em;
  }
  a {
    color: var(--off-black);
    font-weight: bold;
    text-decoration: none;
  }
  a:hover span {
    text-decoration: underline;
  }
  .progress {
    font-size: 0.65em;
  }
</style>

<div class="detail">
  <div style="display: flex; align-items: center; margin-bottom: 0.125em;">
    <span class="principle">
      <a href={getLinkToPrinciple(principle)}>
        <span>{principle}</span>
      </a>
    </span>
    <span class="progress" style="margin-left: auto;">{done} of {total}</span>
  </div>
  <ProgressBar {percentage} />
</div>
