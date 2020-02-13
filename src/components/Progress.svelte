<style>
  .progress {
    grid-column: 1 / -1;
    overflow: auto;
    margin: -2em 0 2em;
  } 
    .progress ul {
      display: flex;
      flex-direction: row;
    }
</style>

<nav class="progress" aria-label="Steps">
  <ul>
    <slot></slot>
  </ul>
</nav>