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

if (age >= 18) {
  console.log("Hello adult");
} else if (age >= 13 && age < 18) {
  console.log("Hello teenager");
} else {
  console.log("Hello kid");
}
