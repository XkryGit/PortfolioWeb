/// <reference types="cypress" />

describe('Test of user navegations spec', () => {
  it('Navegate and clicking on an links', () => {
    cy.visit('http://localhost:8080/');
    cy.get('div img#bg').trigger('mouseover', { force: true });
    cy.get('img[data-testid="blinkgalaxy"]').click();
    cy.contains('Blink Galaxy Web').should('be.visible');
    cy.get('div#banner img#banner').click();
    cy.contains('Blink Galaxy Web').should('not.exist');
    cy.get('img[alt="gm"]').click();
    cy.window().then((win) => {cy.stub(win, 'open').as('windowOpen');});
    cy.get('img[alt="ln"]').click();
    cy.get('@windowOpen').should('be.calledWith', 'https://www.linkedin.com/in/adolfo-zambrana-gilabert-a37776b5/');
  });
});