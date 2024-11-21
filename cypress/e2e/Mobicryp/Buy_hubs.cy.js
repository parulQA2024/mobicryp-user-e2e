describe(
  "buy hub for myself",
  {
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  () => {
    it("should log in and redirect to the dashboard", () => {
      cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
      cy.get(`input[name="email"]`).type("MC400001");
      cy.get(`input[name="password"]`).type("Password@123");

      cy.get("button").contains("Login").click();

      cy.url().should("include", "/otp-verification");

      // let otp ='1234'

      cy.get(`input[name="pin"]`).type("1234");

      //cy.contains('button', 'Submit').click();
      // cy.get(`input[class="flex items-center"]`).contains('Hub').click();
      // cy.get(`input[class="flex items-center gap-2"]`).contains('Buy Hub').click();
      cy.contains("Hub").click();
      cy.contains("Buy Hub").click();

      cy.contains("button", "Select Package").click(); // select package
      cy.contains("Request OTP").click();
      cy.get(`input[name="otp"]`).type("4152");
      cy.wait(300)
      cy.contains('button','Confirm').click();
    //   cy.get("input[name]").click();
    });
  }
);
