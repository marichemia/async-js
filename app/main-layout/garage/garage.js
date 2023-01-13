import { get } from './methods/get.js';
import { createCar } from './methods/create.js';
import { deleteCar } from './methods/delete.js';
import { updateCar } from './methods/update.js';
import { controlEngine } from './methods/controlEngine.js';
import { drive } from './methods/drive.js';

import { numPerPage } from './garage-layout/layout-components/race-tracks.js';
import { garageView } from './garage-layout/garage-layout.js';
import { currentPgNum, pgNavContainer, nextBtn, prevBtn } from './garage-layout/layout-components/pagination.js';

export const garageUrl = 'http://127.0.0.1:3000/garage';
export const engineUrl = 'http://127.0.0.1:3000/engine';
export let id;

export const garageJS = async function () {
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
                <button id="${pageArr[i].id}-select">Select</button>
                <button id="${pageArr[i].id}-remove" class="remove-btn">Remove</button>
                <p id='${pageArr[i].id}'></p>
                <i class="fa-solid fa-car-side" id="${pageArr[i].id}-color"></i> 
                `

                document.getElementById(`${pageArr[i].id}`).innerText = `${pageArr[i].name}`
                document.getElementById(`${pageArr[i].id}-color`).style.color = pageArr[i].color;

                document.getElementById(`${pageArr[i].id}-select`).addEventListener('click', function (e) {
                    e.preventDefault();
                    document.getElementById('update-name').value = `${pageArr[i].name}`;
                    document.getElementById('update-color').value = `${pageArr[i].color}`;
                    id = pageArr[i].id;
                    document.getElementById('update-btn').disabled = false;
                })

                document.getElementById(`${pageArr[i].id}-remove`).addEventListener('click', function () {
                    deleteCar(pageArr[i].id);
                    location.reload();
                })
            }



        }



    })
}


