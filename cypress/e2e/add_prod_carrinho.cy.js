describe('Adicionar Produto ao Carrinho', () => {
    it('Deve adicionar um produto ao carrinho com sucesso', () => {
      cy.visit('/');
  
      // Login
      cy.get('input#user-name').type('standard_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
  
      // Selecionar um produto e adicionar ao carrinho
      cy.get('.inventory_item').first().find('button').click();
  
      // Verificar atualização do carrinho
      cy.get('.shopping_cart_link').should('contain.text', '1');
    });
  });
  