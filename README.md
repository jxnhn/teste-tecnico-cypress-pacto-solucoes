# Cypress Pacto Soluções

Projeto de automação de testes end-to-end utilizando [Cypress](https://www.cypress.io/) para validar buscas relacionadas à empresa Pacto Soluções, como solicitado no teste técnico da empresa.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar os Testes](#como-executar-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Detalhes do Teste](#detalhes-do-teste)
- [Decisões Técnicas](#decisões-técnicas)
- [Referências](#referências)

---

## Sobre o Projeto

Este projeto tem como objetivo automatizar o teste de busca pelo termo "Pacto Soluções" no Yahoo, validando se o site oficial da empresa aparece corretamente como o primeiro nos resultados.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Cypress](https://www.cypress.io/) (instalado como dependência do projeto)

---

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/cypress-pacto-solucoes.git
   cd cypress-pacto-solucoes
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn install
   ```

---

## Como Executar os Testes

### Modo Interativo (GUI)
```sh
npx cypress open
```
Escolha o arquivo `pactospec.cy.js` para rodar o teste.

### Modo Headless (Terminal)
```sh
npx cypress run --spec "cypress/e2e/pactospec.cy.js"
```

---

## Estrutura do Projeto

```
cypress-pacto-solucoes/
├── cypress/
│   ├── e2e/
│   │   └── pactospec.cy.js   # Arquivo principal de teste
│   └── support/
├── cypress.config.js         # Configuração do Cypress (baseUrl, etc)
├── package.json
└── README.md
```

---

## Detalhes do Teste

- **Arquivo:** `cypress/e2e/pactospec.cy.js`
- **Fluxo testado:**  
  1. Acessa a página inicial do Yahoo.
  2. Realiza uma busca por "Pacto Soluções".
  3. Valida se o primeiro resultado contém o texto "Pacto" e se o link corresponde ao domínio oficial da empresa.

## Decisões Técnicas 

Os asserts são fundamentados no atributo href do primeiro snippet de resultado, por ser mais robusto. Como os snippets podem sofrer alterações dinâmicas pelo motor de busca, o teste valida apenas parte do texto do link ("Pacto") para evitar falsos negativos. Assim, o teste garante que o primeiro resultado é relevante e aponta para o site correto, sem depender de alterações na formatação do snippet.


---

## Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [Node.js](https://nodejs.org/)