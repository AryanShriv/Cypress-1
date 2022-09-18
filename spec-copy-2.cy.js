describe('Google Search', () => {
  it('loads search page', () => {
    cy.visit('https://www.google.com');
  });

  it('searches for `mpnews.in`', () => {
    cy.get('input[name="q"]').type('mpnews.in{enter}');
  });

  it('gets first search result', () => {
    cy.get('#search')
  });

  it('clicks the first link', () => {
    cy.get('[href="http://mpnews.in/"] > .LC20lb')
  });

 it('how many pages do we have', () => {
   console.log('#result-stats')
 });

  it('opens mpnews', () => {
    cy.visit('http://mpnews.in/')
  });


});