describe('Realizar Checkout', () => {
  it('Deve realizar o checkout com sucesso', () => {
    cy.visit('/');

    // Login
    cy.get('input#user-name').type('standard_user');
    cy.get('input#password').type('secret_sauce');
    cy.get('input#login-button').click();

    // Adicionar um produto ao carrinho
    cy.get('.inventory_item').first().find('button').click();

    // Navegar para o carrinho e iniciar o checkout
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();

    // Preencher dados do usuário
    cy.get('input#first-name').type('Daniel');
    cy.get('input#last-name').type('Souza');
    cy.get('input#postal-code').type('96060-000');
    cy.get('input#continue').click();

    // Finalizar o pedido
    cy.get('button#finish').click(); // Certifique-se de que o botão Finish tem o seletor correto

    // Verificar se a página de confirmação foi carregada
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain.text', 'Thank you for your order');
  });
});
