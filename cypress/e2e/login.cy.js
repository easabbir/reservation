import Login from "../pageObjects/loginPage"

describe('suite name', () => {
    
    it('test1', () => {
        cy.visit("https://app.dev.shadowchef.co/login")
        const ln=new Login();

        ln.setEmail('ehsanul.alam+11@vivacomsolutions.com')
        ln.setPassword('Abbl_123')
        ln.clickButton
        
        // cy.title()
        // { timeout: 10000 }.should('eq', 'Order Dashboard')
        
      
    })

    

})