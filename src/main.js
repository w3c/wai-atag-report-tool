import App from "./App.svelte";
import { globalHistory as history } from "svelte-routing/src/history";
import { wrapHistory } from "oaf-svelte-routing";

wrapHistory(history);

const app = new App({
  target: document.getElementById("conformance-tool"),
});

export default app;
