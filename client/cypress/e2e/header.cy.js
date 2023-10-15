/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-testid="top-header-action-button-auth"]').as('authButton');
    cy.get('[data-testid="top-header-action-button-wishlist"]').as('wishlistButton');
  });

  it('should display the top header', () => {
    cy.get('[data-testid="top-header"]').should('be.visible');
  });
  it('should display the correct header logo', () => {
    cy.get('[data-testid="top-header-brand"]').should('contain', 'NutriNosh');
  });

  it('shlould display the wishlist button and to be clickable', () => {
    cy.get('@wishlistButton').should('be.visible');
    cy.get('@wishlistButton').click();

    cy.url().should('include', '/wishlist');
  });

  it('should display the sign in / sign up button and to be clickable and after click to show the auth form', () => {
    cy.get('@authButton').should('be.visible');
    cy.get('@authButton').click();
    cy.get('[data-testid="auth-form"]').should('be.visible');
  });
});
