export const productList = document.querySelector("ul");

export function addProduct(newProduct) {
  try {
    const productItem = document.createElement("li");
    productItem.classList.add("product");

    const check = document.createElement("input")
    check.setAttribute("type", "checkbox")

    const productName = document.createElement("span");
    productName.textContent = newProduct.name.toUpperCase();

    const removeIcon = document.createElement("ion-icon")
    removeIcon.setAttribute("name", "trash-outline")
    removeIcon.setAttribute("id", "remove-icon")
    removeIcon.classList.add("remove-icon")

    productItem.append(check, productName, removeIcon)
    productList.append(productItem)
  } catch (error) {
    console.error("Erro ao adicionar item!", error)
  }
};