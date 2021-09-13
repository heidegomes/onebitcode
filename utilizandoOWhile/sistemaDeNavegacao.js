//Sistema de navegação

let warpCount = 0;
let chosenOption = ""
let spaceship = prompt("Qual a o nome da nave?");

chosenOption = prompt("Deseja entrar em dobre espacial? \n1-Sim \n2-Não");

while (chosenOption == "1"){
    warpCount += 1;
    chosenOption = prompt("Deseja realizar a próxima dobra?  \n1-Sim \n2-Não");
    console.log("Dobra nº " + warpCount);
}
alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount);
