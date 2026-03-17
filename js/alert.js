const footer = document.querySelector("footer");
const close = document.querySelector("#close");

let timer;

close.addEventListener("click", () => {
  clearTimeout(timer);
  footer.classList.remove("visible");
});

export function showAlert() {
  clearTimeout(timer);
  footer.classList.add("visible");
  
  timer = setTimeout(() => footer.classList.remove("visible"), 3000);
}
