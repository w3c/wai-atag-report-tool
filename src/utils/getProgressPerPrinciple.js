export const principles = [
  "A.1",
  "A.2",
  "A.3",
  "A.4",
  "B.1",
  "B.2",
  "B.3",
  "B.4",
];

export function getProgressPerPrinciple(evaluation) {
  const conformanceTarget = evaluation.meta.conformanceTarget.value.length;

  let progressPerPrinciple = {};

  function getEvaluatedForPrinciple(principleNum) {
    return (
      Object.values(evaluation.evaluationData).filter(
        (item) =>
          item.num.startsWith(principleNum) &&
          item.result !== "Not checked" &&
          item.level.length <= conformanceTarget
      ).length || 0
    );
  }

  function getTotalForPrinciple(principleNum) {
    return (
      Object.values(evaluation.evaluationData).filter(
        (item) =>
          (item.num.startsWith(principleNum) &&
            item.level.length <= conformanceTarget) ||
          item.evaluatedLevel.replace("Level ", "") <= conformanceTarget
      ).length || 0
    );
  }

  principles.forEach((principle) => {
    const total = getTotalForPrinciple(principle);
    const evaluated = getEvaluatedForPrinciple(principle);

    progressPerPrinciple[principle] = {
      evaluated: evaluated,
      total: total,
    };
  });

  return progressPerPrinciple;
}
