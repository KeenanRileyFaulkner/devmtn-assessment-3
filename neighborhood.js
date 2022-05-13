const restaurants = [
    "Sodalicious",
    "Tucanos",
    "Texas Roadhouse",
    "CupBop",
    "Costa Vida",
]

const chooseRandomRestaurant = () => restaurants[Math.floor(Math.random() * restaurants.length)];

document.getElementById("randomButton").addEventListener("click", () => {
    let restaurant = chooseRandomRestaurant()
    alert(`We randomly decided you should visit ${restaurant} today.
Click the link to view their website.`);
})