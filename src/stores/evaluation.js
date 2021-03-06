import { writable } from "svelte/store";
import { createCleanEvaluation } from "../utils/createCleanEvaluation.js";

const storageName = "atag_report_tool_evaluation";

// update this number whenever new things added to the data model to cachebust [remove this when stable]
const DATA_MODEL = "17";

let fresh = true;

export function updateCache(evaluation) {
  try {
    const serialisedEvaluation = JSON.stringify(evaluation);
    localStorage.setItem(storageName, serialisedEvaluation);

    fresh = false;
  } catch (error) {
    // something didn't work
  }
}

export function clearCache() {
  localStorage.clear();
  location.reload();
}

export function getEvaluation() {
  const cleanEvaluation = createCleanEvaluation();

  if (
    localStorage.getItem(storageName) &&
    localStorage.getItem(storageName) !== null &&
    localStorage.getItem(`${storageName}-data-model`) === DATA_MODEL
  ) {
    try {
      const serialisedEvaluation = localStorage.getItem(storageName);
      const localEvaluationObject = JSON.parse(serialisedEvaluation);

      fresh = false;

      return localEvaluationObject;
    } catch (error) {
      return cleanEvaluation;
    }
  } else {
    localStorage.setItem(`${storageName}-data-model`, DATA_MODEL);
    console.log(
      "Removed evaluation data as it was created with a previous development version of ART."
    );
    return cleanEvaluation;
  }
}

export function isFresh() {
  return fresh;
}

export function create_evaluation() {
  const evaluation = getEvaluation();
  const { set, update, subscribe } = writable(evaluation);

  return {
    subscribe,
    set,
    update,
    updateCache,
    clearCache,
    isFresh,
  };
}

export const evaluation = create_evaluation();
