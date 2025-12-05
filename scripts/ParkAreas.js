//Function = ParkAreaList
//List all park areas in HTML
//return ParkAreasListHTML

import { getParkAreas } from "./database.js"

const parkAreas = getParkAreas()

export const ParkAreasList = () => {
    let parkAreasListHTML = "<ul>"

    for (const park of parkAreas) {
        parkAreasListHTML += `<li data-type="parkArea">${park.name} - ${park.location}</li>`
    }

    parkAreasListHTML += "</ul>"

    return parkAreasListHTML
}
