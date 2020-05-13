import atag from "../data/atag.js";
import packageJson from "../../package.json";

export function createCleanEvaluation() {
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
    conformanceTarget: {
      id: "conformanceTarget",
      value: "AA",
    },
    createdWith: {
      id: "createdWith",
      value: packageJson.version,
    },
  };

  return cleanEvaluation;
}
