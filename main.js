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
function addNewCoffee() {
    let newId = coffees.length + 1;
    coffees.id.push(newId)
    let newName = addCoffee.value;
    coffees.name.push(newName)
    let newRoast = addRoast.value;
    coffees.roast.push(newRoast)
    // coffees.push({id: newId, name: newName, roast: newRoast});
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
let submitButton2 = document.querySelector('#submit-2');
let addCoffee = document.querySelector('#add-name');
let addRoast = document.querySelector('#add-roast');

tbody.innerHTML = renderCoffees(coffees);

coffeeNames.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', updateCoffees);


