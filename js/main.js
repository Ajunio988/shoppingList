import { addProduct } from "./addProduct.js";
import { removeBtn } from "./removeBtn.js";

const form = document.getElementById("newProduct");
const input = document.getElementById("addProduct");

removeBtn();

input.addEventListener("input", () => {
  input.value = input.value.replace(/[^a-zA-Z\u00C0-\u00FF ]+/i, " ");
});

form.onsubmit = (event) => {
  event.preventDefault();

  const newProduct = {
    id: new Date().getTime(),
    name: input.value,
  };

  addProduct(newProduct);
  reset();
};

function reset() {
  input.value = "";

  input.focus();
}
