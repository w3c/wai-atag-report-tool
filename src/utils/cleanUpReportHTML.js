export function cleanUp(node) {
  const removeEls = Array.from(
    node.querySelectorAll("button, input, .results-label-mobile")
  );
  const tables = Array.from(node.querySelectorAll("table"));
  const emptyValues = Array.from(node.querySelectorAll("span.no-result"));
  const remoteAttributeEls = Array.from(
    node.querySelectorAll("[class], [id], [aria-labelledby]")
  );

  removeEls.forEach((el) => {
    el.parentNode.removeChild(el);
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

  emptyValues.forEach((el) => {
    const dd = el.closest("dd");
    const dt = dd.previousElementSibling;

    dt.parentNode.removeChild(dt);
    dd.parentNode.removeChild(dd);
  });

  remoteAttributeEls.forEach((el) => {
    el.removeAttribute("id");
    el.removeAttribute("class");
    el.removeAttribute("aria-labelledby");
  });
}
