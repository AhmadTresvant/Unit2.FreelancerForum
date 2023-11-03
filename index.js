alert('helloWrld');

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


const body = document.body;
const h3Div = document.createElement("div");
const freelanceTitle = document.createElement("h1");
const averageStartingPrice = document.createElement("h3");
const availableFreeLance = document.createElement("h2");
const h3Name = document.createElement("h3");
const occupation = document.createElement("h3");
const startingPrice = document.createElement("h3");
const nameUl = document.createElement("ul");
const occupationUl = document.createElement("ul");
const startingPriceUl = document.createElement("ul");
const nameLi1 = document.createElement("li");
const nameLi2 = document.createElement("li");
const nameLi3 = document.createElement("li");
const occupationLi1 = document.createElement("li");
const occupationLi2 = document.createElement("li");
const occupationLi3 = document.createElement("li");
const startingPriceLi1 = document.createElement("li");
const startingPriceLi2 = document.createElement("li");
const startingPriceLi3 = document.createElement("li");

freelanceTitle.textContent = "Freelancer Forum";
averageStartingPrice.textContent = "The average starting price is $50";
availableFreeLance.textContent = "Available Freelancers";
h3Name.textContent = "Name";
occupation.textContent = "Occupation";
startingPrice.textContent = "Starting Price";
nameLi1.textContent = "Alice";
nameLi2.textContent = "Bob";
nameLi3.textContent = "Carol";
occupationLi1.textContent = "Writer";
occupationLi2.textContent = "Teacher";
occupationLi3.textContent = "Programmer";
startingPriceLi1.textContent = "$30";
startingPriceLi2.textContent = "$50";
startingPriceLi3.textContent = "70";

body.appendChild(freelanceTitle);
body.appendChild(averageStartingPrice);
body.appendChild(availableFreeLance);
body.appendChild(h3Name);
body.appendChild(occupation);
body.appendChild(startingPrice);
body.appendChild(nameUl);
body.appendChild(occupationUl);
body.appendChild(startingPriceUl);
nameUl.appendChild(nameLi1);
nameUl.appendChild(nameLi2);
nameUl.appendChild(nameLi3);
occupationUl.appendChild(occupationLi1);
occupationUl.appendChild(occupationLi2);
occupationUl.appendChild(occupationLi3);
startingPriceUl.appendChild(startingPriceLi1);
startingPriceUl.appendChild(startingPriceLi2);
startingPriceUl.appendChild(startingPriceLi3);

freelanceTitle.setAttribute("style", "color: red;");






