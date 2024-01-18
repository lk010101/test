
function checkIsNumber(number) {
    if (!isNaN(parseFloat(number)) && isFinite(number)) {
        return true;
    } else {
        return false; 
    }
}

const gameBotFunction = function () {

    const randomNumber = Math.floor(Math.random() * 2);
    console.log(randomNumber);

    let answerNum = '';

    for (let i = 0; i < 3; i++) {
        answerNum = prompt('Угадай число от 0 до 100');

        while (!checkIsNumber(answerNum) || answerNum.trim() === '' || answerNum === null) {
            alert('Пожалуйста, введи число');
            answerNum = prompt('Угадай число от 0 до 100');
        }

        if (answerNum < randomNumber) {
            alert('Неверно! Я загадал число больше!');
        } else if (answerNum > randomNumber) {
            alert('Неверно! Я загадал число меньше!');
        } else {
            alert('Правильно! Ты угадал число!');
            return;
        }
    }
}

gameBotFunction();
