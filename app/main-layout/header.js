import { garageView } from "./garage/garage-layout/garage-layout.js";
import { winnersView } from "./winners/winners.js"

const header = document.createElement('header');

//create buttons
const garageBtn = document.createElement('button');
garageBtn.id = 'garage-btn';
garageBtn.innerText = 'Garage';
header.appendChild(garageBtn);

const winnersBtn = document.createElement('button');
winnersBtn.id = 'winners-btn';
winnersBtn.innerText = 'Winners';
header.appendChild(winnersBtn);


// switch between garage and winners views
garageBtn.addEventListener('click', function () {
    if (garageView.classList.contains('none')) {
        garageView.classList.remove('none');
    }
    winnersView.classList.add('none');
})

winnersBtn.addEventListener('click', function () {
    if (winnersView.classList.contains('none')) {
        winnersView.classList.remove('none');
    }
    garageView.classList.add('none');
})

export default header;



