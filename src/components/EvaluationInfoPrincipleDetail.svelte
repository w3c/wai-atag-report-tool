<script>
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
  .principle {
    /* display: block; */
  }
  .progress-bar {
    height: 0.25em;
    width: 100%;
    background-color: var(--cloudy);
    position: relative;
  }
  .progress-bar__progress {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: var(--ocean);
    transition: width 0.2s;
  }
  .progress {
    font-size: 0.65em;
  }
  a {
    color: var(--off-black);
    font-weight: bold;
    text-decoration: none;
  }
  a:hover span {
    text-decoration: underline;
  }
</style>

<div class="detail">
  <div style="display: flex; align-items: center; margin-bottom: 0.125em;">
    <span class="principle">
      <a href={getLinkToPrinciple(principle)}>
        <span>{principle}</span>
        <svg
          style="vertical-align: middle;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </a>
    </span>
    <span class="progress" style="margin-left: auto;">{done} of {total}</span>
  </div>
  <div class="progress-bar">
    <span class="progress-bar__progress" style={`width: ${percentage}%`}>
      <span class="visuallyhidden">{percentage} %</span>
    </span>
  </div>
</div>
