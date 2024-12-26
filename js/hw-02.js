// ! завдання 1

const productName = "Кавоварка";
const productPrice = 2500;
let productQuantity = 2;

let totalCost = productPrice * productQuantity;
console.log(`Ви замовили ${productQuantity} ${productName}и, загальна вартість ${totalCost} кредитів.`);

productQuantity = 4;
totalCost = productPrice * productQuantity;
console.log(`Ви замовили ${productQuantity} ${productName}и, загальна вартість ${totalCost} кредитів.`);

// ! завнадання 2

let temperature = 18;

if (temperature < 0) {
    console.log("Холодно. Одягніться тепліше.");
} else if (temperature >= 0 && temperature <= 25) {
    console.log("Погода нормальна.");
} else {
    console.log("Спекотно. Пийте більше води.");
}

// ! завдання 3

const income = 35000; 
let taxRate;
let taxAmount;

if (income < 10000) {
    taxRate = 0.1; // 10%
} else if (income <= 50000) {
    taxRate = 0.15; // 15%
} else {
    taxRate = 0.2; // 20%
}

taxAmount = income * taxRate;
console.log(`Сума податку: ${taxAmount} кредитів.`);

// Завдання 4: Вхід до системи
// Напиши функцію loginSystem(username, password), яка:

// Приймає username і password.
// Порівнює username з "admin" і password з "password123".
// Якщо обидва значення збігаються, виводить: "Вхід успішний!"
// Якщо ні, виводить: "Невірне ім'я користувача або пароль."

function loginSystem(username, password) {
    if (username === 'admin' && password === "password123") {
        console.log("Вхід Успішний")
    } else {
        console.log("Невірне ім'я користувача або пароль.")
    }
}
loginSystem("admin", "password123")

