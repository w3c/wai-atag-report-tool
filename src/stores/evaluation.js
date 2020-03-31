import atag from "../data/atag.js";
import { writable } from "svelte/store";

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
  // Check for existing evaluation
  if (
    localStorage.getItem(storageName) &&
    localStorage.getItem(storageName) !== null
  ) {
    try {
      const serialisedEvaluation = localStorage.getItem(storageName);
      const evaluationObject = JSON.parse(serialisedEvaluation);

      fresh = false;

      return evaluationObject;
    } catch (error) {
      // something didn't work
    }
  } else {
    // Use clean evaluation
    const cleanEvaluation = {
      evaluationData: {},
      meta: {},
    };

    for (const principle of atag) {
      for (const guideline of principle.guidelines) {
        for (const successcriterion of guideline.successcriteria) {
          cleanEvaluation["evaluationData"][successcriterion.id] = {
            id: successcriterion.id,
            num: successcriterion.num,
            handle: successcriterion.handle,
            result: null,
            observations: null,
            evaluated: false,
          };
        }
      }
    }

    cleanEvaluation.meta = {
      name: {
        id: "name",
        value: null,
      },
      website: {
        id: "website",
        value: null,
      },
      evaluatorName: {
        id: "evaluatorName",
        value: null,
      },
      evaluatorOrg: {
        id: "evaluatorOrg",
        value: null,
      },
    };

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
