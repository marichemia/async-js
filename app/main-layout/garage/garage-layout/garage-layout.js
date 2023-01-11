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

//build 7 tracks
const numPerPage = 7;
let track;
for (let i = 0; i < numPerPage; i++) {
    track = document.createElement('div');
    track.classList.add('race-track');
    raceTracks.appendChild(track);
}

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


//populate tracks with cars and implement pagination

(async () => {
    await get().then(data => {
        // array of html dom divs for tracks
        const tracksArr = Array.from(document.getElementsByClassName('race-track'));

        //pagination variables
        const numOfCars = data.length;
        let currentPage = 1;
        let numOfPages = Math.ceil(numOfCars / numPerPage);
        let excessTracksNum = numOfCars % numPerPage;
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
                buildPage();
            }
        })

        //add event listener to 'previous' button
        prevBtn.addEventListener('click', function () {
            if (currentPage === 1) {
                return;
            } else {
                currentPage--;
                getPgItems(currentPage);
                buildPage();
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
            if (excessTracksNum > 0 && currentPage == numOfPages) {
                for (let i = tracksArr.length - 1; i >= excessTracksNum; i--) {

                    tracksArr[i].style.display = 'none';
                }
            } else {
                for (let i = tracksArr.length - 1; i >= excessTracksNum; i--) {

                    tracksArr[i].style.display = 'flex';
                }
            }

            for (let i = 0; i < pageArr.length; i++) {
                tracksArr[i].innerHTML = `
                <i class="fa-solid fa-car-side" id="${pageArr[i].id}-color"></i>
                <p id='${pageArr[i].id}'></p>
                `

                document.getElementById(`${pageArr[i].id}`).innerText = `${pageArr[i].name}`
                document.getElementById(`${pageArr[i].id}-color`).style.color = pageArr[i].color;
            }



        }



    })
})()
















































