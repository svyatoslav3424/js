// 1. Обробка списку покупок
// Припустимо, у вас є список покупок у вигляді рядка, і ви хочете перетворити його в масив, додати новий товар, видалити останній, а потім вивести оновлений список.

// const shoppingList = "milk, bread, eggs, butter, cheese";

// 2. Створення абревіатури з рядка
// Уявіть, що у вас є рядок з повними іменами, і ви хочете отримати абревіатуру з перших літер кожного слова.
// const fullName = "John Fitzgerald Kennedy";

// 3. Обробка списку тегів
// У вас є рядок з тегами, розділеними комами, і ви хочете отримати масив, видалити певний тег, а потім перевірити, чи є певний тег у списку.
// const tags = "JavaScript, HTML, CSS, React, Node";

// 4. Зміна формату дати
// У вас є дата у вигляді рядка, і ви хочете змінити її формат, розділивши на частини, а потім об'єднавши в новому форматі.
// const date = "2024-12-25";
// Очікується виведення "2024/12/25"

//! task1
// const shoppingList = "milk, bread, eggs, butter, cheese";
// const splitedShoppingList = shoppingList.split(", ")
// splitedShoppingList.push("aplle")
// splitedShoppingList.pop()
// console.log(splitedShoppingList);

//! task2

// const fullName = "John Fitzgerald Kennedy";
// const splitedFullName = fullName.split(" ");
// let abbrv = "";

// for (let i = 0; i < splitedFullName.length; i = i + 1) {
//   abbrv = abbrv + splitedFullName[i][0];
// }

// console.log(abbrv);

const numbers = [10, 50, 70, 230, 20];
let total = 0;

for (let i = 0; i < numbers.length; i = i + 1) {
  total = total + numbers[i];
}
console.log(`Total: ${total}`);
