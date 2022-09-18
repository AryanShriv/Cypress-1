describe('Google Search', () => {
  it('loads search page', () => {
    cy.visit('https://aryanshriv.github.io/sign/');
  });

  it('input email and password', () => {
    cy.get('#stripe-login > :nth-child(1) > input').type("workingwith@dummy");
    cy.get(':nth-child(2) > input').type("ChaloGooingGreat");
  });

  it('tap on checkbox', () => {
    cy.get('label > input').click();
  });

  // it('tap on submit', () => {
  //   cy.get(':nth-child(4) > input').click();
  // });
  

});