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
  Developed by the Education and Outreach Working Group (
  <a href="http://www.w3.org/WAI/EO/">EOWG</a>
  ) with support from the
  <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide</a>
  project funded by the European Commission (EC) under the Horizon 2020 program
  (Grant Agreement 822245).
</p>

<h2>Project Leadership</h2>
<dl>
  <dt>Developer and Editor</dt>
  <dd>Hidde de Vries, W3C WAI</dd>
  <dt>Project Lead</dt>
  <dd>Shadi Abou-Zahra, W3C WAI</dd>
  <dt>EOWG Co-Chairs</dt>
  <dd>Brent Bakken, Pearson</dd>
  <dd>Sharron Rush, Knowbility</dd>
  <dt>EOWG Staff Contact:</dt>
  <dd>Shawn Lawton Henry, W3C WAI</dd>
</dl>

<h2>Major Contributors</h2>
<ul>
  <li>Shadi Abou-Zahra, W3C WAI</li>
  <li>Shawn Lawton Henry, W3C WAI</li>
  <li>Eric Eggert, Knowbility/W3C</li>
  <li>Kevin White, The Scottish Government</li>
  <li>Daniel Montalvo, W3C WAI</li>
</ul>

<h2>Contributing EOWG Participants</h2>

<ul>
  <li>Brent Bakken, Pearson plc</li>
  <li>Helen Burge, Deque Systems, Inc</li>
  <li>Sylvie Duchateau , Invited Expert</li>
  <li>Laura Keen, Library of Congress</li>
  <li>Howard Kramer, University of Colorado Boulder</li>
  <li>Vicki Menezes Miller, Invited Expert</li>
  <li>Estella Oncins, Universitat Autònoma de Barcelona</li>
  <li>Mark Palmer, The Scottish Government</li>
</ul>
