import App from "./App.svelte";
import "es6-shim";
import { globalHistory as history } from "svelte-routing/src/history";
import { wrapHistory } from "oaf-svelte-routing";
import atag from "./data/atag.js";

const routerSettings = {
  documentTitle: location => {
    const defaultTitle = "ATAG Report Tool | W3C WAI";
    let newTitle;

    if (location.pathname.startsWith("/principle/")) {
      const id = location.pathname.substring(11, 12);
      return (newTitle = `${atag[id - 1].principle.num} - ${defaultTitle}`);
    }

    switch (location.pathname) {
      case "/":
        return (newTitle = `Overview - ${defaultTitle}`);
      case "/start":
        return (newTitle = `Start - ${defaultTitle}`);
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
