describe("PactoSpec", () => {


  it("should return results when searching for \"Pacto Soluções\" on Yahoo", () => {

    //visita o site do Yahoo, url padrão configurada em Base Url em Cypress Config.
   cy.visit("/");
   cy.get('#yschsp').type("Pacto Soluções{enter}");

   //Capturo todos os resultados de pesquisa, armazenando-os em uma lista, e então valido se os itens correspondem ao site da empresa.
   //Adicionalmente, deixo um assert para garantir que o título do website está correto.

   cy.get('#web > ol > li a').then(($links) => {
 
      const matchingLinks = [...$links].filter(link =>
        link.href === 'https://sistemapacto.com.br/' && link.textContent?.includes('Pacto')
      );

      // Valida que pelo menos um snippet atende aos critérios
      expect(matchingLinks.length).to.be.greaterThan(0);
    });

  })
});