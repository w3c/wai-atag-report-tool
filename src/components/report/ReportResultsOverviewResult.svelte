<script>
  import { evaluation } from "../../stores/evaluation.js";
  import LinkToSC from "../LinkToSC.svelte";
  import { getLinkToSC } from "../../utils/getLinkToSC.js";

  export let label;
  export let items = "none";
</script>

<li>
  {label} ({items.length} reported)
  {#each items as item}
    <LinkToSC href={getLinkToSC(item.num)}>{item.num}</LinkToSC>
  {/each}
</li>
