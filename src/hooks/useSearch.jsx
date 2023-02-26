import { useContext, useState } from "react";
import { Context } from "../context/context";

export function useSearch() {
    const { data2, heroHover, handleOver } = useContext(Context)

    const [searchHero, setSearchHero] = useState('')
    const [herosFound, setHerosFound] = useState([])

    const findHeros = (valueInput) => {
        console.log(valueInput)
        if (valueInput === '') {
            setHerosFound('')
            return
        }
        const heroes = data2.filter((hero) => (
            hero.name_loc.startsWith(valueInput)
        ))
        setHerosFound(heroes)
    }


    function handleSearch(evt) {
        evt.preventDefault()
        const newSearch = evt.target.value
        setSearchHero(newSearch)
        findHeros(newSearch)
    }



    return {
        searchHero, handleSearch, findHeros, herosFound,
        handleOver, heroHover
    }
}