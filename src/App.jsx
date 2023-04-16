import React, { useContext, useState } from "react";
import { HerosView } from "./components/HerosView";
import { Context } from "./context/context";
import { Detail } from "./components/compDetHero.jsx/Detail";

export function App() {
    const { heroSelected } = useContext(Context)
    //el heroe seleccionado para ser mostrado en el detalle por defecto es el anti-mage (array-heroes[0])
    //al hacer click en un heroe, se soliciata al servidor el json con los datos de ese heroe, mediante el id
    const [heroDetailData, setHeroDetailData] = useState(heroSelected)
    console.log(heroDetailData)

    return (
        
        <div className="App">
            <HerosView heroDetailData={heroDetailData}/>
        </div>
    )

}
