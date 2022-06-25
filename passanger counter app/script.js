

                        // THE PASSANGER COUNTER APP 
// let take the string by Id 
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// Counter starts from 0 
let count = 0;

// Giving function to the increment button to increment the value 
function increment() {
count += 1;
countEl.textContent = count
}

// Adding function to the save button to save the value 
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


// THE END 

