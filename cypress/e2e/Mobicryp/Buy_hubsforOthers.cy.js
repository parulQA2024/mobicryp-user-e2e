describe('hub for others',()=>{
    
    // it('hub for others with valid user ID',()=>{
    //     cy.viewport(1920,1080);
    //     cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
    //     cy.get(`input[name="email"]`).type("MC400001");
    //     cy.get(`input[name="password"]`).type("Password@123"); 

    //     cy.get("button").contains("Login").click();

    //     cy.url().should("include", "/otp-verification");

    //     // let otp ='1234'

    //     cy.get(`input[name="pin"]`).type("1234");
        
    //     cy.contains("Hub").click();
    //     cy.contains("Buy Hub").click();
    //     cy.get('p').contains('Basic').get('button').contains('Select Package').click();
    //     cy.wait(1000);
    //     cy.get('h2').contains('Confirm Purchase?').should('be.visible').click();
    //     cy.get('span').contains('Amount').should('be.visible').get('span').contains('55 USDT').should('be.visible').click();
    //     cy.get('span').contains('Hub Capacity').should('be.visible').get('span').contains('300 USDT').should('be.visible').click();
    //     cy.get('span').contains('TOTAL').should('be.visible').get('span').contains('TRDO 458.33').should('be.visible').click();
    //     cy.get(`button[role="checkbox"]`).should('be.visible').click();
    //     cy.get('input[name="userID"]').click().type('MC500003').wait(1000);
    //     cy.get('button').contains('Request OTP').click();
    //     cy.get('input[placeholder="Enter OTP"]').click().type('1234');
    //     cy.get('button').contains('Confirm').click();
    //     cy.get('h2').contains('Purchase Successful!').should('be.visible').click();
    //     cy.get('button[type="button"]').get(`span[class="sr-only"]`).contains('Close',{force:true}).click( {force: true});
    // })
    it('Dsuper hub purchase',()=>{
        cy.viewport(1920,1080);

        cy.visit("https://mobicryp-demo-uat.crypquesupport.com/login");
        cy.get(`input[name="email"]`).type("MC400001");
        cy.get(`input[name="password"]`).type("Password@123"); 

        cy.get("button").contains("Login").click();

        cy.url().should("include", "/otp-verification");

        // let otp ='1234'
        cy.get(`input[name="pin"]`).type("1234");
    
        cy.contains("Hub").click();
        cy.contains("Buy Hub").click();

        cy.log('clicking on D Super');
        cy.log(cy.get('h3').get('p').contains('D Super'))

        cy.get('h3').get('p').contains('D Super').click().get('button').contains('Select Package').click();
        // cy.get('button').get('.inset-0').contains('Select Package').click({multiple:true});



        // cy.get('span').contains('Hub Capacity').should('be.visible').get('span').contains('6000 USDT').should('be.visible').click();
        // cy.get('span').contains('TOTAL').should('be.visible').get('span').contains('TRDO 9166.67').should('be.visible').click();
        // cy.get(`button[role="checkbox"]`).should('be.visible').click();
        // cy.get('input[name="userID"]').click().type('MC500003').wait(1000);
        // cy.get('button').contains('Request OTP').click();~
        // cy.get('input[placeholder="Enter OTP"]').click().type('1234');
        // cy.get('button').contains('Confirm').click();
        // cy.get('h2').contains('Purchase Successful!').should('be.visible').click();
        // cy.get('button[type="button"]').get(`span[class="sr-only"]`).contains('Close',{force:true}).click( {force: true});
    })
})