class Login{


    emailField="[name='email']";
    passwordField="[name='password']";
    loginButton=".w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn.sc-btn-primary.w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn-xl";

    setEmail(text){
        cy.get(this.emailField).type(text)
    }

    setPassword(pass){
        cy.get(this.passwordField).type(pass)

    }

    clickButton(){
        cy.get(this.passwordField).click
    }


}

//'ehsanul.alam+11@vivacomsolutions.com'
//'Abbl_123'

export default Login;