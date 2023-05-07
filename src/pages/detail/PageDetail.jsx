import { useContext, useEffect, useState } from 'react'
import './PageDetail.css'
import { Context } from '../../context/context'
import { useDetail } from '../../hooks/useDetail'

//heroSelected hace referencia al objeto el cual define a un personaje en la lista de todos los heroes,
// objeto que no es igual al objeto que se utiliza para especificar el detalle de tal heroe, solo los id son iguales
export function PageDetail() {
    const { listHeros, selectHero } = useContext(Context)

    const { heroSelected, getDetailApi, heroDetailSelected } = useDetail()
    const [loading, setLoading] = useState(false)
    const [showHoverAbilitie, setShowHoverAbilitie] = useState(false)

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

    function handleMouseEnter(){
        console.log('enter')
        setShowHoverAbilitie(true)
    }
    function handleMouseLeave(){
        console.log('leave')
        setShowHoverAbilitie(false)
    }

    useEffect(() => {
        setLoading(true)
        getDetailApi().then(res => {
            console.log(res.name_loc)
            setLoading(false)
        })
    }, [heroSelected])
    if (loading) return <div className="loader"></div>

    return (
        <>

            <div className='contenedor-botones'>
                <button
                    onClick={handleClickFormer}
                    className='boton-sophisticado boton-izquierdo'>
                    Anterior
                </button>
                <button
                    onClick={handleClickNext}
                    className='boton-sophisticado boton-derecho'>
                    Siguiente
                </button>
            </div>
            <div className="pageDetail">
                <div className='detail-data'>
                    <div>
                        <h1>{heroDetailSelected?.name_loc}</h1>
                        <p>{heroDetailSelected.bio_loc}</p>
                    </div>
                    <div className='list-abilities'>
                        <h2 htmlFor="">Habilidades</h2>
                        <ul>
                            {
                                heroDetailSelected?.abilities?.map((ability) => (
                                    <li 
                                        key={ability.id}
                                        onMouseEnter={handleMouseEnter}       
                                        onMouseLeave={handleMouseLeave}
                                        >
                                        {/* <h3>{ability.name_loc}</h3> */}
                                        <section className="abilities-description">
                                            <img src={ability.thumb_image} alt="img ability" />
                                            {/* <p>{ability.desc_loc}</p> */}
                                        </section>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='picture-hero'>
                    {/*  <img src={heroDetailSelected?.thumb_image} alt="img-detail" /> */}
                    <video loop autoPlay>
                        <source src={heroDetailSelected.thumb_video} type="video/webm" ></source>
                    </video>
                </div>
            </div>
        </>
    )

}