

let titleProject = prompt('Название проекта?')
console.log(titleProject)

let screensValue = prompt('Какие типы экранов - шаблонные, с уникальным дизайном, с анимациями?')
console.log(screensValue)

let responsive = prompt('Нужен ли респонсивный сайт?')
console.log (responsive)

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
console.log ('Полная стоимость проекта:', fullPrice)

let percentage = 15

let percentageProject = +(fullPrice * (percentage / 100))
console.log('Процент подрядчику за проект', percentageProject)

let servicePercentPrice = Math.trunc(+(fullPrice - percentageProject))
console.log ('Сумма проекта за вычетом процента', servicePercentPrice)

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
}