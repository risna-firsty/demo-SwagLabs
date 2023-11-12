// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//

// assert access the web
Cypress.Commands.add("accessWeb", (label) =>{
    cy.get('.login_logo').should('contain', label);
})

//user login
Cypress.Commands.add("loginApp", (username, password)=>{
    cy.get('input[data-test="username"]').type(username);
    cy.get('input[data-test="password"]').type(password);
    cy.get('input[data-test="login-button"]').contains('Login').click();
})

//assert success login
Cypress.Commands.add("successLogin", (label)=>{
    cy.url().should('include',label);
})

//add an item to cart
Cypress.Commands.add("addItem", (label)=>{
    cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').contains(label).click();
})

//assert success add item
Cypress.Commands.add("successAddItem", (label)=>{
    cy.get('button[data-test="remove-sauce-labs-backpack"]').should('contain', label);
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })