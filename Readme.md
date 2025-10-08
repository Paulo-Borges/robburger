# 🍔 Burguer App 🍟

Olá! Seja bem-vindo(a) ao repositório do **Burguer App**, sua lanchonete virtual favorita!

Este projeto é uma aplicação web simples, focada em **HTML, CSS e JavaScript puros**, que simula um cardápio online com promoções, lanches, bebidas e um carrinho de compras básico. Perfeito para quem está aprendendo a estruturar e estilizar páginas web e a manipular o DOM com JS!

## 🚀 Como Funciona a Magia?

O projeto é dividido em páginas HTML que simulam a navegação de um e-commerce de fast-food.

### 🏠 Página Principal (`index.html` - Promoções)

É a porta de entrada! Aqui você encontra:

- **Header Chamativo:** Um banner de destaque (`.home-header`) com uma chamada para ação.
- **Cardápio de Lanches:** Uma seção (`.home-burguer`) onde os lanches são carregados dinamicamente via **JavaScript** a partir do array `lanches`.
- **Destaque da Promoção:** Uma área para a promoção do momento (o famoso "40% off").
- **Rodapé:** Com links para redes sociais e uma seção de Newsletter.

### 🛒 Sacola/Carrinho (`routes/sacola.html`)

Onde a mágica do cálculo acontece!

- Você vê uma lista estática de itens (a água e o Kit Cancun, por enquanto 😉).
- O arquivo **`sacola.js`** (que no seu código está junto do `lanches.js` e `login.js`, mas é boa prática separar!) gerencia as quantidades e o total:
  - As funções **`setupQuantityButtons()`** e **`updateQuantity()`** permitem que você clique em **(+)** e **(-)** para mudar a quantidade dos produtos.
  - A função **`updateTotal()`** é a chef de cozinha: ela percorre todos os itens do carrinho, calcula o subtotal e atualiza o **Total Geral** e o **Nº de itens** na tabela.
  - Curiosamente, o botão de remover item é a própria imagem do produto (`.promo-foto`)! Um clique nela remove o item do pedido.

### 🍔 Lanches e Outras Páginas

As páginas de **Lanches** (`routes/lanches.html`), **Bebidas**, **Contato**, **Login** e **Cadastro** fornecem a navegação completa. O carregamento dos lanches em `lanches.html` (que utiliza o mesmo array `lanches` do JS) é feito no elemento `.bebidas-base` através do script.

## 🛠️ Tecnologias Usadas

Este projeto é um show de bola do bom e velho Front-end raiz!

| Tecnologia             | Função                                                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **HTML5**              | Estrutura de todas as páginas e do conteúdo.                                                                    |
| **CSS3**               | Estilização, layout responsivo (`@media` queries), Grid Layout (`display: grid`) e Flexbox.                     |
| **Vanilla JavaScript** | A lógica por trás da atualização do carrinho, manipulação do DOM para exibir os lanches e a simulação de login. |
| **Google Fonts**       | Uso da fonte **Roboto** para um visual limpo e moderno.                                                         |

## 📂 Estrutura do Projeto

Para você se localizar, a estrutura de pastas é mais ou menos assim (baseado nos caminhos dos arquivos):

├── index.html
├── global.css
├── styles.css
├── index.css
├── script.js (Contém o JS dos lanches e o login)
├── imagem/ (Onde estão todas as fotos e ícones)
│ ├── Fast Food.png
│ └── ...
└── routes/
├── bebidas.html
├── contato.html
├── lanches.html
├── login.html
├── sacola.html
├── signup.html
├── bebidas.css
├── contato.css
├── lanches.css
├── login.css
├── sacola.css
└── sacola.js (Onde está a lógica do carrinho, junto com o script.js)

## 🔑 Detalhe Extra: O Login Secreto

Existe um **login mágico** no seu script!

Para entrar na simulação e navegar (pela função `logar()` no JS), você pode usar:

| Campo      | Valor                   |
| :--------- | :---------------------- |
| **E-mail** | `devborges50@gmail.com` |
| **Senha**  | `Layng2022`             |

Se a senha estiver errada, relaxa, aparece um `alert()` na tela! 😉

---

Gostou do projeto? Dê um ⭐ no repositório! Se tiver alguma ideia, sinta-se à vontade para
