"use strict"

function renderCoffee(coffee) {
    let html = "<div class = 'coffee'>";
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let selectedName = coffeeNames.value;
    console.log(selectedName)
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// function addNewCoffee(e) {
//     e.preventDefault();
//     let newId = coffees.length + 1;
//     let newName = coffeeAdd.value;
//     let newRoast = roastAdd.value;
//     coffees.push({id: newId, name: newName, roast: newRoast});
// }
function searchCoffees () {
    // re
    // let searchedCoffeeNames = coffeeNames.value;
    // console.log(coffeeNames.value);
}


// function updateNames(x) {
//     x.preventDefault();
//     let selectedName =
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeNames = document.querySelector('#coffee-name');
//created var here rather than in function to call later
// let searchedCoffeeNames = coffeeNames.value;

tbody.innerHTML = renderCoffees(coffees);

coffeeNames.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', updateCoffees);


