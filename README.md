# Teste Front-End Júnior — Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de **Estagiário Front-End Júnior - Econverse**.

A aplicação reproduz uma página de e-commerce com vitrine de produtos, categorias, banners promocionais, marcas e rodapé.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass (SCSS)
- HTML5
- CSS3

## Funcionalidades

- Layout responsivo para diferentes tamanhos de tela.
- Exibição de produtos consumidos por meio de uma API.
- Navegação horizontal entre os produtos.
- Modal com detalhes do produto selecionado.
- Controle de quantidade de produtos no modal.
- Seleção visual de categorias.
- Seções promocionais e navegação por marcas.
- Formulário de inscrição na newsletter.

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Dev-Vitor-Almeida/teste-front-end.git
```

### 2. Acesse a pasta do projeto

```bash
cd teste-front-end
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O Vite disponibilizará um endereço local no terminal. Acesse esse endereço pelo navegador para visualizar a aplicação.

## Build de produção

Para gerar os arquivos otimizados para produção, execute:

```bash
npm run build
```

Os arquivos gerados ficarão disponíveis na pasta `dist`.

## API

Os produtos são carregados a partir da API disponibilizada:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

Durante o desenvolvimento, foi utilizado um proxy configurado no Vite para realizar as requisições à API.

## Autor

**Vitor Almeida da Silva**

[GitHub — Dev-Vitor-Almeida](https://github.com/Dev-Vitor-Almeida)