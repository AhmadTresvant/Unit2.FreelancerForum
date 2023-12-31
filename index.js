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
const flexContainer1 = document.createElement("div");
const flexContainer2 = document.createElement("div");
const flexContainer3 = document.createElement("div")
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

body.appendChild(flexContainer1);
flexContainer1.appendChild(freelanceTitle);
flexContainer1.appendChild(averageStartingPrice);
flexContainer1.appendChild(availableFreeLance);
body.appendChild(flexContainer2)
flexContainer2.appendChild(h3Name);
flexContainer2.appendChild(occupation);
flexContainer2.appendChild(startingPrice);
body.appendChild(flexContainer3);
flexContainer3.appendChild(nameUl);
flexContainer3.appendChild(occupationUl);
flexContainer3.appendChild(startingPriceUl);
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
flexContainer1.setAttribute("style", "display: flex; justify-content: center; align-items: center;   flex-direction: column;")
flexContainer2.setAttribute("style", "display: flex; justify-content: space-around; align-items: center;")
flexContainer3.setAttribute("style", "display: flex; justify-content: space-around; align-items: center;")
nameLi1.setAttribute("style", "list-style-type: none; margin-top: 20px")
nameLi2.setAttribute("style", "list-style-type: none; margin-top: 20px")
nameLi3.setAttribute("style", "list-style-type: none; margin-top: 20px ")
occupationLi1.setAttribute("style", "list-style-type: none; margin-top: 20px")
occupationLi2.setAttribute("style", "list-style-type: none; margin-top: 20px")
occupationLi3.setAttribute("style", "list-style-type: none; margin-top: 20px")
startingPriceLi1.setAttribute("style", "list-style-type: none;")
startingPriceLi2.setAttribute("style", "list-style-type: none; margin-top: 20px")
startingPriceLi3.setAttribute("style", "list-style-type: none; margin-right: 90px; margin-top: 20px")






