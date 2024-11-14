describe('Login and Redirection Test', () => {
  
    it('should log in and redirect to the dashboard', () => {
      
      cy.visit('https://mobicryp-demo-uat.crypquesupport.com/login'); 
      cy.get(`input[name="email"]`).type('MC400001');
      cy.get(`input[name="password"]`).type('Password@123'); 
  
      
      cy.get('button').contains('Login').click();
  
      
      cy.url().should('include', '/otp-verification'); 

     // let otp ='1234'
      
      cy.get(`input[name="pin"]`).type('1234')
      
      //cy.contains('button', 'Submit').click();
    });
  });