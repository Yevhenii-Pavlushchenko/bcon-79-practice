import { onFilterClick } from "../components/product-filter/product-filter.handlers";

export function renderCategories(markup) {
  const filterEl = document.querySelector(".js-products-filter");
  filterEl.insertAdjacentHTML("beforeend", markup);

  filterEl.addEventListener("click", event => {
    const currEl = event.target.closest(".products-filter-btn");
    if (!currEl) return;

    const id = currEl.dataset.categoryId ?? "";

    onFilterClick(id);
  });
}

export function renderFurnitures(markup) {
  const productList = document.querySelector(".js-product-list");
  productList.innerHTML = markup;
}
