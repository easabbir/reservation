const emailField = "[name='email']";
const passwordField = "[name='password']";
const loginButton = ".w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn.sc-btn-primary.w-full.rounded.text-sm.font-bold.mb-0.normal-case.sc-btn-xl"
const dashboard  = "//h1[@class='m-0' and text()='Order Dashboard']"

class Login {

    setEmail(text) {
        cy.get(emailField).type(text)
    }

    setPassword(pass) {
        cy.get(passwordField).type(pass)

    }

    clickedOnLoginButton() {
        cy.get(loginButton).click()
    }

    getDashboardTitle() {
        return cy.xpath(dashboard).invoke('text');
        }

}
export default Login;