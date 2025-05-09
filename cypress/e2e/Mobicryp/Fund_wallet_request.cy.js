describe(
    "fund request",
    {
      viewportHeight: 1080,
      viewportWidth: 1920,
    },
    () => {
      it("should sent fun request", () => {
        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
        cy.get(`input[name="email"]`).type("MC400001");
        cy.get(`input[name="password"]`).type("Password@123");
  
        cy.get("button").contains("Login").click();
  
        cy.url().should("include", "/otp-verification");
  
        cy.get(`input[name="pin"]`).type("1234");
        // cy.contains('button','Confirm').click();
        cy.wait(1000);
       // cy.reload()

        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/fund-wallet-request"); //visit url
        cy.url().should('include', '/fund-wallet-request');
        cy.contains('Fund Wallet Request').should('be.visible');
        cy.contains('Fund Wallet Request Amount').click().type('1000');
        cy.get('select').select('USDT TRC20 - (USDT Wallet)',{ force: true }).should('have.value', 'TRC20');

        cy.get('input[name="transactionNumber"]').type('testvjavfjavhfavkfjvh');
        cy.contains('Choose File').selectFile('img1.jpg');
        cy.wait(1000);
        cy.contains('button','Submit').click();

            });
        }
    );