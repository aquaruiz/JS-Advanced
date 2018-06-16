function addItem() {
    let newItemText = document.getElementById("newItemText").value
    let newItemValue = document.getElementById("newItemValue").value
    let newOption = document.createElement("option") 
    newOption.textContent = newItemText  
    newOption.setAttribute("value", newItemValue)   
    
    document.getElementById("menu").add(newOption)

    document.getElementById("newItemText").value = ""
    document.getElementById("newItemValue").value = ""
}