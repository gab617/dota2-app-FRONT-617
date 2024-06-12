import { useState } from "react"
import "./DataHero.css"


export function DataHero({ heroDetailSelected }) {

    /* OBVIAMENTE ESTA FUNCION ES PROVISORIA(VA A QUEDAR PARA SIEMPRE :v ) Optimizar pls Elijo imagenes de atribuitos dependiendo del atributo principal que es de 0 a 3*/
    function imgAttr(attr) {
        const atributo = attr
        let urlAtr = ""
        let nameAtt = ""
        if (atributo == 0) {
            urlAtr = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
            nameAtt = "Fuerza"
        } else if (atributo == 1) {
            urlAtr = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
            nameAtt = "Agilidad"
        }
        else if (atributo == 2) {
            urlAtr = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
            nameAtt = "Inteligencia"
        }
        else if (atributo == 3) {
            urlAtr = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
            nameAtt = "Universal"
        }
        return { urlAtr, nameAtt }

    }
    const [data, setData] = useState(imgAttr(heroDetailSelected.primary_attr))



    return (
        <div id="DataHeroDetail">
            <h1 className="text-7xl mb-10 mt-5">{heroDetailSelected?.name_loc}</h1>
            {/* <p>{heroDetailSelected.bio_loc}</p> */}
            <div id="atrib">
                <div>
                    <div id="atr-princ-img">
                        <img src={data.urlAtr} alt="" />
                    </div>
                    <h2 className="text-xl">{data.nameAtt}</h2>
                </div>
                <div>
                    <h2 className="text-2xl">Tipo de ataque:</h2>
                    <h2 className="text-2xl">{heroDetailSelected.attack_capability == 1 ? 'Melee' : 'Rango'}</h2>
                </div>

                <div>
                    <div id="stats">
                        <div className="class-stat">
                            <div>
                                <img src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"} alt="" />
                            </div>
                            <p>{heroDetailSelected.str_base} + {heroDetailSelected.str_gain}</p>
                        </div>

                        <div className="class-stat">
                            <div>
                                <img src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"} alt="" />
                            </div>
                            <p>{heroDetailSelected.agi_base} + {heroDetailSelected.agi_gain}</p>
                        </div>

                        <div className="class-stat">
                            <div>
                                <img src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"} alt="" />
                            </div>
                            <p>{heroDetailSelected.int_base} + {heroDetailSelected.int_gain}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}