describe("PactoSpec", () => {


  it("should return results when searching for \"Pacto Soluções\" on Yahoo", () => {

    //visita o site do Yahoo, url padrão configurada em Base Url em Cypress Config.
   cy.visit("/");
   cy.get('#yschsp').type("Pacto Soluções{enter}");

   //Capturo todos os resultados de pesquisa, armazenando-os em uma lista, e então valido se o primeiro item corresponde ao site da empresa.
   //Adicionalmente, deixo um assert para garantir que o título do website está correto.

  cy.get('#web > ol > li').first()
  .find('a')
  .should('contain.text', 'Pacto')
  .and('have.attr', 'href')
  .and('include', 'sistemapacto.com.br');


  })
});