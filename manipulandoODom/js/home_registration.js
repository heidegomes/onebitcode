//função que ira obter os valores digitados
function saveHouse() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value 

//Cria um novo objeto do DOM
    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², número " + number + " (" + neighborhood + " - " + city + " )"

//Cria um botão de remover
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

//Adicionar o botão remover dentro da lista
    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)

}

//cria a função de remover quando o botão remover for clicado
function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
    
}