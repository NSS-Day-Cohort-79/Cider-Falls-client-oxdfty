import { getServices } from "./database.js"

const services = getServices()

export const ServiceList = () => {
    let serviceHTML = "<ul>"

    for (const service of services) {
        serviceHTML += `<li data-type="service">${service.service}</li>`
    }

    serviceHTML += "</ul>"

    return serviceHTML
}