import { createCar } from "./create.js";

const carBrands = ["Toyota", "Ford", "Honda", "Chevrolet", "Nissan", "Volkswagen", "BMW", "Mercedes-Benz", "Subaru", "Hyundai"];
const carModels = ["Series X", "Series Y", "Series Z", "Type A", "Type B", "Type C", "Model 1", "Model 2", "Model 3", "Model 4"];

const getRandomElement = function (arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const getRandomColor = function () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const generateCars = function () {
    for (let i = 0; i < 100; i++) {
        let name = getRandomElement(carBrands) + ' ' + getRandomElement(carModels);
        let color = getRandomColor();
        createCar(name, color);
    }
}


