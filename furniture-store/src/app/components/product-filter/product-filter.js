import { fetchCategories } from "../../api/categories-api";
import "./product-filter.css";

export function loadCategories() {
  return fetchCategories().then(categories => {
    return categories
      .map(({ _id, name }) => {
        return `<li class="products-filter-item">
        <button class="products-filter-btn" type="button" data-category-id="${_id}">
          ${name}
        </button>
      </li>`;
      })
      .join("");
  });
}
