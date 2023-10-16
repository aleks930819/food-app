/// <reference types="cypress" />

context('Product Search', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-testid="search-form"]').as('searchForm');
    cy.get('[data-testid="search-input"]').as('searchInput');
    cy.get('[data-testid="product-card"]').as('productCard');
  });
  it('should call the API with the correct query parameters when the user clicks on the search button', () => {});

  it('should display the search results', () => {
    cy.get('@searchInput').type('test');

    cy.get('@searchForm').submit();

    cy.get('@productCard').should('be.visible');
  });

  it('should update the query paramter', () => {
    cy.get('@searchInput').type('test');

    cy.get('@searchForm').submit();

    cy.url().should('include', '?name=test');
  });
});
