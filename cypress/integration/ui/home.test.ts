/// <reference types="cypress" />

describe('home', () => {
    const url = Cypress.env('HOST');

    it('should click connect button and redirect to /connnect', () => {
        cy.visit(url);
        cy.get('.connect-btn').click();
        cy.url().should('include', '/connect');
    });

    it('should click sign transaction button, show popup and open window /connect', () => {
        cy.visit(url);
        cy.get('.sign-btn').click();
        cy.get('.modal-connect-btn').click();
    });

    it('should click sign transaction button, show popup and open window /sign', () => {
        cy.visit(url);
        cy.get('.sign-btn').click();
        cy.get('.modal-sign-btn').click();
    });

    it('should click sign transaction button, show popup and close it', () => {
        cy.visit(url);
        cy.get('.sign-btn').click();
        cy.get('.close-button').click();
    });
});
