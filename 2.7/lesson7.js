
function checkIsNumber(number) {
    if (!isNaN(parseFloat(number)) && isFinite(number)) {
        return true;
    } else {
        return false; 
    }
}



function randomGenerate (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const gameBotFunction = function () {
    const minNumber = 1;
    const maxNumber = 100;

    let randomNumber = randomGenerate(minNumber, maxNumber);
    console.log (randomNumber);

    let tries = 2;

    const getResult = function () {
        let answerNum = prompt('Угадай число от 0 до 100');

        if (answerNum === null) {
            alert('Ну вот( игра окончена');
            return;
        }

        while (!checkIsNumber(answerNum) || answerNum.trim() === '' || answerNum === null) {
            alert('Пожалуйста, введи число');
            answerNum = prompt('Угадай число от 0 до 100');
        }

        if (answerNum < randomNumber) {
            alert(`Неверно! Я загадал число больше! Осталось ${tries} попыток.`);
        } else if (answerNum > randomNumber) {
            alert(`Неверно! Я загадал число меньше! Осталось ${tries} попыток.`);
        } else {
            alert('Невероятно! Ты угадал число!');
            const playAgain = confirm('Хочешь начать заново?');

            if (playAgain) {
                randomNumber = randomGenerate(minNumber, maxNumber);
                tries = 3;
                getResult();
            } else {
                alert('Ну все( игра окончена');
            }

            return;
        }

        if (tries > 0) {
            tries--;
            getResult();
        } else {
            const playAgain = confirm('Попытки закончились. Хочешь начать заново?');
            if (playAgain) {
                randomNumber = randomGenerate(minNumber, maxNumber);
                tries = 2;
                getResult();
            } else {
                alert('Ну все( игра окончена');
            }
        }
    }

    getResult();

}

gameBotFunction();
