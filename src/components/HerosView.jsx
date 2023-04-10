import { useContext } from "react"
import { Context } from "../context/context"
import { UseFilters } from "../hooks/useFilters"
import { DetailHero } from "./DetailHero"
import './HerosView.css'
import { ListHerosSection } from "./ListHerosSection"
export function HerosView() {
    const { selectHero, data2 } = useContext(Context)
    const { filterHeros, handleImageError } = UseFilters()


    const filteredHerosStr = filterHeros(data2, 0) //Fuerza
    const filteredHerosAgi = filterHeros(data2, 1) //Agilidad
    const filteredHerosInt = filterHeros(data2, 2) //Inteligencia

    function handleClick(hero) {
        selectHero(hero)
    }

    return (
        <div className="principal">
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
            <DetailHero />
        </div>
    )
}