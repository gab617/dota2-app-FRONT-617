//SIN USAR
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"
import { useSearch } from "../hooks/useSearch"

import './Detail.css'
import { FormSearch } from "./compDetailHeros/FormSearch"
import { Presentation } from "./compDetailHeros/Presentation"
import { HeroData } from "./compDetailHeros/HeroData"
export function DetailHero() {
    const { heroSelected } = useContext(Context)
    const { heroHover } = useSearch()
    const [primAttr, setPrimAttr] = useState(heroSelected.primary_attr)

    const [hoverText, setHoverText] = useState('')
    const {
        id,
        name,
        name_loc,
        primary_attr,
        image,
        attribute_img
    } = heroSelected

    useEffect(() => {
        if (heroSelected.primary_attr == 0) {
            setPrimAttr('Fuerza')
            return
        }
        if (heroSelected.primary_attr == 1) {
            setPrimAttr('Agilidad')
        }
        if (heroSelected.primary_attr == 2) {
            setPrimAttr('Inteligencia')
            return
        }
    }, [heroSelected])

    useEffect(() => {
        setHoverText(heroHover)
    }, [heroHover])

    return (
        <>
            <div className="detail">
                <Presentation
                    name_loc={name_loc}
                    primary_attr={primary_attr}
                    attribute_img={attribute_img}
                    image={image}
                />
                <FormSearch hoverText={hoverText} />
            </div>
        </>
    )
}