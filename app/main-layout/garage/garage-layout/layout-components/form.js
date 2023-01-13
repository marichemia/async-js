export const create = document.createElement('form');
create.innerHTML = `
    <input type="text" id="create-name">
    <input type="color" id="create-color">
    <button type="submit" id="create-btn">Create</button>
`




export const update = document.createElement('form');
update.innerHTML = `
<input type="text" id="update-name">
<input type="color" id="update-color">
<button type="submit" id="update-btn" disabled>Update</button>
`
