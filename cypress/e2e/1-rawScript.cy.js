/// <reference types = "Cypress" />

describe('When user access the Swag Labs:', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit(Cypress.env("baseUrl"));
        cy.clearAllLocalStorage
    });
    
    it('User should be able to access the web, do log in and add an item to cart', () => {
        // assert access the web
        cy.get('.login_logo').should('contain', 'Swag Labs');

        //user login
        cy.get('input[data-test="username"]').type('standard_user');
        cy.get('input[data-test="password"]').type('secret_sauce');
        cy.get('input[data-test="login-button"]').contains('Login').click();
        //assert success login
        cy.url().should('include','/inventory');

        //add an item to cart
        cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').contains('Add to cart').click();
        //assert success add item
        cy.get('button[data-test="remove-sauce-labs-backpack"]').should('contain', 'Remove');

    });
});