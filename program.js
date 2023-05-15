// Get the parent container element from the HTML using its id
const parent = document.getElementById("container");

// Create a new unordered list element
const ul = document.createElement("ul");

// Define the list of car brands
const list = ["Honda", "Toyota", "Ford", "BMW", "Mercedes"];

// Iterate over each item in the list
list.forEach(item => {
    // Create a new list item element
    const li = document.createElement("li");

    // Set the text content of the list item to the current car brand
    li.innerText = item;

    // Append the list item to the unordered list
    ul.appendChild(li);
});

// Append the unordered list to the parent container
parent.appendChild(ul);
