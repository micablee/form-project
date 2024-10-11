function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    const taskList = document.getElementById("taskList");

    // creating the elements
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = taskText;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        label.classList.toggle("completed");

    }

    // appending the elements
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
}

// Function to add the main goal
function addMainGoal(){
    const goalInput = document.getElementById("goalInput");
    const goalText = goalInput.value;
    const mainGoalList = document.getElementById("mainGoalList");

    mainGoalList.innerHTML = '';

    const goalItem = document.createElement("div");
    goalItem.textContent = `${goalText}`;
    mainGoalList.appendChild(goalItem);

    document.getElementById("goalInput").style.display = "none";
    document.getElementById("addGoalButton").style.display = "none";

    goalInput.value = "";
}

document.getElementById("addGoalButton").addEventListener("click", addMainGoal);


// Function to add the greetings and name
function editName() {
    let name = document.querySelector("#name");
    let header = document.querySelector(".header");
    header.textContent = `Good evening, ${name.value}`;
    document.getElementById("name").style.display = "none";
    document.getElementById("editButton").style.display = "none";
}
  
document.getElementById("editButton").addEventListener("click", editName);

document.getElementById("addButton").addEventListener('click', addTask);

let time = document.getElementById("time");
// declaring built in object from JS
let date = new Date();
// time.textContent = date;
time.textContent = `${date.getHours()}:${date.getMinutes()}`;
console.log(date.getHours());
console.log(date.getMinutes());


const quotes = [
    "For God gave us a spirit not of fear but of power and love and self control. 2 Timothy 1:7",
    "So be careful to live your life wisely, not foolishly. Ephesians 5:15",
    "With God all things are possible. Matthew 19:26",
    "Examine and see how good the Lord is. Happy is the person who trusts the Lord. Psalms 34:8"

];

let randomNumber = Math.random() * quotes.length;
let newNumber = Math.floor(randomNumber);
document.getElementById("randomQuote").textContent = quotes[newNumber];

// discover to add padding 