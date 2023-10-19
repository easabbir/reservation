const Locations = "//button[normalize-space()='Locations']"
const downloadQR = "//span[normalize-space()='Download']"
const reservationQRUrl = "//div[@class='truncate']"
const confirmDownload = ".text-sm.font-bold.mb-0.sc-btn.sc-btn-primary-outline.text-sm.font-bold.mb-0.sc-btn-lg"
const bookNow = "//a[text()='Book Now']"

class Reservation {
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