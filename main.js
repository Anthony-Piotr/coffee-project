"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
//
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit-selection');
var roastSelection = document.querySelector('#roast-selection');

// tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);



//***************************************Our Code************************************

//Assign coffee-div id to variable
var coffeeDiv = document.querySelector('#coffee-div');
var roastSelectionChange = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-selection');
var roastInputSelection = document.querySelector('#roast-input-selection');
var coffeeInputSelection = document.querySelector('#coffee-input-selection');
var submitInput = document.querySelector('#submit-input');

//Render all coffees to screen for initial display
coffeeDiv.innerHTML = renderCoffees(coffees);



//Eventlisteners
roastSelectionChange.addEventListener('change', updateCoffees);
submitButton.addEventListener('click', coffeeNameFilter);
submitInput.addEventListener('click', addCoffee);


//This function creates the HTML tags for a single coffee
function renderCoffee(coffee) {
    var html = '<h2>'+ coffee.name + '</h2>';
    html += '<p>'+ coffee.roast + '</p>';
    return html;
}

//This function creates the HTML tags for a single coffee
    //The for loop assign each coffee elements HTML in ascending
    //order according to id number
function renderCoffees(coffees) {
    var html = '';
    for(var i=0; i <coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//This function filters coffees based on roast selection
//and returns the HTML for those filtered coffees
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    if(selectedRoast == 'all'){
        return coffeeDiv.innerHTML = renderCoffees(coffees);
    }

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);

}

//This function filters coffees based on coffee input
//and returns the HTML for those filtered coffees
function coffeeNameFilter(e){
    // e.preventDefault();
    var selectedCoffee = coffeeSelection.value;

    var filteredCoffees = [];


    coffees.forEach(function(coffee) {
        // if(coffee.name.toLowerCase() === selectedCoffee.toLowerCase()) {
        //     filteredCoffees.push(coffee);
        // }

        // for (var i=0; i <coffee.name.length; i++)
        // if (coffee.name[i] === selectedCoffee[i]) {
        //     coffeeString.concat(coffee.name[i]);
        //     }

        if(coffee.name.includes(selectedCoffee)){
            filteredCoffees.push(coffee);
        }
    });

    //Render filter coffee selection to the screen
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

//This function adds a new coffee object to the coffee array
function addCoffee(e){
    e.preventDefault();
    //Get new coffee values
    let coffeeName = coffeeInputSelection.value;
    let roastName = roastInputSelection.value;

    console.log(coffeeName + " is working and " + roastName + " is working.");

    //construct object
    var newCoffee = {id: coffees.length+1, name: coffeeName, roast: roastName};

    //new coffee array
    var newCoffees = coffees;
    //push on to coffee array
    newCoffees.push(newCoffee);

    //display coffee array
    coffeeDiv.innerHTML = renderCoffees(newCoffees);
}