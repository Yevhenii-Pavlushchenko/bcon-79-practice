import { loadLs, STORAGE_CART_KEY } from "./localStorageHelper";

export function checkCartLs(bookid) {
  const cartBooks = loadLs(STORAGE_CART_KEY) ?? [];
  const btnContent = cartBooks.find(item => item === bookid)
    ? "Remove from cart"
    : "Add to cart";
  const btnDataAction = cartBooks.find(item => item === bookid)
    ? "remove"
    : "add";
  console.log(btnContent, btnDataAction);
  return { btnContent, btnDataAction };
}
