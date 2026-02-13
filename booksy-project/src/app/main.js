import { initCategories, initBooks } from "./utils/init";
import "./components/slider";
import "./components/modal";
import "./services/fetchBooksByCategory";
import "./components/categoryFilters";

initCategories();
initBooks();
