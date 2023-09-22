import { useEffect, useState } from "react"
import { Article } from "./Article"
import "./Home.css"
import { currentDate } from "../../services/services"

export function Home() {
    const [date, setcurrentDate] = useState()



    /* Fecha */
    useEffect(() => {
        const date = currentDate()
        setcurrentDate(date);
    }, [])

    return (
        <div id="Home" className="fade-in">
            <h1>Dota2 App {date}</h1>
            <p>Esta aplicacion es en homenaje al conocido juego Dota2 representados sus heroes,
                con sus respectivas caracteristicas para examinar
            </p>
            <main>
                <Article
                    url={"https://www.dota2.com/newsentry/3727347341067147995"}
                    title={"El circuito profesional de Dota"}
                    urlFondo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ACIMsk9bgJ0VKu23f2AnTIEk5ypT-tKX4w&usqp=CAU'}
                />
                <Article
                    url={"https://www.dota2.com/newsentry/3692442542242977036"}
                    title={"Smurfing no es aceptable en Dota"}
                    urlFondo={"data:image/jpeg;base64,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"}
                />
                <Article
                    url={""}
                    title={'Proximamente'}
                    urlFondo={'https://images.hdqwalls.com/wallpapers/juggernaut-dota-2-8d.jpg'}
                />
                <Article
                    url={'https://www.dota2.com/news/updates'}
                    title={'Ultimo parche'}
                    urlFondo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXaVaMlgy3Ob6bU7h2K6RhOPV4QU_vg0WmQ&usqp=CAU'}
                />
            </main>
        </div>
    )
}