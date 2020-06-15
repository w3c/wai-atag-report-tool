export function getEvaluatedItems(evaluation) {
  if (
    evaluation &&
    evaluation.evaluationData &&
    Object.keys(evaluation.evaluationData).length > 0
  ) {
    return Object.values(evaluation.evaluationData).filter(
      (item) => item.result !== "Not checked"
    );
  } else {
    return [];
  }
}

export function getMissingItems(evaluation) {
  const conformanceTarget = evaluation.meta.conformanceTarget.value.length;
  if (
    evaluation &&
    evaluation.evaluationData &&
    Object.keys(evaluation.evaluationData).length > 0
  ) {
    return Object.values(evaluation.evaluationData).filter(
      (item) =>
        item.result === "Not checked" && item.level.length <= conformanceTarget
    );
  } else {
    return [];
  }
}
