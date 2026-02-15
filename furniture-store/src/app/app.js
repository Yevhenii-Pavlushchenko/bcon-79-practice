import "./components/product-filter/product-filter";
import { loadCategories } from "./components/product-filter/product-filter";
import { renderCategories } from "./core/render";

loadCategories().then(renderCategories);
