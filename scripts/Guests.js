//Function = GuestList
// List all guests in HTML
//return GuestListHTML

import { getGuests } from "./database.js"

const guests = getGuests()

export const GuestList = () => {
    let guestHTML = "<ul>"

    for (const guest of guests) {
        //add state item of ParkAreasForeignKey to be able to use for event listener later
        guestHTML += `<li data-ParkAreasForeignKey="${guest.ParkAreaId}" data-type="guest">${guest.firstName}, ${guest.lastName}</li>`
    }

    guestHTML += "</ul>"

    return guestHTML
}
