
function checkIsNumber(number) {
    if (!isNaN(parseFloat(number)) && isFinite(number)) {
        return true;
    } else {
        return false; 
    }
}



function randomGenerate (min, max) {
    min = 1;
    max = 2;
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let randomNumber = randomGenerate ();
console.log (randomNumber)

const gameBotFunction = function () {

    let answerNum = ''

    for (let i = 0; i < 3; i++) {
        answerNum = prompt('Угадай число от 0 до 100')
    }

        while (!checkIsNumber(answerNum) || answerNum.trim() === '' || answerNum === null) {
            alert ('Пожалуйста, введи корректное число')
        }

        answerNum = parseInt(answerNum);

        if (answerNum < randomNumber) {
            alert ('Неверно! Я загадал число больше!');
        
        } else if (answerNum > randomNumber) {
            alert ('Неверно! Я загадал число меньше!')

        } else {
        alert ('Правильно! Ты угадал число!'); 
        }

    }

gameBotFunction ()