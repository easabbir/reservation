import Login from "../pageObjects/loginPage"

describe('Reservation', () => {
    
    it('login', () => {
        cy.visit("https://app.dev.shadowchef.co/login")
        const ln=new Login();

        ln.setEmail('ehsanul.alam+11@vivacomsolutions.com')
        ln.setPassword('Abbl_123')
        ln.clickButton

        //cy.url().should('include','shadowchef.co')
        
        // cy.title()
        // { timeout: 10000 }.should('eq', 'Order Dashboard')
           // { timeout: 10000 }.should('eq', 'Order Dashboard')

        
      
    })

    

})