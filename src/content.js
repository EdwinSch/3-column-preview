import sedan from "./images/icon-sedans.svg"
import suv from "./images/icon-suvs.svg"
import luxury from "./images/icon-luxury.svg"

const contents = [
    {
        id: 1,
        class: "btn-1",
        img: sedan,
        carType: "sedans",
        description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
        id: 2,
        class: "btn-2",
        img: suv,
        carType: "suvs",
        description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
        id: 3,
        class: "btn-3",
        img: luxury,
        carType: "luxury",
        description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    }
]

export default contents;