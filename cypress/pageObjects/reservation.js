const Locations = "//button[normalize-space()='Locations']"
const downloadQR = "//span[normalize-space()='Download']"
const reservationQRUrl = "//div[@class='truncate']"
const confirmDownload = ".text-sm.font-bold.mb-0.sc-btn.sc-btn-primary-outline.text-sm.font-bold.mb-0.sc-btn-lg"
const bookNow = "//a[text()='Book Now']"
const closingHour = "tbody tr.border-grey td:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1)"

class Reservation {

    clickedOnClosingHourAndSelectedRandomValue(){
        cy.get(closingHour).click()
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