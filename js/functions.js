function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

function substract(num1, num2) {
  const result = num1 - num2;

  return result;
}

// const result = substract(50, 20);
// console.log(result);

// sum(100, 200)
// sum(10, 20)

function greeting(name) {
  //   console.log("WELCOME " + name + " to our site");
  console.log(`WELCOME ${name} to our site`);
}

// greeting("Mike");
// greeting("Linda");

const age = 2;

// if (age >= 18) {
//   console.log("Hello adult");
// } else if (age >= 13 && age < 18) {
//   console.log("Hello teenager");
// } else {
//   console.log("Hello kid");
// }

// function calculate(var1, var2, operation) {
//   if (operation == "add"){
//     return var1 + var2
//   } else if (operation == "subtract") {
//     return var1 - var2
//   }
// }
// console.log(calculate(15, 5, "add"))
// console.log(calculate(15, 5, "subtract"))

function power(num1, num2) {
  return num1 ** num2;
}
const result = power(2, 3);
// console.log(result);

function customGreeting(name) {
  if (name == "Анна") {
    return "Привіт Анна! Радий тебе бачити.";
  } else {
    // return "Привіт "+ name + " Як справи?"
    return `Привіт ${name}. Як справи?`;
  }
}
// customGreeting("Анна");
// customGreeting("Олег");
// console.log(customGreeting("Анна"))
// console.log(customGreeting("Олег"))

function calculate(num1, num2, operation) {
  // if (operation === "add") {
  //   const result = num1 + num2;
  //   console.log(result);
  // } else if (operation === "subtract") {
  //   const result = num1 - num2;
  //   console.log(result);
  // } else if (operation === "multiply") {
  //   const result = num1 * num2;
  //   console.log(result);
  // } else if (operation === "division") {
  //   const result = num1 / num2;
  //   console.log(result);
  // }

  switch (operation) {
    case "add":
      return num1 + num2;

    case "subtract":
      return num1 - num2;

    case "multiply":
      return num1 * num2;

    case "division":
      return num1 / num2;
  }
}

// console.log(calculate(10, 20, "add"));
// console.log(calculate(10, 20, "subtract"));
// console.log(calculate(10, 10, "multiply"));
// console.log(calculate(10, 10, "division"));

// ! 1 завдання

function getDayType(day) {
  switch (day) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четвер":
    case "П’ятниця":
      return "Це будній день";
    case "Субота":
    case "Неділя":
      return "Це вихідний";
    default:
      return "Невірно вказаний день";
  }
}

// console.log(getDayType("Понеділок"));
// console.log(getDayType("Субота"));
// console.log(getDayType("Свято"));

// ! 2 завдання

function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// console.log(maxOfTwo(10, 20));
// console.log(maxOfTwo(5, 2));

function findTheBiggestText(text1, text2) {
  if (text1.length > text2.length) {
    return text1;
  } else {
    return text2;
  }
}

// console.log(findTheBiggestText("Hello mike how are you", "Hello john"));

function sayHelloByName(name) {
  return `Hello my dear, I'm glad to see you ${name}!`;
}

// console.log(sayHelloByName("Frank"));
// console.log(sayHelloByName("Adam"));
// console.log(sayHelloByName("Christine"));
// console.log(sayHelloByName("Milana"));

const userName = "John";
const userAge = 35;

// console.log(`Hello ${userName}. You are ${userAge} years old `);

//! Знайти мінімум з двох чисел:
//! Напишіть функцію, яка приймає два числа як аргументи та повертає менше з них. Перевірте функцію на кількох парах чисел.

function minOfTwo(a, b) {
  // if (a < b) {
  //   return a;
  // } else {
  //   return b;
  // }

  return a < b ? a : b;
}

// console.log(minOfTwo(10, 20))

// function findTheBiggestText(text1, text2) {
//   if (text1.length > text2.length) {
//     return text1;
//   } else {
//     return text2;
//   }
// }

//! Знайти коротший текст:
//! Напишіть функцію, яка приймає два рядки як аргументи та повертає той, у якого менше символів. Якщо довжина обох рядків однакова, поверніть будь-який з них. Перевірте функцію на кількох прикладах.

function findTheSmallesttText(text1, text2) {
  if (text1.length > text2.length) {
    return text2;
  } else {
    return text1;
  }
}

// console.log(findTheSmallesttText("Hello", "By"));

// !  Згенерувати прощальне повідомлення:
// Напишіть функцію, яка приймає ім'я як аргумент і повертає персоналізоване прощальне повідомлення, наприклад: "До побачення, [ім'я], бережіть себе!". Викличте функцію з різними іменами для тестування.

function sayByeByName(name) {
  return `До побачення, ${name}, бережіть себе!`;
}

console.log(sayByeByName("Milana"));

// Вивести інформацію про домашнього улюбленця:
// Задайте дві змінні: одну для імені домашнього улюбленця, а іншу для його віку. Використайте шаблонні рядки для створення речення, яке описує улюбленця, наприклад: "Вашого улюбленця звати [ім'я], йому [вік] років." Виведіть речення у консоль.

const petName = "Mike";
const petAge = 5;

console.log(`Вашого улюбленця звати ${petName}, йому ${petAge} років.`);
