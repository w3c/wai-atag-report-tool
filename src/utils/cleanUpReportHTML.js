export function cleanUp(node) {
  const removeEls = Array.from(
    node.querySelectorAll("button, input, .results-label-mobile")
  );
  const remoteAttributeEls = Array.from(
    node.querySelectorAll("[class], [id], [aria-labelledby]")
  );
  const tables = Array.from(node.querySelectorAll("table"));

  removeEls.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  remoteAttributeEls.forEach((el) => {
    el.removeAttribute("id");
    el.removeAttribute("class");
    el.removeAttribute("aria-labelledby");
  });

  tables.forEach((el) => {
    const lastItems = Array.from(
      el.querySelectorAll("th:last-child, td:last-child")
    );

    el.setAttribute("border", "1");
    el.setAttribute("style", "border-collapse: collapse");

    lastItems.forEach((el) => {
      el.parentNode.removeChild(el);
    });
  });
}
