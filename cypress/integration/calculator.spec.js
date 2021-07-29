describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of running total', () => {
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '39')
  })

  it('should update the total', () => {

    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '11')
    
  })

  it('should do multiple operations', () => {

    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 92)
  })


  it ('should be able to handle large numbers', () => {

    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 7488)

  })

  it('should be able to handle decimals', () => {

    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 4.5)

  })

  it('should be able to deal with negative numbers', () => {

    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', -4)


  })






})