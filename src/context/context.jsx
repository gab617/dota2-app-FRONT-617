import { createContext, useEffect, useState } from 'react'
import { navigate } from 'wouter/use-location'
import dataHerosEdit from "../mocks/dataHerosEdit.json"

export const Context = createContext({})
const urlApi = "https://serviciosunificados.onrender.com/d2"


export function ContextProvider({ children }) {
    const [listHeros, setListHeros] = useState([]) //Listado de heroes (datos basicos para armar el listado)
    const [heroSelected, setHeroSelected] = useState({})// Heroe que se selecciona en la lista (click)
    const [heroDetailSelected, setHeroDetailSelected] = useState({})// Datos de heroe detallado.


    //Al hacer click desde HerosView se asigna el nuevo heroe clickeado
    //Llega desde el hook
    const selectHero = (hero) => {
        const newHero = hero
        navigate("/det")
        setHeroSelected(newHero)
    }

    //Funcion que le pide al servidor el dato del heroe mediante id,
    //Datos del herore al detalle.
    async function getDetailApi() {
        const detailHero = await fetch(`${urlApi}/detail/${heroSelected.id}`)
        const json = await detailHero.json()
        setHeroDetailSelected(json)
        return json
    }

    useEffect(() => {
        setListHeros(dataHerosEdit)
        fetch(`${urlApi}/ping`)
            .then(res => {
                console.log('ping ', res.status)
            })
    }, [])



    return (
        <Context.Provider value={{
            listHeros, // Lista que reenderiza todos los heroes en forma de cartas
            heroSelected, // Variable que guarda los datos del heroe seleccionado para mostrar en detalle, por defecto se seleccion el anti-mage por ser el primero de la lista
            selectHero, // Funcion que asigna el heroe clickeado en la lista para detallar.
            heroDetailSelected, // Seleccion mediante servidor, el detalle del heroe clickado.
            getDetailApi, //Funcion que pide alserv, el detalle del heroe clickeado
        }}>
            {children}
        </Context.Provider>
    )
}