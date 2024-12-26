// ! завдання 1 

// const itemName = "Рюкзак";
// const itemPrice = 1500;
// let itemQuantity = 3;

// let totalPrice = itemPrice * itemQuantity;
// console.log(`Ви замовили ${itemQuantity} ${itemName}и, загальна вартість ${totalPrice} кредитів.`);

// itemQuantity = 5;
// totalPrice = itemPrice * itemQuantity;
// console.log(`Ви замовили ${itemQuantity} ${itemName}ів, загальна вартість ${totalPrice} кредитів.`);

// ! завдання 2

// let age = 25; 

// if (age < 18) {
//     console.log("Доступ заборонено.");
// } else if (age >= 18 && age <= 60) {
//     console.log("Доступ дозволено.");
// } else {
//     console.log("Доступ обмежено для осіб старшого віку.");
// }

// ! завдання 3

// const totalPrice = 5200; 
// let userDiscount = 0;
// let finalPrice;

// if (totalPrice > 5000) {
//     userDiscount = 0.1; 
// } else if (totalPrice > 1000) {
//     userDiscount = 0.05; 
// } else {
//     userDiscount = 0; 
// }

// finalPrice = totalPrice - (totalPrice * userDiscount);
// console.log(`Кінцева вартість: ${finalPrice} кредитів.`);

// ! завдання 4

function checkPassword(password) {
    const correctPassword = "12345";
    if (password === correctPassword) {
        console.log("Пароль правильний.");
    } else {
        console.log("Пароль неправильний.");
    }
}


checkPassword("12345"); 
checkPassword("54321"); // Пароль неправильний