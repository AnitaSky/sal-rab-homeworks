function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину
    let message; 
    message = productName; 
    message = message + " ";
    message = message + 'за';
    message = message + " ";
    message = message + productPrice;
    message = message + " ";
    message = message + 'теперь в корзине!';
    console.log(message);
    
    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue; // создайте переменную newValue
    newValue = oldValue; // присвойте ей значение oldValue
    newValue = newValue + 1; // увеличьте значение newValue на 1

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum; // создайте переменную newSum и присвойте ей сумму oldSum и difference
    newSum = oldSum + difference; // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    let newSumText = newSum + ' ₽';
    let newSumText = `${newSum} ₽`// замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSumText;
}

