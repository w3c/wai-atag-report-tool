import atag from "../data/atag.js";
import { writable } from "svelte/store";

const storageName = 'atag_report_tool_evaluation';
let reused = false;

export function updateCache(evaluation) {
  try {
    const serialisedEvaluation = JSON.stringify(Object.values(evaluation));
    localStorage.setItem(storageName, serialisedEvaluation);
  } catch (error) {
    // something didn't work
  }
};

export function clearCache() {
  localStorage.clear();
  location.reload();
};

export function getEvaluation() {
  // Check for existing evaluation
  if (localStorage.getItem(storageName) && localStorage.getItem(storageName) !== null) {
    try {
      const serialisedEvaluation = localStorage.getItem(storageName);
      const evaluationValues = JSON.parse(serialisedEvaluation);
      let existingEvaluation = [];

      // We only saved the values; create  an object with keys
      for (const item in Object.values(evaluationValues)) {
        existingEvaluation[evaluationValues[item].id] = evaluationValues[item];
      }

      reused = true;

      return existingEvaluation;
    } catch (error) {
      // something didn't work
    }
  } else {
      // Use clean evaluation
      const cleanEvaluation = [];
      
      for (const principle of atag) {
          for (const guideline of principle.guidelines) {
              for (const successcriterion of guideline.successcriteria) {
                  cleanEvaluation[successcriterion.id] = {
                      id: successcriterion.id,
                      handle: successcriterion.handle,
                      result: null,
                      observations: null,
                  };
              }
          }
      };

      return cleanEvaluation;
  }  
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
    reused,
  }
}

export const evaluation = create_evaluation();
