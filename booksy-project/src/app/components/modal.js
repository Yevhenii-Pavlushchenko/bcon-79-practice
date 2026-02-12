import { renderBookModalContent } from "../render/bookModalContent";
import fetchBookId from "../services/fetchBookId";
import { loadLs, saveLs, STORAGE_CART_KEY } from "../utils/localStorageHelper";
import refs from "../utils/refs";

refs.booksList.addEventListener("click", onBookListClick);
refs.bookModal.addEventListener("click", onCartBtnClick);

function onBookListClick(event) {
  const currEl = event.target;

  const bookCard = currEl.closest(".js-book-card");
  if (bookCard === null) {
    return;
  }
  const {
    dataset: { bookId: id },
  } = bookCard;
  fetchBookId(id)
    .then(bookInfo => {
      renderBookModalContent(bookInfo, refs.bookModal);
      refs.bookModal.showModal();
    })
    .catch(err => {
      console.log(err.message);
    });
}

function onCartBtnClick(event) {
  const cartBooks = loadLs(STORAGE_CART_KEY) ?? [];

  const currEl = event.target;
  // const isCartBtn = currEl.nodeName === "BUTTON" && currEl.hasAttribute("data-cart-button");

  const isCartBtn = "cartButton" in currEl.dataset;

  if (!isCartBtn) return;

  const bookId = currEl.closest(".book-modal-content")?.dataset?.bookId;
  const { cartButton } = currEl.dataset;

  if (cartButton === "add") {
    cartBooks.push(bookId);
    saveLs(STORAGE_CART_KEY, cartBooks);
    currEl.textContent = "Remove from cart";
    currEl.setAttribute("data-cart-button", "remove");
    return;
  }

  if (cartButton === "remove") {
    const filteredCartBooks = cartBooks.filter(id => id !== bookId);
    saveLs(STORAGE_CART_KEY, filteredCartBooks);
    currEl.textContent = "Add to cart";
    currEl.setAttribute("data-cart-button", "add");
    return;
  }
}
