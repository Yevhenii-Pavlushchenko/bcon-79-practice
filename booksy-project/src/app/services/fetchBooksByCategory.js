import axios from "axios";
import "./config";

export function fetchBooksByCategory(categoryName = "") {
  const endpoints = categoryName === "" ? "/top-books" : "/category";
  return axios
    .get(endpoints, {
      params: {
        category: categoryName,
      },
    })
    .then(responce => {
      return responce.data;
    });
}
