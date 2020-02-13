<style>
  .progress {
    grid-column: 1 / -1;
    overflow: auto;
    margin: -32px -32px 32px;
    background-color: var(--cloudy-subtle);
  } 
    .progress ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
    }
</style>

<nav class="progress" aria-label="Steps">
  <ul>
    <slot></slot>
  </ul>
</nav>