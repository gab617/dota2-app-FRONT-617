import { useContext } from "react"
import { Context } from "../context/context"
import { UseFilters } from "../hooks/useFilters"
import { DetailHero } from "./DetailHero"
import { HeroCard } from "./HeroCard"
import './HerosView.css'
export function HerosView() {
    const { selectHero, data2 } = useContext(Context)
    const { filterHeros } = UseFilters()


    const filteredHerosStr = filterHeros(data2, 0) //Fuerza
    const filteredHerosAgi = filterHeros(data2, 1) //Agilidad
    const filteredHerosInt = filterHeros(data2, 2) //Inteligencia

    function handleClick(hero) {
        selectHero(hero)
    }

    return (
        <div className="principal">
            <div className="list-heroes">
                <ul className="str-view">
                    {
                        filteredHerosStr.map((hero) => (
                            <li key={hero.id}>
                                <HeroCard hero={hero} handleClick={handleClick} />
                            </li>
                        ))
                    }
                </ul>
                <ul className="agi-view">
                    {
                        filteredHerosAgi.map((hero) => (
                            <li key={hero.id}>
                                <HeroCard hero={hero} handleClick={handleClick} />
                            </li>
                        ))
                    }
                </ul>
                <ul className="int-view">
                    {
                        filteredHerosInt.map((hero) => (
                            <li key={hero.id}>
                                <HeroCard hero={hero} handleClick={handleClick} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <DetailHero />
        </div>
    )
}