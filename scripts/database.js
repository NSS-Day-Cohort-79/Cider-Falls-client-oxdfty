//Hold all data for Guests, ParkAreas, and Services
const database = {
    Guests: [{
        id: 1,
        firstName: "Sarah",
        lastName: "Martinez",
        ParkAreasId: 1
    },
    {
        id: 2,
        firstName: "James",
        lastName: "Chen",
        ParkAreasId: 2
    },
    {
        id: 3,
        firstName: "Priya",
        lastName: "Patel",
        ParkAreasId: 3
    },
    {
        id: 4,
        firstName: "Marcus",
        lastName: "Johnson",
        ParkAreasId: 4
    },
    {
        id: 5,
        firstName: "Elena",
        lastName: "Rodriguez",
        ParkAreasId: 5
    },
    {
        id: 6,
        firstName: "David",
        lastName: "Kim",
        ParkAreasId: 6
    }],

    ParkAreas: [{
        id: 1,
        name: "Chamfort River",
        location: "Northeastern Section",
    },
    {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        location: "Northern Section",
    },
    {
        id: 3,
        name: "Lodge Area",
        location: "Northwestern Section",
    },
    {
        id: 4,
        name: "Gander River",
        location: "Southwestern Section",
    },
    {
        id: 5,
        name: "Campgrounds Area",
        location: "Southern Section",
    },
    {
        id: 6,
        name: "Pine Bluffs Trails",
        location: "Southeastern Section",
    }],

    Services: [{
        id: 1,
        service: "fishing",
    },
    {
        id: 2,
        service: "hiking",
    },
    {
        id: 3,
        service: "picknicking",
    },
    {
        id: 4,
        service: "lodging",
    },
    {
        id: 5,
        service: "parking",
    },
    {
        id: 6,
        service: "information",
    },
    {
        id: 7,
        service: "rafting",
    },
    {
        id: 8,
        service: "canoeing",
    },
    {
        id: 9,
        service: "rock climbing",
    },
    {
        id: 10,
        service: "zip lines",
    }]
}

//exports 
export const getGuests = () => {
    return structuredClone(database.Guests)
}

export const getParkAreas = () => {
    return structuredClone(database.ParkAreas)
}

export const getServices = () => {
    return structuredClone(database.Services)
}


//In the northeast section, there is the Chamfort River that supports rafting, canoeing, and fishing.
//In the northern section, there is the Lost Wolf Hiking Trail that supports hiking, picnicking, and rock climbing.
//In the northwest section, the main attraction is the Lodge, but there is also a hotel, and a restaurant. This area supports lodging, parking, information, and picnicking.
//In the southwest section, there is the Gander River, which is a natural preserve, so it only supports fishing and hiking.
//In the southern section, the main attraction is the Campgrounds. Ther eis also the office park, and children play areas. This area supports information, lodging, and parking.
//In the southeast section, there is the Pine Bluffs Trails, a vast network of trails for all levels of hikers. On the beginner trail, there are food vendors. This area support hiking, picnicking, and zip lines.