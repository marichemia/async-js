import { engineUrl } from "../garage.js";
import { controlEngine } from "./controlEngine.js";


export const drive = async function (id, status) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('status', status);

    fetch(`${engineUrl}?${params}`, {
        method: 'PATCH'
    })
        .then(response => response.json())
        .then(data => {

            console.log(data['success'])
            if (data['success']) {
                console.log('car moves')
            } else {
                controlEngine(id, 'stopped')
            }

        });
}