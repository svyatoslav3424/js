const account1 = {
  name: "Mike Tyson",
  avatar: "https://image.backend.com",
  description: "мене звати майк",
  friends: ["John", "Frank", "Milana"],
  stats: {
    followers: 2,
    likes: 10,
    views: 12,
  },
};

console.log(`Hello my dear ${account1.name}!`);

console.log(
  `Your account has ${account1.stats.followers} followers and ${account1.stats.likes} likes `
);

const account2 = {
  name: "Mickey Tyson",
  avatar: "https://image.backend2.com",
  description: "I'm not Mickey",
  friends: ["Nicolas", "Jack"],
  stats: {
    followers: 4,
    likes: 8,
    views: 20,
  },
};

const totalLikes = account1.stats.likes + account2.stats.likes;

console.log(`загальна кількість лайків ${totalLikes}`);

console.log(account1.friends);
account1.friends.push("Barney");
console.log(account1.friends);
account1.friends.pop();
account1.friends.pop();
account1.friends.push("Valentina");
console.log(account1.friends);

const product1 = {
  name: "Apple",
  price: 10,
  quantity: 50,
};

const product2 = {
  name: "Banana",
  price: 5,
  quantity: 100,
};

const product3 = {
  name: "Orange",
  price: 8,
  quantity: 80,
};

const totalLikes2 = product1.quantity + product2.quantity + product3.quantity;

console.log(`У нас на складі всього ${totalLikes2} товарів`);
