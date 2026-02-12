export const STORAGE_CART_KEY = "book-cart";

export function saveLs(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.log(error.message);
  }
}

export function loadLs(key) {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue) {
      return JSON.parse(serializedValue);
    }
  } catch (error) {
    console.log(error.message);
  }
}
