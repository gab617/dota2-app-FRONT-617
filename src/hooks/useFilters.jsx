import { useContext } from "react"
import { Context } from "../context/context"

export function UseFilters() {
    const {filtersHeroContext} = useContext(Context)

    //Filtros para elegir por atributo que agregar al [heroes para renderizar]

    const filterHeros = (data, filter) => {
        return data.filter((hero) => (
            filter === hero.primary_attr 
        )
        )
    }

    return{ filterHeros }

}