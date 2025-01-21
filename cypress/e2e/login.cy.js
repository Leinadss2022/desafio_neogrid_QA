describe('Teste de Login', () => {
    it('Deve realizar login com credenciais válidas', () => {
      cy.visit('/');
  
      // Inserir credenciais válidas
      cy.get('input#user-name').type('standard_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
  
      // Verificar redirecionamento e título da página
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('contain.text', 'Products');
    });
  });
  