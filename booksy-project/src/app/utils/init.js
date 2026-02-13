import { renderCategories } from "../render/categories";
import refs from "./refs";
import { fetchBookCategories } from "../services/getBooksCategories";
import { renderBooks } from "../render/books";
import { fetchBooksByCategory } from "../services/fetchBooksByCategory";

export function initCategories() {
  fetchBookCategories().then(data => {
    renderCategories(data, refs.categoryList);
  });
}

export function initBooks() {
  fetchBooksByCategory().then(data => {
    renderBooks(data, refs.booksList);
  });
}
