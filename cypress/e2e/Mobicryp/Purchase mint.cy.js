
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
  
      //   cy.contains('button', 'Submit').click();
      //   cy.get(`input[class="flex items-center"]`).contains('Hub').click();
      //   cy.get(`input[class="flex items-center gap-2"]`).contains('Buy Hub').click();
      //   cy.contains("Hub").click();
      //   cy.contains("Buy Hub").click();
  
      //   cy.contains("button", "Select Package").click(); // select package
      //   cy.contains("Request OTP").click();
      //   cy.get(`input[name="otp"]`).type("4152");
      //   cy.wait(300)
      //   cy.contains('button','Confirm').click();
      //   cy.get("input[name]").click();
      //   cy.wait(300);
      //   cy.reload()

        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/mint-purchase"); //visit url

        //Mint Purchase

        cy.url().should('include', '/mint-purchase');
        cy.contains('Mint Purchase').should('be.visible');
    
        // check "USDT Wallet Balance" and fund wallet 
        cy.contains('USDT Wallet Balance').should('be.visible');
        cy.contains('Fund Wallet Balance').should('be.visible');
        cy.contains('Others').should('be.visible');

    
        // "Myself" for the "Topup Wallet for" option
        cy.contains('Myself').click();
        // cy.contains('Select Hub for Capacity').click();
        // cy.wait(1000);
        // cy.get(.space-y-2).click();
        // cy.contains(`select[tabindex="-1"]`).should('have.value', '1');
        //cy.get('select').select({ force: true }).should('have.value', '2');
        cy.wait(1000);
        // cy.get('button[role="combobox"]');
        // cy.get('select[tabindex="-1"]').should('have.value', '2').select('2',{click:true});
        cy.get(`span[style="pointer-events: none;"]`).click( {force: true});
        cy.wait(1000);
        cy.get('.space-y-2');
        // cy.contains('Basic | Total Capacity : $ 300 | Remaining Capacity : $ 150 ');
        

        // cy.contains('Self').click();

        // cy.contains("Enter OTP").click();
        // cy.get(`input[name="otp"]`).type("4152");
        // cy.wait(300);
        // cy.contains('button','Purchase').click();
      })
});