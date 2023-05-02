import { useContext, useEffect, useState } from 'react'
import './Detail.css'
import { Context } from '../../context/context'
import { useDetail } from '../../hooks/useDetail'

//heroSelected hace referencia al objeto el cual define a un personaje en la lista de todos los heroes,
// objeto que no es igual al objeto que se utiliza para especificar el detalle de tal heroe, solo los id son iguales
export function Detail() {

    const {heroSelected, getDetailApi, heroDetailSelected} = useDetail()
    const [loading, setLoading] = useState(false)

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
            <div className="HeroDetail">
                <div className="img-hero">
                    <img src={heroDetailSelected?.thumb_image} alt="img-detail" />
                </div>
                <h1>{heroDetailSelected?.name_loc}</h1>
                <div>
                    <ul>
                        {
                            heroDetailSelected?.abilities?.map((ability) => (
                                <li key={ability.id}>
                                    <h3>{ability.name_loc}</h3>
                                    <section className="abilities-desc">
                                        <img src={ability.thumb_image} alt="img ability" />
                                        <p>{ability.desc_loc}</p>
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