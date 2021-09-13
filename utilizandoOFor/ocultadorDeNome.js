
let spaceship = prompt("Digite o nome da nave: ");
let character = prompt("Qual caracter você quer substituir? ");
let newCharacter = prompt("Por qual caracter você quer substituí-lo?");

let newSpaceship = "";

for(let i = 0; i < spaceship.length; i++){
    if(spaceship[i] == character){
        newSpaceship += newCharacter
    } else {
        newSpaceship += spaceship[i]
    }

}
alert("O novo nome da nave é " + newSpaceship);