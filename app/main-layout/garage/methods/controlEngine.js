import { engineUrl } from "../garage.js";

export const controlEngine = async function (id, status) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('status', status);

    return fetch(`${engineUrl}?${params}`, {
        method: 'PATCH'
    })
        .then(response => response.json())
        .then(data => {
            const time = data.distance / data.velocity;
            return time;
        });

}