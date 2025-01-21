describe('Ordenação de Produtos', () => {
    it('Deve ordenar os produtos por preço (menor para maior)', () => {
      cy.visit('/');
  
      // Login
      cy.get('input#user-name').type('standard_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
  
      // Selecionar ordenação por preço
      cy.get('.product_sort_container').select('Price (low to high)');
  
      // Verificar se os produtos estão ordenados corretamente
      cy.get('.inventory_item_price').then(($prices) => {
        const prices = [...$prices].map((price) => parseFloat(price.innerText.replace('$', '')));
        expect(prices).to.eql(prices.sort((a, b) => a - b));
      });
    });
  });
  