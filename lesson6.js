
// переменные
// let screenPrice = 5000
let percentage = 15
let allServicePrices;
let changedTitle = '';
let titleProject;
let screensValue;
let responsive;
let fullPrice = screenPrice + +servicePrice1 + +servicePrice2


const asking = function () {
    titleProject = prompt('Название проекта?')
screensValue = prompt('Какие типы экранов - шаблонные, с уникальным дизайном, с анимациями?')
responsive = prompt('Нужен ли респонсивный сайт?')
}





let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = prompt('Сколько будет стоить второй сервис?')




// let getAllServicePrices = function () {
//     return +servicePrice1 + +servicePrice2
// }

function getFullPrice () {
    return +screenPrice + +allServicePrices
}

function getServicePercentPrice () {
    return fullPrice - +(fullPrice * (percentage / 100))
}

function getTitle() {
    return titleProject.trim().charAt(0).toUpperCase() + titleProject.trim().slice(1).toLocaleLowerCase();
}

// УРОК 6
// задание 1

let number;

function checkIsNumber(number) {
    if (!isNaN(parseFloat(number)) && isFinite(number)) {
        return true;
    } else {
        return false; 
    }
}


// задание 2

let screenPrice = '';

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt ('Какая стоимость одного экрана?')
    }

    console.log("Стоимость одного экрана:", screenPrice);



    // задание 3

    const getAllServicePrices = function() {
        let sum = 0
    
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                Service1 = prompt('Какой сервис тебе нужен?')
            } else if (i === 1) {
                Service2 = prompt('Какой еще сервис тебе нужен?')
            }

            let textFromPrompt = '';
            
            while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === '' || textFromPrompt === null) {
                textFromPrompt = prompt ('Сколько это будет стоить?')
            }
            sum = sum + Number(textFromPrompt);
        }
        return sum
    }

    const result = getAllServicePrices ()
    console.log ('Сумма доп услуг - ', result)

// скидки
function getRollbackMessage () {
    
if (fullPrice > 50000) {
    console.log ('Скидка 10%')
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log ('Сделаем скидку 5%');
} else if (fullPrice > 40001 && fullPrice <49999) {
    console.log('Сделаем лучшую скидку')
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log ('Скидка не предусмотрена:(')
} else if (fullPrice < 0) {
    console.log ('Что-то пошло не так')
} else if (fullPrice == 50000 || fullPrice == 20000 || fullPrice == 0) {
    console.log ('Сделаем скидку 100%')
}}

getRollbackMessage ()



// вызов функций

asking ()

allServicePrices = getAllServicePrices ()
console.log('Сумма всех дополнительных услуг:', allServicePrices);

fullPrice = getFullPrice();
console.log('Стоимость доп. услуг + стоимость верстки:', fullPrice);

servicePercentPrice = getServicePercentPrice()
console.log('Итоговая стоимость за вычетом процента подрядчику:', servicePercentPrice)

changedTitle = getTitle()
console.log('Измененное название проекта:', changedTitle)


console.log(titleProject);
console.log(screensValue);
console.log (responsive);
console.log (service1)
console.log (servicePrice1)
console.log (service2)
console.log (servicePrice2)

console.log(Math.ceil(servicePercentPrice));














else {
    alert ('Попробуй еще раз!');
}