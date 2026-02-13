import { renderBooks } from "../render/books";
import { fetchBooksByCategory } from "../services/fetchBooksByCategory";
import refs from "../utils/refs";

refs.categoryList.addEventListener("click", onCategoryClick);

function onCategoryClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const categoryName = event.target.dataset.category;
  fetchBooksByCategory(categoryName).then(books => {
    const isAll = categoryName === "" ? true : false;
    renderBooks(books, refs.booksList, isAll);
  });
}
