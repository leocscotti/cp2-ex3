# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Etapas para a confecção de Rotas no projeto:
- 1 - Instalar as dependências do react-router-dom com npm install.
- 2 - Criar as rotas/páginas na pasta routes:[Home, Produtos, EditarProdutos, Erro404]
- 3 - Importar o createBrowserRouter e RouterProvider da biblioteca react-router-dom em main.jsx e também as rotas/paginas.
- 4 - Criando o objeto de rotas e adicionando apenas a rota App e exibindo com o RouterProvider.
- 5 - Adicionando o atributo children no objeto de rotas e adicionar as rotas Home, Produtos, EditarProdutos e Erro404.
- 6 - Alterando o componente que será renderizado pelo ReactDom.render para o RouterProvider com o objeto de rotas(router).
- 7 - Iniciando o componente Outlet para renderizar as rotas filhas.
- 8 - Criando rotas com o componente Link.
- 9 - Criar um módulo de representação de um objeto de produto com o nome de ListaProduto, este objeto vai ter os seguintes atributos: id, nome, preco e descricao.
- 10 - Recuperando a lista de produtos do arquivo ListaProdutos.jsx e adicionando no estado do componente Produtos.
- 11 - Em produtos vamos criar uma tabela para exibir os produtos e adicionar um link para editar o produto.
- 12 - Adicionando CSS inline nos elementos da tabela com style objects.