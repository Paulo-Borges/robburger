const lanches = [
  {
    imagem: "../imagem/hamb1.jpeg",
    marca: "La Vosier",
    classe: "Lanches",
    tipo: "Cubanaca",
    argumento:
      "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico..",
    preco: "R$ 16,00",
  },
  {
    imagem: "../imagem/hamb2.jpeg",
    marca: "Casa da Batata",
    classe: "Lanches",
    tipo: "Super Kit",
    argumento:
      "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico..",
    preco: "R$ 26,00",
  },
  {
    imagem: "../imagem/hamb3.jpeg",
    marca: "Via expresso",
    classe: "Lanches",
    tipo: "Millenium",
    argumento:
      "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico.",
    preco: "R$ 46,00",
  },
  {
    imagem: "../imagem/hamb4.jpeg",
    marca: "Lanches artesanais",
    classe: "Lanches",
    tipo: "in nature",
    argumento:
      "Uma delícia de lanche, sabor sem igual, um gosto diferente de tudo que já provei. Super indico.",
    preco: "R$ 29,00",
  },
  {
    imagem: "../imagem/hamb5.jpeg",
    marca: "Cubanacan",
    classe: "Lanches",
    tipo: "Natchos",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 26,00",
  },
  {
    imagem: "../imagem/hamb6.jpeg",
    marca: "Body Fitnes",
    classe: "Bebidas",
    tipo: "Agua com gás",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 9,00",
  },
  {
    imagem: "../imagem/hamb7.jpeg",
    marca: "Latinos Lanches",
    classe: "Lanches",
    tipo: "Presuntinhos",
    argumento:
      "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 16,00",
  },
  {
    imagem: "../imagem/hamb8.jpeg",
    marca: "Casa da Batata",
    classe: "Lanches",
    tipo: "Super Kit",
    argumento:
      "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 26,00",
  },
  {
    imagem: "../imagem/hamb9.jpeg",
    marca: "Via expresso",
    classe: "Lanches",
    tipo: "Café com amor",
    argumento:
      "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 18,00",
  },
  {
    imagem: "../imagem/hamb10.jpeg",
    marca: "Siga bem cainhoneiro",
    classe: "Lanches",
    tipo: ">Enguiça blidado",
    argumento:
      "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 30,00",
  },
  {
    imagem: "../imagem/hamb11.jpeg",
    marca: "Vida Saudavel",
    classe: "Lanches",
    tipo: "Pãozinho a Paulista",
    argumento:
      "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 14,00",
  },
  {
    imagem: "../imagem/hamb12.jpeg",
    marca: "Pão de Queijo",
    classe: "Lanches",
    tipo: "Expressinho pra viagem",
    argumento:
      "Uma delícia de lanche, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 20,00",
  },
];

const lanchesHTML = lanches.map((lanche) => {
  return `
            <div class="bebidas-base">
             <div>
                <img src=${lanche.imagem} alt="">
            </div>
            <div class="bebidas-grid"> 
            <div class="bebidas-item">  
            <p class="bebidas-marca" >${lanche.marca}</p>
            <p class="bebidas-classe" >${lanche.classe}</p>
            
            <p class="bebidas-tipo" >${lanche.tipo}</p>
            <p class="bebidas-arg" >
                ${lanche.argumento}}
            </p>
            <ul>
                <li><p class="bebidas-preco">${lanche.preco}</p></li>
                <li><a class="btn-ligad" href="./lanches.html">Adicionar</a></li>
            </ul>
            </div>     <!-- aqui grid pra todos fim -->  
        </div>
        </div>
    `;
});

document.querySelector(".bebidas-setor").innerHTML = lanchesHTML;
