import { engineUrl } from "../garage.js";
import { controlEngine } from "./controlEngine.js";


export const drive = async function (id, status) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('status', status);

    return fetch(`${engineUrl}?${params}`, {
        method: 'PATCH'
    })
        .then(response => {



            if (response.status == 500) {
                return { success: false };
            } else if (response.status == 200) {
                return response.json();
            }

        })
        .then(data => {
            console.log(data)
            return data;
        });
}