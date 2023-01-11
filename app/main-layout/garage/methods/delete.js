import { garageUrl } from "../garage.js";

export const deleteCar = async function (id) {
    fetch(`${garageUrl}/${id}`, {
        method: 'DELETE'
    }).then(response => response.json())
        .then(data => console.log(data));

}

