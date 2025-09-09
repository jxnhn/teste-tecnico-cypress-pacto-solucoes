# Cypress Pacto Soluções

Projeto de automação de testes end-to-end utilizando [Cypress](https://www.cypress.io/) para validar buscas relacionadas à empresa Pacto Soluções, conforme solicitado em teste técnico.

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

Este projeto automatiza a validação da busca pelo termo "Pacto Soluções" no Yahoo, garantindo que o site oficial da empresa apareça corretamente nos resultados.

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
  3. Busca nos snippets todos os resultados que contêm uma âncora para o site da empresa.

---

## Decisões Técnicas

Diante desse cenário, as decisões de implementação priorizam clareza e rastreabilidade, reconhecendo que ambientes externos impõem limites naturais à resiliência dos testes. O teste foi estruturado para maximizar estabilidade e confiabilidade dentro das possibilidades do contexto, refletindo uma abordagem consciente dos trade-offs inerentes à automação sobre plataformas de terceiros.

No contexto do Cypress, optou-se por asserts baseados em atributos e textos que tendem a ser mais estáveis, evitando dependência de títulos ou elementos sujeitos a mudanças frequentes. O objetivo é garantir que o teste seja útil como ferramenta de validação, sem gerar falsos negativos por alterações fora do controle do projeto.

---

## Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [Node.js](https://nodejs.org/)