import { productList } from "./addProduct.js";
import { showAlert } from "./alert.js";

export function removeBtn() {
  productList.addEventListener("click", (event) => {
    if (event.target.closest(".remove-icon")) {
      const item = event.target.closest(".product");

      item.remove();
      showAlert();
    }
  });
}
