//criar objetos com cracteristicas dela
let spaceship = {
    velocity: 0,
    speedUp: function(accelaration){
        this.velocity += accelaration
    }
}

//criar função para registrar a nave
function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da nave: ")
    spaceship.type = prompt("Informe o tipo da nave: ")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s): "))
}

//criar função que vamos utilizar para chamar o SpeedUp da nave
function accelerate(){
    let accelaration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(accelaration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA" + 
        "\nVelocidade da nave: " + spaceship.velocity + "km/s" +
        "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

//criar função para parar a nave
function stop(){
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
        + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

//criar função para exibir o menu para que o usuário possa dizer se quer acelerar ou parar a nave e poder validar as opções que ele digitou
function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1-Acelerar\n2-Parar")
        switch (chosenOption) {
            case "1":
                accelerate()
                break;
            case "2":
                stop()
                break
            default:
                alert("Opção inválida");
        }
    } while (chosenOption != "2");
}

// chamar as duas funções que vão iniciar a aplicação

registerSpaceship()
showMenu()