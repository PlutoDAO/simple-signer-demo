/// <reference types="cypress" />

describe('home', () => {
    const url = Cypress.env('HOST');
    const testSecretKey = Cypress.env('PRIVATE');
    it('should connect with private key', () => {
        cy.visit(`${url}connect`);
        cy.get('#input-key').type(testSecretKey);
        cy.get('.private-key-btn').click();
    });
    it('should click connect button and redirect to /connnect', () => {
        cy.visit(url);
        cy.get('.connect-btn').click();
        cy.url().should('include', '/connect');
    });
    it('should click sign transaction button, show popup and go to /connect', () => {
        cy.visit(url);
        cy.get('.sign-btn').click();
        cy.get('.modal-connect-btn').click();
        cy.url().should('include', '/connect');
    });
    it('should click sign transaction button, show popup and go to /sign', () => {
        cy.visit(url);
        cy.get('.sign-btn').click();
        cy.get('.modal-sign-btn').click();
        cy.url().should('include', '/sign');
        cy.findByText('INVALID OR NULL XDR').should('exist');
    });
    it('should click sign transaction button, show popup and close it', () => {
        cy.visit(url);
        cy.get('.sign-btn').click();
        cy.get('.close-button').click();
    });
});
