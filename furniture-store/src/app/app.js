import { loadCategories } from "./components/product-filter/product-filter";
import { renderCategories, renderFurnitures } from "./core/render";
import { loadFurnitures } from "./components/product-card/products-card";

loadCategories().then(renderCategories);
loadFurnitures().then(renderFurnitures);
