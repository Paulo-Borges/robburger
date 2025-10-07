const bebidas = [
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "La Vosier",
    classe: "Bebidas",
    tipo: "Cubanaca",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 20,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Carolina Herrera",
    classe: "Bebidas",
    tipo: "Amanhecer",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 25,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Casa do café",
    classe: "Bebidas",
    tipo: "Café com amor",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 18,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Doces Supremo",
    classe: "Bebidas",
    tipo: "Milk shake",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 25,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Body Fitnes",
    classe: "Bebidas",
    tipo: "Suco de melancia",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 10,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Body Fitnes",
    classe: "Bebidas",
    tipo: "Agua com gás",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 9,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "La Vosier",
    classe: "Bebidas",
    tipo: "Cubanaca",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 20,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Carolina Herrera",
    classe: "Bebidas",
    tipo: "Amanhecer",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 25,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Casa do café",
    classe: "Bebidas",
    tipo: "Café com amor",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 18,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Doces Supremo",
    classe: "Bebidas",
    tipo: "Milk shake",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 25,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Body Fitnes",
    classe: "Bebidas",
    tipo: "Suco de melancia",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 10,00",
  },
  {
    imagem: "../imagem/cubanacan.jpeg",
    marca: "Body Fitnes",
    classe: "Bebidas",
    tipo: "Agua com gás",
    argumento:
      "Uma delícia de bebida, sabor sem igual um gosto diferente de tudo que já provei. Super recomendo.",
    preco: "R$ 9,00",
  },
];

const bebidasHTML = bebidas.map((bebidas) => {
  return `
            <div class="bebidas-base" key={index}>
             <div>
                <img src=${bebidas.imagem} alt="">
            </div>
            <div class="bebidas-grid"> 
            <div class="bebidas-item">  
            <p class="bebidas-marca" >${bebidas.marca}</p>
            <p class="bebidas-classe" >${bebidas.classe}</p>
            
            <p class="bebidas-tipo" >${bebidas.tipo}</p>
            <p class="bebidas-arg" >
                ${bebidas.argumento}}
            </p>
            <ul>
                <li><p class="bebidas-preco">${bebidas.preco}</p></li>
                <li><a class="btn-ligad" href="./lanches.html">Adicionar</a></li>
            </ul>
            </div>     
        </div>
        </div>
    `;
});

document.querySelector(".bebidas-setor").innerHTML = bebidasHTML;
