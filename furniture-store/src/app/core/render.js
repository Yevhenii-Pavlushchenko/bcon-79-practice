export function renderCategories(markup) {
  const filterEL = document.querySelector(".js-products-filter");
  filterEL.insertAdjacentHTML("beforeend", markup);
}
