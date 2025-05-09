describe(
  "buy hub for myself",
  {
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  () => {
    it("should log in and redirect to the dashboard", () => {
      cy.viewport(1920,1080);

      cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
      cy.get(`input[name="email"]`).type("g@gmail.com");
      cy.get(`input[name="password"]`).type("Password@123");

      cy.get("button").contains("Login").click();

      cy.url().should("include", "/otp-verification");

      // let otp ='1234'

      cy.get(`input[name="pin"]`).type("1234");

      
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
