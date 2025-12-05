import { getServices } from "./database.js"

const services = getServices()

export const serviceList = () => {
    let serviceHTML = "<ul>"

    for (const service of services) {
        serviceHTML += `<li data-type="service">${service.id}</li>`
    }

    serviceHTML += "</ul>"

    return serviceHTML
}