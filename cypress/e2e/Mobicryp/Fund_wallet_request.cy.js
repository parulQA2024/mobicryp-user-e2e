describe(
    "buy hub for myself",
    {
      viewportHeight: 1080,
      viewportWidth: 1920,
    },
    () => {
      it("should Purchase mint", () => {
        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
        cy.get(`input[name="email"]`).type("MC400001");
        cy.get(`input[name="password"]`).type("Password@123");
  
        cy.get("button").contains("Login").click();
  
        cy.url().should("include", "/otp-verification");
  
        cy.get(`input[name="pin"]`).type("1234");
        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/fund-wallet-request"); //visit url
        cy.url().should('include', '/fund-wallet-request');
        cy.contains('Fund Wallet Request').should('be.visible');

            });
        }
    );