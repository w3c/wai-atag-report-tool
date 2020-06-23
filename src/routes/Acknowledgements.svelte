<script>
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  import { currentPage } from "../stores/currentPage.js";

  onMount(() => {
    currentPage.update(currentPage => "Acknowledgements");
  });
</script>

<svelte:head>
  <title>Acknowledgements | ATAG Report Tool | W3C WAI</title>
</svelte:head>

<Header>Acknowledgements</Header>

<p>
  The ATAG Report Tool was developed by the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>) with support from the
  <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide</a>
  project funded by the European Commission (EC) under the Horizon 2020 program
  (Grant Agreement 822245).
</p>

<h2>Project Leadership</h2>
<ul>
  <li><strong>Developer and Editor:</strong> Hidde de Vries, W3C WAI</li>
  <li><strong>Project Lead:</strong> Shadi Abou-Zahra, W3C WAI</li>
  <li><strong>EOWG Co-Chairs:</strong> Brent Bakken, Pearson and Sharron Rush, Knowbility</li>
  <li><strong>EOWG Staff Contact:</strong> Shawn Lawton Henry, W3C WAI</li>
</ul>

<h2>Major Contributors</h2>
<ul>
  <li>Shadi Abou-Zahra, W3C WAI</li>
  <li>Shawn Lawton Henry, W3C WAI</li>
  <li>Eric Eggert, Knowbility and W3C</li>
  <li>Kevin White, The Scottish Government</li>
  <li>Daniel Montalvo, W3C WAI</li>
</ul>

<h2>Contributing EOWG Participants</h2>

<ul>
  <li>Brent Bakken, Pearson plc</li>
  <li>Helen Burge, Deque Systems, Inc</li>
  <li>Sylvie Duchateau</li>
  <li>Laura Keen, Library of Congress</li>
  <li>Howard Kramer, University of Colorado Boulder</li>
  <li>Vicki Menezes Miller</li>
  <li>Estella Oncins, Universitat Autònoma de Barcelona</li>
  <li>Mark Palmer, The Scottish Government</li>
</ul>
