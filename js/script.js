const buttons = document.querySelectorAll(".categories button");
const cardsContainers = document.querySelectorAll(".cards-products");

// Deixa apenas chair visível no começo
cardsContainers.forEach((container) => {
  if (container.classList.contains("chair")) {
    container.style.display = "grid";
  } else {
    container.style.display = "none";
  }
});

// Marca o botão "Chair" como ativo
buttons[0].classList.add("active");

// Lógica para troca de categorias
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.textContent.toLowerCase();

    cardsContainers.forEach((c) => (c.style.display = "none"));

    const selected = document.querySelector(`.cards-products.${category}`);
    if (selected) selected.style.display = "grid"; // mantém o grid
  });
});
