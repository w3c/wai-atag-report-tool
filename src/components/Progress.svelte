<style>
  .progress {
    grid-column: navigation-start / content-end;
    overflow: auto;
    margin: -32px 0 40px;
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