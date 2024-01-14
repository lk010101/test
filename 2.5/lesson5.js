let titleProject = prompt('Название проекта?')
console.log(titleProject)

let screensValue = prompt('Какие типы экранов - шаблонные, с уникальным дизайном, с анимациями?')

let responsive = prompt('Нужен ли респонсивный сайт?')

let service1 = prompt('Какой сервис нужен?')
console.log (service1)

let servicePrice1 = prompt('Сколько это будет стоить?')
console.log (servicePrice1)

let service2 = prompt('Какой еще сервис тебе нужен?')
console.log (service2)

let servicePrice2 = prompt('Сколько будет стоить второй сервис?')
console.log (servicePrice2)

let screenPrice = 5000

let fullPrice = screenPrice + +servicePrice1 + +servicePrice2

let percentage = 15

let percentageProject = +(fullPrice * (percentage / 100))

let servicePercentPrice = Math.trunc(+(fullPrice - percentageProject))


// задание 1

let allServicePrices;

let getAllServicePrices = function () {
    return +servicePrice1 + +servicePrice2
}

allServicePrices = getAllServicePrices ()
console.log('Сумма всех дополнительных услуг:', allServicePrices);



// задание 2
function getFullPrice () {
    return +screenPrice + +allServicePrices
}

fullPrice = getFullPrice();
console.log('Стоимость доп. услуг + стоимость верстки:', fullPrice);

// задание 3
let changedTitle = '';

function getTitle() {
    return titleProject [0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase();
}

changedTitle = getTitle()
console.log('Измененное название проекта:', changedTitle)

// задание 4
function getServicePercentPrice () {
    return fullPrice - +percentageProject
    
}

servicePercentPrice = getServicePercentPrice()
console.log('Итоговая стоимость за вычетом процента подрядчику:', servicePercentPrice)


// задание 5
function getRollbackMessage () {
    
if (fullPrice > 50000) {
    console.log ('Скидка 10%')
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log ('Сделаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log ('Скидка не предусмотрена:(')
} else if (fullPrice < 0) {
    console.log ('Что-то пошло не так')
} else if (fullPrice == 50000 || fullPrice == 20000 || fullPrice == 0) {
    console.log ('Сделаем скидку 100%')
}}

getRollbackMessage ()