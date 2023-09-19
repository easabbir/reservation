

describe('suite name', () => {
    
    it('test1', () => {
        cy.visit("https://app.dev.shadowchef.co/login")
        cy.get("[name='email']").type('ehsanul.alam+11@vivacomsolutions.com')
        cy.get("[name='password']").type('Abbl_123')
        cy.get(".w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn.sc-btn-primary.w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn-xl").click
      
    })

})