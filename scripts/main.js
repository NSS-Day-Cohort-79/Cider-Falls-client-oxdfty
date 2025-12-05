import { GuestList } from "./Guests.js"
import { ParkAreasList } from "./ParkAreas.js"
import { ServicesList } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list details__parkareas">
        <h2>Guests</h2>
        ${GuestList()}
    </section>
    <section class="detail--column list details__parkareas">
        <h2>Park Areas</h2>
        ${ParkAreasList()}
    </section>
    <section class="detail--column list details__parkareas">
        <h2>Services</h2>
        ${ServicesList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML