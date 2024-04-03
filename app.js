
let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let ul = document.querySelector("ul")
let error = document.getElementById("error")


let alertP = document.createElement("p")
alertP.innerText = "Please Enter Text..."

addBtn.addEventListener("click", function () {
    if (input.value.trim() == "") {
        error.appendChild(alertP)
        alertP.style.display = "block"
    
    } else {

    let li = document.createElement("li");
    let liClass = document.createAttribute("class")
    liClass.value = "list"
    li.setAttributeNode(liClass)
    let span = document.createElement("span")
    span.innerText = input.value
    li.appendChild(span)
    ul.appendChild(li)


    let input1 = document.createElement("input")
    let attr = document.createAttribute("type")
    attr.value = "checkbox"
    input1.setAttributeNode(attr)
    li.appendChild(input1)
    let onClick = document.createAttribute("onclick");
    onClick.value = "func(event)";
    input1.setAttributeNode(onClick)
    
    

    
    let closeBtn = document.createElement("button")
    closeBtn.className = "close"
    closeBtn.innerText = "X"
    li.appendChild(closeBtn)
    let onBtnClick = document.createAttribute("onclick")
    onBtnClick.value = "Delete(event)"
    closeBtn.setAttributeNode(onBtnClick)

    input.value = ""
    saveItem()

}})



function Delete(e) {
    e.target.parentElement.remove();
    saveItem()
}

function func(e) {
    if (e.target.parentElement.classList.contains("list")) {
        e.target.parentElement.classList.remove("list")
        e.target.parentElement.classList.add("close1")
   
        saveItem()
    }
    else if (e.target.parentElement.classList.contains("close1")) {
        e.target.parentElement.classList.remove("close1")
        e.target.parentElement.classList.add("list")
        saveItem()
  
    };
}

function saveItem(){
    localStorage.setItem("h1234567", ul.innerHTML)
}


function showItem(){
    ul.innerHTML = localStorage.getItem("h1234567")
}

showItem();