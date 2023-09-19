class Login{


    setEmail(text){
        cy.get("[name='email']").type(text)
    }

    setPassword(pass){
        cy.get("[name='password']").type(pass)

    }

    clickButton(){
        cy.get(".w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn.sc-btn-primary.w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn-xl").click
    }


}

//'ehsanul.alam+11@vivacomsolutions.com'
//'Abbl_123'

export default Login;