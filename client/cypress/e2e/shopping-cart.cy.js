/// <reference types="cypress" />
context('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="cart-button"]').as('cartButton');
    cy.get('[data-test="checkout-menu"]').as('checkoutMenu');
    cy.get('[data-test="cart-count"]').as('cartCount');
  });

  it('should display the cart button', () => {
    cy.get('@cartButton').should('be.visible');
  });

  it.only('should display the checkout menu when clicking on the cart button and hide it when clicking on the close button', () => {
    cy.get('@cartButton').click();
    cy.get('@checkoutMenu').should('be.visible');
    cy.get('[data-test="checkout-menu-close-button"]').click();
    cy.get('@checkoutMenu').should('not.be.visible');
  });

  it('user can add products on the cart', () => {
    cy.get('[data-test="product-card"]').eq(0).as('firstProductCard');
    cy.get('[data-test="add-to-cart"]').eq(0).click();
    cy.get('@cartCount').should('have.text', '1');
  });
});
