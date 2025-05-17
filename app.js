
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Input field is empty!");
    }
    else{
        let newList = document.createElement("li");
        newList.innerHTML = inputBox.value;
        listContainer.appendChild(newList);

        let cross = document.createElement("span");
        cross.innerHTML = `x`;
        newList.appendChild(cross);
    }
    inputBox.value = "";
    savaData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // create a class (named checked; then automatically, the CSS will apply on that class)
        savaData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }
});

function savaData(){
    localStorage.setItem("Data", listContainer.innerHTML); // key, value
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}

showTask();