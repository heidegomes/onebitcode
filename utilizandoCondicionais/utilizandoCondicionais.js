let pilotName = prompt("Qual o nome do piloto?");
let velocity = 0;
let speed = prompt("Qual velocidade o piloto gostaria de acelerar?");
let speedConfirmation = confirm(" Sua velocidade de aceleração é " + speed + " Km/s");
let speedUpdate = speed;

if (speedUpdate <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (speedUpdate < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if (speedUpdate >= 40 && speedUpdate < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (speedUpdate >= 80 && speedUpdate < 100) {
    alert ("Velocidade alta. Considere diminuir.")
} else if (speedUpdate >= 100) {
    alert("Velocidade perigosa. Controle Automático Forçado.")
}

alert("Nome do piloto: " + pilotName +
    "\n\nVelocidade atual: " + speedUpdate + "Km/s");