const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)  // add a new child node to an existing parent node

        // adding cross tag
        let span = document.createElement("span")
        span.innerHTML = "\u00d7" // this code will create cross sign
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        //It will adding a new class or removing the existing classes
        e.target.classList.toggle("checked") 
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()  // parent element is li.
        saveData()
    }
}, false)

// saving data in the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

// After closing and opening the browser it will save the data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()