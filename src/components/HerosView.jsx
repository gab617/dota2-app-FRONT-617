import { useContext } from "react"
import { Context } from "../context/context"
import { UseFilters } from "../hooks/useFilters"
import './HerosView.css'
import { ListHerosSection } from "./ListHerosSection"

export function HerosView() {
    const { selectHero, listHeros } = useContext(Context)
    const { filterHeros, handleImageError } = UseFilters()

    const filteredHerosStr = filterHeros(listHeros, 0) //Fuerza
    const filteredHerosAgi = filterHeros(listHeros, 1) //Agilidad
    const filteredHerosInt = filterHeros(listHeros, 2) //Inteligencia

    function handleClick(hero) {
        selectHero(hero)
    }

    return (
        <div className="list-heroes">
            <ListHerosSection
                filteredHeros={filteredHerosStr}
                handleImageError={handleImageError}
                handleClick={handleClick}
                className={'str-view'}
            />
            <ListHerosSection
                filteredHeros={filteredHerosAgi}
                handleImageError={handleImageError}
                handleClick={handleClick}
                className={'agi-view'}
            />
            <ListHerosSection
                filteredHeros={filteredHerosInt}
                handleImageError={handleImageError}
                handleClick={handleClick}
                className={'int-view'}
            />
        </div>
    )
}