
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
  
        // let otp ='1234'
  
        cy.get(`input[name="pin"]`).type("1234");
  
        // cy.contains('button', 'Submit').click();
      //   // cy.get(`input[class="flex items-center"]`).contains('Hub').click();
      //   // cy.get(`input[class="flex items-center gap-2"]`).contains('Buy Hub').click();
      //   cy.contains("Hub").click();
      //   cy.contains("Buy Hub").click();
  
      //   cy.contains("button", "Select Package").click(); // select package
      //   cy.contains("Request OTP").click();
      //   cy.get(`input[name="otp"]`).type("4152");
      //   cy.wait(300)
      //   cy.contains('button','Confirm').click();
      // //   cy.get("input[name]").click();
      //   cy.wait(300);
      //   cy.reload()

        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/mint-purchase"); //visit url

        //cy.contains('Mint Purchase').click(); // Click on Mint Purchase
        
        // Verify the URL
        //cy.visit("https://mobicryp-demo-uat.crypquesupport.com/mint-purchase");

        cy.url().should('include', '/mint-purchase');
        cy.contains('Mint Purchase').should('be.visible');
    
        // check "USDT Wallet Balance" and fund wallet 
        cy.contains('USDT Wallet Balance').should('be.visible');
        cy.contains('Fund Wallet Balance').should('be.visible');
        cy.contains('Others').should('be.visible');

    
        // Select "Myself" for the "Topup Wallet for" option
        cy.contains('Myself').click();
        cy.contains('Select Hub for Capacity').click();
        cy.wait(3000);
        // Select a Hub Package from the dropdown
        //cy.contains('Basic|Total Capacity:$ 300|Remaining Capacity:$ 150').click();
        cy.get("select").select("Basic | Total Capacity : $ 300 | Remaining Capacity : $ 150 ").invoke("value").should("eq", "1");
        // Enter capacity in the input field
        // cy.get('input[placeholder="Enter the HUB Capacity"]').type('150'); // Replace placeholder with the actual value if different
    
        // // Select "Self" for the mode
        // cy.contains('Self').click();

        // cy.contains("Enter OTP").click();
        // cy.get(`input[name="otp"]`).type("4152");
        // cy.wait(300)
        // cy.contains('button','Purchase').click();

      })
});