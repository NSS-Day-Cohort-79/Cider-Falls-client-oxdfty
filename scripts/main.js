import { GuestList } from "./Guests.js"
import { ParkAreasList } from "./ParkAreas.js"
import { ServiceList } from "./Services.js"

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
        <h2>Park Services</h2>
        ${ServiceList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML