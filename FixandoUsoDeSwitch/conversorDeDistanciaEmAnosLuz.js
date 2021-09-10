//Conversor de Distância em anos luz

let distanceLightYears = prompt("Qual a distãncia em anos-luz?");

let chosenOption = prompt("Para qual unidade você deseja converter? \n1-Parsec(pc) \n2-Unidade astronônima(AU) \n3-Quilômetros(km)\n\n (Digite o número da opção desejada)");

let chosenUnity
let convertedDistance



switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec";
        convertedDistance = distanceLightYears * 0.30660;
        break;
    case "2":
        chosenUnity = "Unidade Astronômica";
        convertedDistance = distanceLightYears * 63241.1;
        break;
    case "3":
        chosenUnity = "Quilômetros";
        convertedDistance = distanceLightYears *  9.5 * Math.pow(10,12);
        break;
    default:
        chosenUnity = "Unidade Identificada";
        convertedDistance = "Conversão fora do escopo";

        break;
}

alert("Distância em anos lus: " + distanceLightYears + "\n" + chosenUnity + ":" + convertedDistance);