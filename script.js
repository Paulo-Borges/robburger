const lanches = [
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  {
    imagem: "./imagem/imagens.jpeg",
    titulo: "La Voiser",
    subtitulo: "Super Hamburguer",
    descricao:
      "Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    preco: "R$20,00",
  },
  // Adicione quantos lanches você precisar aqui
];

const lanchesHTML = lanches
  .map((lanche) => {
    return `
    <div class="home-lanch">
          <img src="${lanche.imagem}" alt="" />
          <h2>${lanche.titulo}</h2>
          <h1>${lanche.subtitulo}</h1>
          <h3>
           ${lanche.descricao}
          </h3>
          <div class="home-preco">
            <p>preço:<span>${lanche.preco}</span></p>
            <a class="home-btn" href="../routes/sacola.html">Adicionar</a>
          </div>
        </div>
    `;
  })
  .join("");

document.querySelector(".home-burguers").innerHTML = lanchesHTML;

function logar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email == "borgespaulo72@yahoo.com.br" && senha == "Layng2022") {
    alert("Sucesso!");
    location.href = "bebidas.html";
  } else {
    alert("email ou senha incorreto!");
  }
}
