describe("mint purchase other",()=>{
  it('the mint purchase for others',()=>{
    cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
    cy.get(`input[name="email"]`).type("MC400001");
    cy.get(`input[name="password"]`).type("Password@123");

    cy.get("button").contains("Login").click();

    cy.url().should("include", "/otp-verification");

    cy.get(`input[name="pin"]`).type("1234");
    cy.visit("https://mobicryp-demo-uat.crypquesupport.com/mint-purchase"); //visit url

        cy.url().should('include', '/mint-purchase');
        cy.contains('Mint Purchase').should('be.visible');
    
        // check "USDT Wallet Balance" and fund wallet 
        cy.contains('USDT Wallet Balance').should('be.visible');
        cy.contains('Fund Wallet Balance').should('be.visible');
        cy.contains('Others').should('be.visible').click();

    })
})