// Написати функцію яка подивиться чи товар є на складі і чи воно має знижку і вивести відповідне повідомлення: "[Товар] є на складі з гарячою знижкою!"

function checkAvailableDiscountItem(item, isAvailable, isDiscount) {
  if (isAvailable === true && isDiscount === true) {
    return `${item} є на складі з гарячою знижкою!`;
  }

  if (isAvailable === true && isDiscount !== true) {
    return `${item} є на складі!`;
  }

  if (isAvailable === false) {
    return `${item} відсутній на складі!`;
  }
}

// console.log(checkAvailableDiscountItem("Door", true, true));
// console.log(checkAvailableDiscountItem("IPhone 6", true, false));
// console.log(checkAvailableDiscountItem("IPhone 20", false, false));

//*   false       false    true
// if (100 < 20 || 10 > 200 || 100 > 99) {
//   console.log(true);
// }

const text = "Hello Mr.John";
// console.log(text[3]); // 'l'
// console.log(text[7]); // 'r'

const slicedText = text.slice(6);
// console.log(slicedText);

const searchValue = "SaMSUng";
const dbSearch = "samsung";

// console.log(searchValue === dbSearch); // false

const loveredSearchValue = searchValue.toLowerCase();
const upperedSearchValue = searchValue.toUpperCase();
// console.log("Uppered text:", upperedSearchValue);
// console.log("Lovered text:", loveredSearchValue);

// console.log(loveredSearchValue === dbSearch); // true

// ? завдання 1

function checkAvailability(item, isAvailable, isNew) {
  if (isAvailable === true) {
    if (isNew === true) {
      console.log(`${item} доступний і є новинкою!`);
    } else {
      console.log(`${item} доступний, але це не новинка.`);
    }
  } else {
    console.log(`${item} відсутній.`);
  }
}

// checkAvailability("Телефон", true, true);
// checkAvailability("Ноутбук", true, false);
// checkAvailability("Навушники", false, false);

// ? завдання 2

function checkSale(item, isAvailable, quantity, onSale) {
  if (isAvailable === true) {
    if (onSale === true) {
      console.log(`${item}: У наявності ${quantity} штук. На розпродажі!`);
    } else {
      console.log(`${item}: У наявності ${quantity} штук. Без знижки.`);
    }
  } else {
    console.log(`${item}: Немає в наявності.`);
  }
}

// checkSale("Телефон", true, 10, true);
// checkSale("Ноутбук", true, 5, false);
// checkSale("Навушники", false, 0, false);

// ? завдання 3

function searchItem(searchValue, dbValue) {
  const loweredSearchValue = searchValue.toLowerCase();
  const loweredDbValue = dbValue.toLowerCase();

  if (loweredSearchValue === loweredDbValue) {
    return true;
  } else {
    return false;
  }
}

// console.log(searchItem("SaMsung", "samsung")); // true
// console.log(searchItem("iphone", "iPhone")); // true
// console.log(searchItem("Laptop", "Desktop")); // false

// const text2 = "Frontend Developer";

// console.log(text2.slice(0, 8));
// console.log(text2.slice(9));

// ! ДОМАШНЄ

// ? завдання 1

// Завдання 1: Перевірка доступності продукту
// Напишіть функцію, яка перевіряє, чи продукт є в наявності і чи є він ексклюзивним. Вивести відповідне повідомлення:

// [Продукт] доступний і є ексклюзивним!
// [Продукт] доступний, але це не ексклюзивний продукт.
// [Продукт] відсутній.

function checkSale(product, accessibility) {
  if (product) {
    if (accessibility) {
      console.log(`${product}: продукт є в наявності та є ексклюзивним`);
    } else {
      console.log(`${product}: доступний, але це не ексклюзивний продукт.`);
    }
  } else {
    console.log(`${product}: відсутній.`);
  }
}

// checkSale("productNAME", true);
// checkSale("productNAME", false);

// ? завдання 2

const text3 = "Програмування для початківців";

// console.log(text3.slice(0, 13));

const text4 = "JavaScript Developer";

// console.log(text4.slice(0, 10));

// ? завдання 3

function checkTextLength(text) {
  if (text.length > 20) {
    return `Текст занадто довгий. Обрізано: ${text.slice(0, 14)}...`;
  } else {
    return `Текст підходить: ${text}`;
  }
}

// console.log(
//   checkTextLength("Це занадто довгий текст, який потрібно скоротити.")
// );
// console.log(checkTextLength("Короткий текст"));
