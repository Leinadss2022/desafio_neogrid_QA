describe('Remover Produto do Carrinho', () => {
    it('Deve remover um produto do carrinho com sucesso', () => {
      cy.visit('/');
  
      // Login
      cy.get('input#user-name').type('standard_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
  
      // Adicionar um produto ao carrinho
      cy.get('.inventory_item').first().find('button').click();
  
      // Navegar ao carrinho e remover o produto
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').find('button').click();
  
      // Verificar se o carrinho está vazio
      cy.get('.cart_list').should('not.have.descendants', '.cart_item');
    });
  });
  