/// <reference types = "Cypress" />

import { loginPageAction } from "../../PageObjects/PageActions/loginPageAction";

const loginPage = new loginPageAction

describe('When user access the Swag Labs:', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit(Cypress.env("baseUrl"));
        cy.clearAllLocalStorage
    });
    
    it('User should be able to access the web, do log in and add an item to cart', () => {
        // assert access the web
        cy.accessWeb('Swag Labs');

        //user login
        loginPage.username();
        loginPage.password();
        loginPage.loginButton();

        //assert success login
        cy.successLogin('/inventory');

        //add an item to cart
        cy.addItem('Add to cart');
        //assert success add item
        cy.successAddItem('Remove');

    });
});