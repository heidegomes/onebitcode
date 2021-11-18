import React, {Fragment} from 'react';
import Planet from './planet';

const clickOnPlanet = (name) => {
    console.log(`Um click no planeta: ${name}`)
}

const Planets = () => {
    return (
        <Fragment>
            <h1>Planet List</h1>
            <button>Show message!</button>
            <hr/>
            <Planet name="Mercúrio"

            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            title_with_underline={true}
            gray={true}
            />
            <Planet name="Plutão"
            description= "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno."
            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
            clickOnPlanet={clickOnPlanet}
            gray={true}
            />
        </Fragment>
    )
}

export default Planets;