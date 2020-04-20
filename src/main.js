import App from "./App.svelte";
import { globalHistory as history } from "svelte-routing/src/history";
import { wrapHistory } from "oaf-svelte-routing";
import atag from "./data/atag.js";

const routerSettings = {
  documentTitle: location => {
    const defaultTitle =
      "ATAG Conformance Evaluation Report Tool | Web Accessibility Initiative (WAI) | W3C";
    let newTitle;

    if (location.pathname.startsWith("/principle/")) {
      const id = location.pathname.substring(11, 12);
      return (newTitle = `${atag[id - 1].principle.handle} - ${defaultTitle}`);
    }

    switch (location.pathname) {
      case "/":
        return (newTitle = `Start - ${defaultTitle}`);
      case "/your-evaluation":
        return (newTitle = `Your Evaluation - ${defaultTitle}`);
      case "/report":
        return (newTitle = `Report - ${defaultTitle}`);
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
