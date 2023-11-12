// IMPORT THE PAGE OBJECTS

/// <reference types="Cypress"/>

import { loginPageAction } from '../../PageObjects/PageActions/loginPageAction'

const loginAction = new loginPageAction

describe('When accessing Swag Labs:', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit(Cypress.env("baseUrl"));
        cy.clearLocalStorage();
    });

    it('User should be able to access the url, login, and add an item to cart', () => {
        //assert access baseUrl
        cy.verifyVisit('Swag Labs');

        //user login - page object
        loginAction.username();
        loginAction.password();
        loginAction.loginButton();
        // assert login
        cy.successLogin('/inventory');

        // add an item to cart
       cy.addItem('Add to cart')
       // assert success add to cart
       cy.successAddToCart('Remove');

    });
});

======================================================================

// EXPORT THE PAGE OBJECTS

export class loginPage {
    userName(){
        cy.get('input[data-test="username"]').type('standard_user');
    }
    password(){
        cy.get('input[data-test="password"]').type('secret_sauce');
    }

    loginButton(){
        cy.get('input[data-test="login-button"]').contains('Login').click();
    }
}




# demo-SwagLabs
