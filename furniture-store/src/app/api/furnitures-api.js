import { request } from "./http";

export function fetchFurnitures(category = "") {
  return category === ""
    ? request("/furnitures")
    : request("/furnitures", { params: { category } });
}
