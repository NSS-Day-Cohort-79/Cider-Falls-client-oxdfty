import { getServices, getParkAreas } from "./database.js"

const services = getServices()
const parkAreas = getParkAreas()

// This is the mapping of services to the park areas that support them
const serviceAreasMap = {
    fishing: [1, 4],
    canoeing: [1],
    rafting: [1],
    hiking: [2, 4, 6],
    picnicking: [2, 3, 6],      // corrected spelling
    "rock climbing": [2],
    lodging: [3, 5],
    parking: [3, 5],
    information: [3, 5],
    "zip lines": [6]
}

export const ServiceList = () => {
    let serviceHTML = ""

    for (const service of services) {
        serviceHTML += `
            <span
                data-type="service"
                data-id="${service.id}"
                style="margin-right: 15px; cursor: pointer;"
            >
                ${service.service}
            </span>
        `
    }

    return serviceHTML
}

// EVENT LISTENER FOR CLICKING A SERVICE
document.addEventListener("click", (event) => {
    if (event.target.dataset.type === "service") {

        const clickedServiceName = event.target.textContent.trim()

        const areaIds = serviceAreasMap[clickedServiceName]

        const matchingAreas = parkAreas
            .filter(area => areaIds.includes(area.id))
            .map(area => area.name)

        const areaListString = matchingAreas.join(", ")

        window.alert(
            `The ${clickedServiceName} service is available in: ${areaListString}.`
        )
    }
})
