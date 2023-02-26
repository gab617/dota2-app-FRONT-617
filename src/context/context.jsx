import { createContext, useState } from 'react'
import {dataHeros2} from '../mocks/dataHeros2.json'

export const Context = createContext({})

export function ContextProvider({ children }) {
    
    const [data2] = useState(dataHeros2)
    const [heroSelected, setHeroSelected] = useState(data2[0])
    const [heroHover, setHeroHover] = useState('')

    function handleOver (hero){
        const {name_loc} = hero
        console.log(name_loc,'asdasd')
        const newHoverHero = hero.name_loc
        console.log(newHoverHero)
        setHeroHover(newHoverHero)
    }
    function handleOffOver(){
        setHeroHover('')
    }

    const [searchHero, setSearchHero] = useState('')
    //Al hacer click desde HerosView se asigna el nuevo heroe clickeado
    const selectHero = (hero) => {
        const newHero = hero
        setHeroSelected(newHero)
    }

    const [filtersHeroContext, setFiltersHero] = useState({
        primary_attr: ''
    })


    return (
        <Context.Provider value={{
            data2,
            filtersHeroContext,
            heroSelected,
            selectHero,
            searchHero,
            heroHover, handleOver, handleOffOver
        }}>
            {children}
        </Context.Provider>
    )
}