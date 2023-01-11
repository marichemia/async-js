import { garageUrl } from "../garage.js";

export const updateCar = async function (id, name, color) {
    fetch(`${garageUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: name,
            color: color
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

}