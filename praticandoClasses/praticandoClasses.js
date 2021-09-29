//Criando a classe da nave
class Spaceship {
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }
//Método que vai ser chamado quando a espaçonave for engatada na estação
    hitch() {
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

// Função que vai imprimir o meu menu e vai validar se a opção digitada pelo usuário é válida
function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("O que deseja fazer?\n" +
                                "1-Engatar nave\n" +
                                "2-Imprimir naves\n" +
                                "3- Sair do programa")
    }
    return chosenOption
}

// Função que vai pedir o nome e a quantidade de tripulantes da nave
function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

// função para imprimir a lista de naves
function printSpaceshipList(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
       spaceshipList += (index + 1) + "- " + spaceship.name + " ("+ spaceship.crewQuantity + " tripulantes)\n" 
    });
    alert(spaceshipList)
}
// Lista de naves engatadas na minha estação espacial
let hitchedSpaceships = []

// 
let chosenOption

while (chosenOption != 3) {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break;
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break;
    }
}
