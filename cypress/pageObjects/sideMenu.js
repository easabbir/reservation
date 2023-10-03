const reservation = "//a[@title='Reservation']"
const threeLineBar = "//i[@class='sc-list']"

class SideMenu{
    clickedOnReservation(){
        cy.xpath(reservation).click()
    }

    clickedOnThreeLine(){
        cy.xpath(threeLineBar).click()
    }
}
export default SideMenu