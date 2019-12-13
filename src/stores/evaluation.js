import atag from "../data/atag.js";
import { writable } from "svelte/store";

const scs = {
  "web-based-accessible-wcag": {
    answer: "",
    comment: "",
  },
};

export const evaluation = writable(scs);
