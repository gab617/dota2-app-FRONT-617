import { useContext, useEffect, useState } from 'react'
import './Detail.css'
import { Context } from '../../context/context'

//heroSelected hace referencia al objeto el cual define a un personaje en la lista de todos los heroes,
// objeto que no es igual al objeto que se utiliza para especificar el detalle de tal heroe, solo los id son iguales
export function Detail({ heroDetail, heroSelected }) { 
    const [hero, setHero] = useState(heroDetail) //recibe desde HerosView el valor del pj seleccionado pedido desde el contexto
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        //se solicita mediante el id del heroe seleccionado en la lista de heroes, 
        //un nuevo json, con el detalle de todas las habilidades de ese heroe
        fetch(`http://localhost:3001/api/dota2/${heroSelected.id}`) 
        .then(res => res.json())
        .then(response =>{
            setHero(response)
            setLoading(false)
        })

    },[heroSelected])
    console.log(hero, ' Luego del effect')
    if (loading) return <div className="loader"></div>

    return (
        <>
            <div className="HeroDetail">
                <div className="img-hero">
                    <img src={hero?.thumb_image} alt="img-detail" />
                </div>
                <h1>{hero?.name_loc}</h1>
                <div>
                    <ul className='abilities'>
                        {
                            hero?.abilities?.map((ability) => (
                                <li key={ability.id}>
                                    <section className="abilities-desc">
                                        <img src={ability.thumb_image} alt="img ability" />
                                       {/*  <p>{ability.desc_loc}</p> */}
                                        <h3>{ability.name_loc}</h3>                                    

                                    </section>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )

}