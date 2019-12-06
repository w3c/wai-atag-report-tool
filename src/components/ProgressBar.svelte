<script>
  export let percentage;
</script>

<div class="bar">
  <div class="bar__progress" style="width: {percentage}%"><span class="visuallyhidden">Progress: {percentage}%</span></div>
</div>

<style>
  .bar {
    height: 1em;
    margin: 1em 0;
    background-color: var(--cloudy);
  }
  .bar__progress {
    transition: width 0.3s ease-in-out;
    height: 100%;
    background-color: var(--wai-green);
  }
</style>