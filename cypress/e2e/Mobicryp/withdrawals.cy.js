describe('withdrawals',()=>{
    it("should sent withdrawal request",()=>{
        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
        cy.get(`input[name="email"]`).type("MC400001");
        cy.get(`input[name="password"]`).type("Password@123");

        cy.get("button").contains("Login").click();
        cy.url().should("include", "/otp-verification");

        cy.get(`input[name="pin"]`).type("1234");
        cy.wait(1000);

        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/withdrawals"); //visit url
        cy.url().should('include', '/withdrawals');
        cy.contains('Fund Withdrawal').should('be.visible');

        // cy.contains('Income Wallet',{force:true}).should('be.visible');
        // cy.contains('Minting Wallet',{force:true}).should('be.visible');
        cy.get('p').contains('Income Wallet',{force:true}).should('be.visible');
        cy.get('p').contains('Minting Wallet',{force:true}).should('be.visible');
        
        cy.get('button').contains('New Fund Withdrawal Request').should('be.visible');
        cy.get('button').contains('My income Requests').should('be.visible');
        cy.get('button').contains('My minting Requests').should('be.visible');


        cy.contains('Select Wallet').should('be.visible');
        cy.get('select').select('Income Wallet',{ force: true }).should('have.value', 'IncomeWallet');

        cy.contains('Withdraw Wallet').should('be.visible');
        cy.get('select').select('Network:POLYGONCurrency:TRDOAddress:Ffgvfhggg',{ force: true }).should('have.value', 'Ffgvfhggg (POLYGON)');
    })
})