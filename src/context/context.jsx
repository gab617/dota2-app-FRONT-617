import { createContext, useEffect, useState } from 'react'

export const Context = createContext({})

export function ContextProvider({ children }) {
    const [listHeros, setListHeros] = useState([]) //Listado de heroes (datos basicos para armar el listado)
    const [heroSelected, setHeroSelected] = useState({})// Heroe que se selecciona en la lista (click)
    const [heroDetailSelected, setHeroDetailSelected] = useState({})// Datos de heroe detallado.
    

    const [heroHover, setHeroHover] = useState('')


    function handleOver(hero) { //funcion para manejar el hover en el formulario luego de la busqueda
        const { name_loc } = hero
        console.log(name_loc, 'asdasd')
        const newHoverHero = hero.name_loc
        console.log(newHoverHero)
        setHeroHover(newHoverHero)
    }
    function handleOffOver() {//luego que se termina el hover en el componente buscado se borra la descripcion del personaje.
        setHeroHover('')
    }

    //Al hacer click desde HerosView se asigna el nuevo heroe clickeado
    const selectHero = (hero) => {
        const newHero = hero
        setHeroSelected(newHero)
    }

    //Funcion que le pide al servidor el dato del heroe mediante id,
    //Datos del herore al detalle.
    async function getDetailApi(){
        const detailHero = await fetch(`https://dota2-6174.onrender.com/api/dota2/${heroSelected.id}`)
        const json = await detailHero.json()
        setHeroDetailSelected(json)
        return json
    }

    //Llamada a servidor.
    //Asigna todos los datos de todos los heroes, 
    //Asigna heroe por defecto seleccionado, el primero de la lista
    useEffect(() => {
        fetch('https://dota2-6174.onrender.com/api/dota2')
            .then(response => response.json())
            .then(json => {
                setListHeros(json.listHeros) // Lista que se usa para dibujar todo el listado, pedido a la api
               /*  setHeroSelected(json.listHeros[0]) */// Asignacion de primer elemento
            })
            .catch(err => {
                
                console.log('ERROR EN SERVIDOR, SOLICIANDO DATOS GUARDADOS(no hay)')
            })
    }, [])
    


    return (
        <Context.Provider value={{
            listHeros, // Lista que reenderiza todos los heroes en forma de cartas
            heroSelected, // Variable que guarda los datos del heroe seleccionado para mostrar en detalle, por defecto se seleccion el anti-mage por ser el primero de la lista
            selectHero, // Funcion que asigna el heroe clickeado en la lista para detallar.
            heroDetailSelected, // Seleccion mediante servidor, el detalle del heroe clickado.
            getDetailApi, //Funcion que pide alserv, el detalle del heroe clickeado
            heroHover, handleOver, handleOffOver //sin uso por ahora
        }}>
            {children}
        </Context.Provider>
    )
}