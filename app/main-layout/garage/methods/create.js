import { garageUrl } from "../garage.js";

export const createCar = async function (name, color) {

    fetch(`${garageUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            color: color
        })
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            return data
        });

}