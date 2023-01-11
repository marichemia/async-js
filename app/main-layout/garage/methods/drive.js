import { engineUrl } from "../garage.js";

export const drive = async function (id, status) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('status', status);

    fetch(`${engineUrl}?${params}`, {
        method: 'PATCH'
    })
        .then(response => response.json())
        .then(data => console.log(data));
}