//Function = ParkAreaList
//List all park areas in HTML
//return ParkAreasListHTML

//import guests to count how many guests are in each park area when clicked
//import services to list what services are available under each park area


import { getParkAreas } from "./database.js"
import { getGuests } from "./database.js"
import { getServices } from "./database.js"

const parkAreas = getParkAreas()
const guests = getGuests()
const services = getServices()


document.addEventListener(
    "click",
    (clickEvent) => {
        const parkAreaClicked = clickEvent.target
        if (parkAreaClicked.dataset.type === "parkArea"){
            const parkAreaId = parseInt(parkAreaClicked.dataset.parkareaid)
            const guestsInEachParkArea = guests.filter(guests => guests.ParkAreasId === parkAreaId).length
        
        window.alert(`There is ${guestsInEachParkArea} guest(s) in the area.`)
        }
    }
)

export const ParkAreasList = () => {
    let parkAreasListHTML = "<ul>"

    for (const park of parkAreas) {
        parkAreasListHTML += `<li data-parkareaid="${park.id}" data-type="parkArea">${park.name} - ${park.location}`
        
        // Display the services
        parkAreasListHTML += `<div>`
        for (const serviceId of park.services) {
            const foundService = services.find(serviceInDatabase => serviceInDatabase.id === serviceId)
            parkAreasListHTML += `<div>${foundService.service}</div>`
        }
        parkAreasListHTML += `</div></li>`
    }

    parkAreasListHTML += "</ul>"

    return parkAreasListHTML
}