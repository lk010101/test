
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