const numbers = [1950, 1960, 1970];
// console.log(numbers[0]);
// includes (string + number) - включає в себе
// console.log(numbers.includes(1950)); //! true

numbers.pop();
// console.log(numbers)

numbers.push(1970);
numbers.push("Milana");
// console.log(numbers)

const string = "Hello my beautiful world!";

const words = string.split(" ");
// console.log(words);
const joinedWords = words.join(" ");
// console.log(joinedWords);
// console.log(string.includes("my"));

const greeting = "Hello my dear John!";
const splittedGreeting = greeting.split(" ");
const lastWord = splittedGreeting[3];
const splittedLastWord = lastWord.split("");
splittedLastWord.pop();
const joinedSplittedLastWord = splittedLastWord.join("");
console.log(joinedSplittedLastWord);
// const slicedGreeting = greeting.slice(14, 18);
// console.log(slicedGreeting);

// ! завдання 1

const shoppingList = "milk, bread, eggs, butter, cheese";
const shoppingArray = shoppingList.split(", ")

shoppingArray.push("apples")

shoppingArray.pop()

const updatedShoppingList = shoppingArray.join(", ");
console.log("Оновлений список покупок:", updatedShoppingList)

// ! завдання 2


// ! завдання 3

const tags = "JavaScript, HTML, CSS, React, Node";
const tagsArray = tags.split(", ")
const tagToRemove = "CSS";
const tagToCheck = "React";

console.log("Оновлений список тегів:", tagsArray)
console.log(`Чи є тег "${tagToCheck}" у списку?`)

// ! завдання 4

const date = "2024-12-25";

const formattedDate = 

console.log("Дата у новому форматі:", formattedDate);

// ! завдання 1

const numbers = [3, 7, 12, 5, 9];
let sum = 0;

for (let i = 0; i < numbers.length; i+) {
  sum += numbers[i]; 
}
console.log("Сума чисел у масиві:", sum);