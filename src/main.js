import App from "./App.svelte";
import { globalHistory as history } from "svelte-routing/src/history";
import { wrapHistory } from "oaf-svelte-routing";
import atag from "./data/atag.js";

const routerSettings = {
  documentTitle: location => {
    const defaultTitle =
      "ATAG Conformance Evaluation Report Tool | Web Accessibility Initiative (WAI) | W3C";
    let newTitle;

    if (location.pathname.startsWith("/step/")) {
      const id = location.pathname.substring(6, 7);
      return (newTitle = `${atag[id].principle.handle} - ${defaultTitle}`);
    }

    switch (location.pathname) {
      case "/":
        return (newTitle = `Start - ${defaultTitle}`);
      case "/results":
        return (newTitle = `Results - ${defaultTitle}`);
    }
    return newTitle;
  },
  setPageTitle: true,
};

wrapHistory(history, routerSettings);

const app = new App({
  target: document.getElementById("conformance-tool"),
});

export default app;
