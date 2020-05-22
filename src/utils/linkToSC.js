export function linkToSC(num) {
  const principle =
    num.substring(0, 1) === "A"
      ? num.substring(2, 3)
      : parseInt(num.substring(2, 3), 10) + 4;
  const criterion = num.replace(/\./g, "").toLowerCase();

  return `/principle/${principle}#${criterion}`;
}
