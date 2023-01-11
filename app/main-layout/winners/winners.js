export const winnersView = document.createElement('div');
winnersView.id = 'winners-view';
winnersView.classList.add('view-container');
winnersView.classList.add('none');

//title
const title = document.createElement('h1');
title.innerHTML = `
    You are now inside Winners view
`
winnersView.appendChild(title);

//page number
const pageNum = document.createElement('h3');
pageNum.innerHTML = `
    You are now on page #_____
`
winnersView.appendChild(pageNum);

//total number of cars
const total = document.createElement('h3');
total.innerHTML = `
    total number of winners: ___
`
winnersView.appendChild(total);
