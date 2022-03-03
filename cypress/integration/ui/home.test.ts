/// <reference types="cypress" />

describe('home', () => {
    // const url = Cypress.env('HOST');

    it('should pass', () => {
        console.log('GH actions');
    });

    it('should click sign transaction button, show popup and open window /connect', () => {
        cy.visit('https://localhost:3000');
        cy.get('.sign-btn').click();
        cy.get('.modal-connect-btn').click();
    });

    it('should click sign transaction button, show popup and open window /sign', () => {
        cy.visit('https://localhost:3000');
        cy.get('.sign-btn').click();
        cy.get('.modal-sign-btn').click();
    });

    it('should click sign transaction button, show popup and close it', () => {
        cy.visit('https://localhost:3000');
        cy.get('.sign-btn').click();
        cy.get('.close-button').click();
    });
});
