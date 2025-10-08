const removeProductButtons = document.querySelectorAll(".promo-foto");

for (var i = 0; i < removeProductButtons.length; i++) {
  removeProductButtons[i].addEventListener("click", function (event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
  });
}

function updateTotal() {
  let totalPedido = 0;
  let totalItem = 0;
  const cartProducts = document.querySelectorAll(".promo-bg");
  for (var i = 0; i < cartProducts.length; i++) {
    const productsPriceText =
      cartProducts[i].querySelector("li.verm").innerText;

    const productsPrice = parseFloat(
      productsPriceText.replace("R$", "").replace(",", ".")
    );

    const productsQuantity = parseInt(
      cartProducts[i].querySelector("li.quantidade")[0].innerText
    );

    totalPedido += productsPrice * productsQuantity;

    totalItem += productsQuantity;
  }
  totalPedido = totalPedido.toFixed(2).replace(".", ",");

  document.querySelector(".table-item3").innerText = "R$" + totalPedido;
  document.querySelector(".table-item1").innerText = totalItem;
}

function updateQuantity(productContainer, change) {
  // Encontra o elemento da quantidade
  const quantityElement = productContainer.querySelector("li.quantidade");

  // Converte a quantidade atual para número
  let currentQuantity = parseInt(quantityElement.innerText);

  // Calcula a nova quantidade
  let newQuantity = currentQuantity + change;

  // Garante que a quantidade mínima é 1
  if (newQuantity < 1) {
    newQuantity = 1;

    // Opcional: Se a intenção é remover o item quando a quantidade chega a zero,
    // você pode usar o código de remoção aqui (como no "promo-foto")
    if (change === -1) {
      productContainer.remove();
      updateTotal();
      return; // Sai da função após remover
    }
  }

  // 1. Atualiza o texto da quantidade
  quantityElement.innerText = newQuantity;

  // 2. Recalcula e atualiza o subtotal individual (li.verm1)
  const unitPriceText = productContainer.querySelector("li.verm").innerText;
  const unitPrice = parseFloat(
    unitPriceText.replace("R$", "").replace(",", ".")
  );

  const newSubtotal = newQuantity * unitPrice;
  let formattedSubtotal = newSubtotal.toFixed(2).replace(".", ",");
  productContainer.querySelector("li.verm1").innerText =
    "R$ " + formattedSubtotal;

  // 3. Atualiza o total geral do carrinho
  updateTotal();
}

function setupQuantityButtons() {
  // Seleciona todos os botões de AUMENTAR (+)
  const increaseButtons = document.querySelectorAll(".promo-valor li.mais");
  // Seleciona todos os botões de DIMINUIR (-)
  const decreaseButtons = document.querySelectorAll(".promo-valor li.menos");

  // Adiciona o ouvinte de evento para AUMENTAR
  increaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Usa .closest() para encontrar o container principal do produto (.promo-bg)
      const productContainer = this.closest(".promo-bg");
      updateQuantity(productContainer, 1); // Passa +1 para aumentar
    });
  });

  // Adiciona o ouvinte de evento para DIMINUIR
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Usa .closest() para encontrar o container principal do produto (.promo-bg)
      const productContainer = this.closest(".promo-bg");
      updateQuantity(productContainer, -1); // Passa -1 para diminuir
    });
  });
}

// Inicializa a configuração dos botões quando o script é carregado
setupQuantityButtons();

// Garante que o total inicial da página seja calculado corretamente ao carregar
document.addEventListener("DOMContentLoaded", updateTotal);
