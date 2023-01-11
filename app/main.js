import header from "./main-layout/header.js";
import viewContainer from "./main-layout/view-container.js";

import { create, update } from "./main-layout/garage/garage-layout/layout-components/form.js";

import { get } from './main-layout/garage/methods/get.js';
import { createCar } from './main-layout/garage/methods/create.js';
import { deleteCar } from './main-layout/garage/methods/delete.js';
import { updateCar } from './main-layout/garage/methods/update.js';
import { controlEngine } from './main-layout/garage/methods/controlEngine.js';
import { drive } from './main-layout/garage/methods/drive.js';




//insert html elements
const body = document.getElementsByTagName('body')[0];
body.appendChild(header);
body.appendChild(viewContainer);


//create and update methods

// i make racing track
// every track has remove and select buttons
//with event listener when you click on select the id variable will be equal to an id of that car. Then the id will be passed to update function, and the input will also have that car's name (name will be passed as well automatically with an id)
let id = 0;

create.addEventListener('submit', async function (e) {

    createCar(document.getElementById('create-name').value, document.getElementById('create-color').value);

})

//needs work yet
/*update.addEventListener('submit', async function (e) {
    e.preventDefault();
    updateCar(id, document.getElementById('update-name').value, document.getElementById('update-color').value);
})*/


//pagination??

const numOfCars = 0;
const numPerPage = 4;
const currentPage = 1;
const numOfPages = Math.ceil(numOfCars / numPerPage);

//












