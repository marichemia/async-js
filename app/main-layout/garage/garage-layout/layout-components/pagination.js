export const pgNavContainer = document.createElement('div');
pgNavContainer.classList.add('page-nav-container')
export const nextBtn = document.createElement('button');
nextBtn.innerHTML = `
    <i class="fa-solid fa-circle-right"></i>
`
export const prevBtn = document.createElement('button');
prevBtn.innerHTML = `
    <i class="fa-solid fa-circle-left"></i>
`
export const currentPgNum = document.createElement('div');
pgNavContainer.appendChild(prevBtn);
pgNavContainer.appendChild(currentPgNum);
pgNavContainer.appendChild(nextBtn);