import { useContext, useEffect, useState } from 'react'
import './PageDetail.css'
import { Context } from '../../context/context'
import { useDetail } from '../../hooks/useDetail'
import { ButtonNavigation } from './ButtonNavigation'
import { ListAbilities } from './ListAbilities'
import { DataHero } from './DataHero'
import { PictureDetail } from './PictureDetail'


//heroSelected hace referencia al objeto el cual define a un personaje en la lista de todos los heroes,
// objeto que no es igual al objeto que se utiliza para especificar el detalle de tal heroe, solo los id son iguales
export function PageDetail() {
    const { listHeros, selectHero } = useContext(Context)

    const { heroSelected, getDetailApi, heroDetailSelected } = useDetail()
    const [loading, setLoading] = useState(false)

    //Busca desde el index en listHeros del heroe seleccionado para detalle,
    //Compara cada id del heroe en listHeros con el heroe seleccionado
    //Para siguente heroe y proximo, lo asigna al estado global con la funcion definida en el contexto
    function handleClickFormer(evt) {
        evt.preventDefault()
        console.log('former')
        let indexCurrentHero = listHeros.findIndex(hero => hero.id == heroSelected.id)
        if (indexCurrentHero > 0) {
            indexCurrentHero--
            selectHero(listHeros[indexCurrentHero])
        } else {
            console.log('Primer indice')
            return
        }
        console.log(listHeros[indexCurrentHero], 'Anterior')
    }

    function handleClickNext(evt) {
        evt.preventDefault()
        console.log('next')
        let indexCurrentHero = listHeros.findIndex(hero => hero.id == heroSelected.id)
        if (indexCurrentHero < listHeros.length - 1) {
            indexCurrentHero++
            selectHero(listHeros[indexCurrentHero])
        } else {
            console.log('Ultimo Indice')
            return
        }
        console.log(indexCurrentHero, 'Siguiente')
    }

    /* CADA VEZ QUE SE CLICKEE EN UN PERSONAJE, heroSelected Cambiara de id, lo cual hara una 
    peticion a la api con ese id, desde getDetailApi, la cual usa el nuevo valor de heroSelected
    para pedir los datos a la api y asi poder renderizar nuevamente todo el componente PageDetail
    con los datos nuevos. */
    useEffect(() => {
        setLoading(true)
        getDetailApi().then(res => {
            console.log(res.name_loc)
            setLoading(false)
        })
    }, [heroSelected])
    if (loading) return (
        <div className='loader-cont'>
            <div className="loader"></div>
            <h1>Solicitando datos del Heroe</h1>
        </div>
    )

    return (
        <div className='fade-in'>
            <div className='contenedor-botones'>
                <ButtonNavigation
                    handleClick={handleClickFormer}
                    text={'Anterior'}
                    className={'boton-izquierdo'}

                />
                <ButtonNavigation
                    handleClick={handleClickNext}
                    text={'Siguiente'}
                    className={'boton-derecho'}
                />
            </div>

            <div className="
                flex 
                flex-col 
                mt-1 
                bg-black 
                bg-opacity-70 
                text-white
                xl:w-95
                xl:m-auto
                xl:rounded-xl
                ">{/* pageDetail */}
                <div className='lg:flex'>
                    <PictureDetail
                        heroDetailSelected={heroDetailSelected}
                    />
                    <div className='lg:flex lg:flex-col lg:justify-between xl:w-5/12'>{/* detail-data */}
                        <DataHero
                            heroDetailSelected={heroDetailSelected}
                        />

                        <ListAbilities
                            heroDetailSelected={heroDetailSelected}
                        />
                    </div>
                </div>


                <div>
                    <h1 className='text-center mt-2'>COMPLEJIDAD</h1>
                    <div className='flex w-full justify-center gap-2 text-3xl'>
                        {
                            Array.from({ length: heroDetailSelected.complexity }, (_, index) => (
                                <span key={index}>{'★'}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='            
            bg-black 
            bg-opacity-70 
            text-white
            xl:w-95
            xl:m-auto
            xl:rounded-xl'>
                <p className='
            w-95
            m-auto
            bg-opacity-70 
            text-white'>{/*story*/}
                    {heroDetailSelected.bio_loc}
                </p>
            </div>

        </div>
    )

}