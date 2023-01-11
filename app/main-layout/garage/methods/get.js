import { garageUrl } from "../garage.js";


export const get = async function (id) {
    if (id || id === 0) {
        try {
            let newgarageUrl = garageUrl + `/?id=` + id;
            const responese = await fetch(`${newgarageUrl}`);
            let data = await responese.json();
            return data;


        } catch (e) {
            console.log(e);
        }

    } else {
        try {
            const response = await fetch(`${garageUrl}`);
            let data = await response.json();
            return Array.from(data);
        } catch (e) {
            console.log(e)
        }
    }

}











