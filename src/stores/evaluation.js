import { writable } from "svelte/store";
import { createCleanEvaluation } from "../utils/createCleanEvaluation.js";

const storageName = "atag_report_tool_evaluation";
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
  if (
    localStorage.getItem(storageName) &&
    localStorage.getItem(storageName) !== null
  ) {
    try {
      const serialisedEvaluation = localStorage.getItem(storageName);
      const localEvaluationObject = JSON.parse(serialisedEvaluation);

      fresh = false;

      if (localEvaluationObject) return localEvaluationObject;
    } catch (error) {
      const cleanEvaluation = createCleanEvaluation();
      return cleanEvaluation;
    }
  } else {
    const cleanEvaluation = createCleanEvaluation();
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
