const removeProductButtons = document.querySelectorAll(".promo-foto");

for (var i = 0; i < removeProductButtons.length; i++) {
  removeProductButtons[i].addEventListener("click", function (event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
  });
}

function updateTotal() {
  let totalPedido = 0;
  const cartProducts = document.querySelectorAll(".promo-bg");
  for (var i = 0; i < cartProducts.length; i++) {
    console.log(cartProducts[i]);
    const productsPrice = cartProducts[i]
      .querySelectorAll("li.verm")[0]
      .innerText.replace("R$", "")
      .replace(",", ".");
    const productsQuantity =
      cartProducts[i].querySelectorAll("li.quantidade")[0].innerText;
    totalPedido += productsPrice * productsQuantity;
  }
  totalPedido = totalPedido.toFixed(2);
  totalPedido = totalPedido.replace(".", ",");
  document.querySelector(".table-item3").innerText = "R$" + totalPedido;
}

function aumentoTotal() {
  let totalClick = 0;
  const cartProducts = document.querySelectorAll(".promo-bg");
  for (var i = 0; i < cartProducts.length; i++) {
    console.log(cartProducts[i]);
    const productsMaisClick =
      cartProducts[i].querySelector("li.mais")[0].innerText;
    console.log(productsMaisClick);
    productsMaisClick = totalClick + 1;
  }
  doccument.querySelector("li.quantidade").innerText = totalClick;
}
