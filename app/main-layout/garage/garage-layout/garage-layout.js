import * as garage from '../garage.js'
import { get } from '../methods/get.js';
import { create, update } from './layout-components/form.js'


export const garageView = document.createElement('div');
garageView.id = 'garage-view';
garageView.classList.add('view-container');

//set up garage view layout 

//title
const title = document.createElement('h1');
title.innerHTML = `
    You are now inside Garage view
`
garageView.appendChild(title);

//page number
const pageNum = document.createElement('h3');
pageNum.innerHTML = `
    You are now on page #_____
`
garageView.appendChild(pageNum);

//total number of cars
const total = document.createElement('h3');
total.innerHTML = `
    total number of cars in your collection: ___
`
garageView.appendChild(total);

// create/update form
garageView.appendChild(create);
garageView.appendChild(update);

//race track container and insert it into garage view
const raceTracks = document.createElement('div');
raceTracks.id = 'tracks-container'
garageView.appendChild(raceTracks);

//create div with pagination buttons
const pgNavContainer = document.createElement('div');
pgNavContainer.classList.add('page-nav-container')
const nextBtn = document.createElement('button');
nextBtn.innerHTML = `
    <i class="fa-solid fa-circle-right"></i>
`
const prevBtn = document.createElement('button');
prevBtn.innerHTML = `
    <i class="fa-solid fa-circle-left"></i>
`
const currentPgNum = document.createElement('div');
pgNavContainer.appendChild(prevBtn);
pgNavContainer.appendChild(currentPgNum);
pgNavContainer.appendChild(nextBtn);

//use get here

const a = 0;

(async () => {
    await get().then(data => {
        //create race track for each car and inser it into track container

        //pagination variables
        const numOfCars = data.length;
        const numPerPage = 2;
        let currentPage = 1;
        let numOfPages = Math.ceil(numOfCars / numPerPage);
        let pageArr;

        //build first page
        getPgItems(currentPage);
        buildPage();

        //insert buttons for pagination
        currentPgNum.innerHTML = `${currentPage}`
        garageView.appendChild(pgNavContainer)

        //add event listener to the 'next' button
        nextBtn.addEventListener('click', function () {
            if (currentPage >= numOfPages) {
                return;
            } else {
                currentPage++;
                getPgItems(currentPage);
                buildPage(currentPage);
            }
        })

        //get items for page
        function getPgItems(currentPage) {
            const trimStart = (currentPage - 1) * numPerPage;
            const trimEnd = trimStart + numPerPage;
            pageArr = data.slice(trimStart, trimEnd);
            return pageArr;
        }


        //pagination logic
        function buildPage() {
            pageArr.forEach(function (i) {
                const track = document.createElement('div');
                track.classList.add('race-track');
                raceTracks.appendChild(track);
                track.innerHTML = `
                    <i class="fa-solid fa-car-side" id="${i.id}-color"></i>
                    <p id='${i.id}'></p>
                `

                document.getElementById(`${i.id}`).innerText = `${i.name}`
                document.getElementById(`${i.id}-color`).style.color = i.color;
            })
        }

        function hidePage() {

        }

    })
})()














































