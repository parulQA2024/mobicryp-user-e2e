describe('Login and Redirection Test', () => {
  
    it('should log in and redirect to the dashboard', () => {
    
  
      
      cy.get('button').contains('Login').click();
  
      
      cy.url().should('include', '/otp-verification'); 

     // let otp ='1234'
      
      cy.get(`input[name="pin"]`).type('1234')
      
      //cy.contains('button', 'Submit').click();
    });
  });