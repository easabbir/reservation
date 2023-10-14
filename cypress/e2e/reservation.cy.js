/// <reference types="cypress" />
import Login from "../pageObjects/loginPage";
import SideMenu from "../pageObjects/sideMenu";
import Reservation from "../pageObjects/reservation";

let config;
let testdata;

describe('Reservation Module', () => {
    before(()=>{
        cy.fixture('config.json').then((data) => {
            config = data;
        });

        cy.fixture('testdata.json').then((data) => {
            testdata = data;
        });
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });

    beforeEach(() => {
        cy.visit("https://app.dev.shadowchef.co/login");
        const login = new Login();
        login.setEmail(config.email);
        login.setPassword(config.password);
        login.clickedOnLoginButton();
        login.getDashboardTitle().then((actualTitle) => {
            expect(actualTitle).to.include(testdata.dashboardTitle);
        });
    });

    it('login into the system and verify Reservation QR URL', () => {
        
        const menuBar = new SideMenu();
        menuBar.clickedOnThreeLine();
        menuBar.clickedOnReservation();
        const reservation = new Reservation();
        reservation.clickedOnSetting();
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
});