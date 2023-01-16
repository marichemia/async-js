import header from "./main-layout/header.js";
import viewContainer from "./main-layout/view-container.js";

import { create, update } from "./main-layout/garage/garage-layout/layout-components/form.js";

import { get } from './main-layout/garage/methods/get.js';
import { createCar } from './main-layout/garage/methods/create.js';
import { deleteCar } from './main-layout/garage/methods/delete.js';
import { updateCar } from './main-layout/garage/methods/update.js';
import { id } from "./main-layout/garage/garage.js";
import { controlEngine } from './main-layout/garage/methods/controlEngine.js';
import { drive } from './main-layout/garage/methods/drive.js';
import { garageJS } from "./main-layout/garage/garage.js";
import { generateCars } from "./main-layout/garage/methods/generateCars.js";




//insert html elements
const body = document.getElementsByTagName('body')[0];
body.appendChild(header);
body.appendChild(viewContainer);


//create and update methods

// i make racing track
// every track has remove and select buttons
//with event listener when you click on select the id variable will be equal to an id of that car. Then the id will be passed to update function, and the input will also have that car's name (name will be passed as well automatically with an id)

create.addEventListener('submit', async function () {
    createCar(document.getElementById('create-name').value, document.getElementById('create-color').value);

})

update.addEventListener('submit', async function (e) {

    updateCar(id, document.getElementById('update-name').value, document.getElementById('update-color').value);
})



//

garageJS();

document.getElementById('generate-btn').addEventListener('click', function () {
    generateCars();
    location.reload();
})


/*window.onload = function () {
    Array.from(document.getElementsByClassName('start-btn')).forEach(element => {
        element.addEventListener('click', function () {
            controlEngine
        })
    });
}*/















