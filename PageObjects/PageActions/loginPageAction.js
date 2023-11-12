export class loginPageAction{
    username(){
        cy.get('input[data-test="username"]').type("standard_user");
    }
    password(){
        cy.get('input[data-test="password"]').type("secret_sauce");
    }
    loginButton(){
        cy.get('input[data-test="login-button"]').click();
    }
}