/// <reference types="cypress" />
import Login from "../pageObjects/loginPage";
import SideMenu from "../pageObjects/sideMenu";
import Reservation from "../pageObjects/reservation";

let config;
let testdata;

describe('Reservation Module', () => {
    before('Setup config and test data', ()=>{
        cy.fixture('config.json').then((data) => {
            config = data;
        });

        cy.fixture('testdata.json').then((data) => {
            testdata = data;
        });
    });

    beforeEach('Login into the system before every test and navigated to reservation module', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit("https://app.dev.shadowchef.co/login");
        const login = new Login();
        login.setEmail(config.email);
        login.setPassword(config.password);
        login.clickedOnLoginButton();
        login.getDashboardTitle().then((actualTitle) => {
            expect(actualTitle).to.include(testdata.dashboardTitle);
        });

        const menuBar = new SideMenu();
        menuBar.clickedOnThreeLine();
        menuBar.clickedOnReservation();
    });

    it('Validate Reservation QR URL', () => {
        
        const reservation = new Reservation();
        reservation.clickedOnLocation();
        reservation.downloadQRCode();
        const reservationExpectedUrl = testdata.reservationExpectedUrl;
        cy.then(() => {
            reservation.getReservationQRUrl().should((reservationActualUrl) => {
                expect(reservationActualUrl).to.include(reservationExpectedUrl);
            });
        });

        cy.visit(reservationExpectedUrl);
        cy.wait(2000);
        reservation.isBookNowVisible();
    });

    it("Change openning and closing hours", () =>{
        const reservation = new Reservation();
        reservation.clickedOnLocation();
        reservation.clickedOnClosingHourAndSelectedRandomValue()
    })
});