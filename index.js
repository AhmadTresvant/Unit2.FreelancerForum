const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
];

const findAverage = () => {
const sum = freelancers.reduce((total, item) => total + item.price, 0);
return sum / freelancers.length;
}

console.log(findAverage());

const freelanceTitle = document.createElement("h1");
const averageStartingPrice = document.createElement("h3");
const availableFreeLance = document.createElement("h2");
const name = document.createElement("h3");
const occupation = document.createElement("h3");
const startingPrice = document.createElement("h3");
const nameUl = document.createElement("ul");
const occupationUl = document.createElement("ul");
const startingPriceUl = document.createElement("ul");




