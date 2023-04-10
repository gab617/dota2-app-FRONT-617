import { createContext, useEffect, useState } from 'react'
import {dataHeros2} from '../mocks/dataHeros2.json'

export const Context = createContext({})

export function ContextProvider({ children }) {
    
    const [data2,setData] = useState([])
    const [heroSelected, setHeroSelected] = useState({})
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


    //Llamada a api en ves de usar mocks.
    //Asigna todos los datos de todos los heroes, 
    //Asigna heroe por defecto seleccionado, el primero de la lista
    //Si no hay respues del sevidor, se le asigna el 'mock'
    useEffect(()=>{
        fetch('http://localhost:3001/api/dota2')
        .then(response => response.json())
        .then(json => {
            console.log(json.dataHeros2)
            setData(json.dataHeros2)
            setHeroSelected(json.dataHeros2[0])
        })
        .catch(err =>{
            setData(dataHeros2)
            setHeroSelected(dataHeros2[0])
            console.clear()
            console.log('ERROR EN SERVIDOR, SOLICIANDO DATOS GUARDADOS')

        })

    },[])

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