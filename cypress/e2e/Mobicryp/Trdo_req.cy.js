describe("should sent trdo request",()=>{
    it("log into mobicryp",()=>{
        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
        cy.get(`input[name="email"]`).type("MC400001");
        cy.get(`input[name="password"]`).type("Password@123");

        cy.get("button").contains("Login").click();

        cy.url().should("include", "/otp-verification");

        cy.get(`input[name="pin"]`).type("1234");
    })
    it("should sent trdo request", () => {
        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/trdo-fund-request"); //visit url
        cy.url().should('include', '/trdo-fund-request');
        cy.contains('TRDO Wallet Request').should('be.visible');
        cy.contains('TRDO Fund Request Amount').click().type('1000');
        cy.get('select').select('TRDO POLYGON - (TRDO Wallet)',{ force: true }).should('have.value', 'POLYGON');
        cy.contains('Wallet Address').should('be.visible');
        cy.get('input[name="transactionNumber"]').type('testvjavfjavhfvkfjvh');
        cy.contains('Choose File').selectFile('img1.jpg');
        cy.wait(1000);
        cy.contains('button','Submit').click();
    })
})