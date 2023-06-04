  describe('Global Hitachi Solutions Website Test Suite', () => {
    before(() => {
      // Runs once before all tests
      cy.visit('https://global.hitachi-solutions.com/');
    });
  
    it('should navigate to the site successfully', () => {
      cy.title().should('contain', 'Hitachi Solutions');
    });
  
    it('should search for keywords successfully', () => {
      
      cy.get('#open-global-search').click(); //Open search box
      cy.get('#site-search-keyword').type('test automation'); //Enter search string
      cy.get('.gsearch').click();
      cy.url().should('contain', 'automation'); //Confirm url has string 
      cy.get('.results-header > p').should('be.visible'); //Check we got results
    });
  
    it('should open returned search results successfully', () => {
      cy.get('.container > :nth-child(3) > :nth-child(1) > a').click(); //Click on first results from list
      cy.url().should('contain', 'automation'); //Confirm url has string 
      cy.get('.post-heading-meta > .post-title').should('contain', 'Automation'); //check title on page also contains search value
    });
  });