import { request } from "./http";

export function fetchCategories() {
  return request("/categories");
}

export function fetchFurnituresId(id) {
  return request(`/furnitures/${id}`);
}
export function fetchFeedbacks() {
  return request("/feedbacks");
}
export function fetchOrders() {
  return request("/orders");
}
