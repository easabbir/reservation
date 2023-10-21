const Locations = "//button[normalize-space()='Locations']"
const downloadQR = "//span[normalize-space()='Download']"
const reservationQRUrl = "//div[@class='truncate']"
const confirmDownload = ".text-sm.font-bold.mb-0.sc-btn.sc-btn-primary-outline.text-sm.font-bold.mb-0.sc-btn-lg"
const bookNow = "//a[text()='Book Now']"
const save = "//button[@class='rounded-full border border-primary px-4 py-1 sc-btn sc-btn-primary rounded-full border border-primary px-4 py-1 sc-btn-sm']"
const closingHour = "tbody tr.border-grey td:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1)"
const openningHour = "tbody tr.border-grey td:nth-child(5) div:nth-child(1) div:nth-child(2) div:nth-child(1)"
const selectHour = ".sc-timepicker-dropdown .hour-half .sc-timepicker-dropdown-row"
const selectMinute = ".sc-timepicker-dropdown .minute-half .sc-timepicker-dropdown-row"

class Reservation {
    clickedOnSave(){
        cy.xpath(save).click({ force: true });
    }
    clickedOnOpeningHourAndSelectedRandomValue(){
        cy.get(openningHour).click()
        const randomHour = Cypress._.random(0, 22);
        cy.get(selectHour).eq(randomHour).click();
        const randomMinute = Cypress._.random(0, 5) * 5;
        cy.get(selectMinute).eq(randomMinute / 5).click();
        
    }

    clickedOnClosingHourAndSelectedRandomValue(){
        cy.get(closingHour).click()
        const randomHour = Cypress._.random(0, 22);
        cy.get(selectHour).eq(randomHour).click();
        const randomMinute = Cypress._.random(0, 5) * 5;
        cy.get(selectMinute).eq(randomMinute / 5).click();
        
    }
    clickedOnLocation() {
        cy.xpath(Locations).click()
    }

    downloadQRCode() {
        cy.xpath(downloadQR).click();
        cy.get(confirmDownload).click();
    }

    getReservationQRUrl() {
        return cy.xpath(reservationQRUrl).invoke('text').then((url) => {
            return url;
        });
    }

    isBookNowVisible() {
        return cy.xpath(bookNow).should('exist');
    }
}

export default Reservation