import { Link } from "wouter"
import "./Hi.css"
export default function Hi() {
    return (
        <>
            <div className="flex mb-10" id="Hi">

                <div id="desc-game">
                    <div className="txt-hi">
                        <h2>Historia de Dota 2</h2>
                        <p>Dota 2 es uno de los juegos más populares y competitivos del género MOBA (Multiplayer Online Battle Arena). Su historia comienza mucho antes de su lanzamiento oficial, con raíces que se extienden a un mod de Warcraft III: Reign of Chaos llamado Defense of the Ancients (DotA).</p>
                        <h2>Orígenes de DotA</h2>
                        <p>La historia de Dota 2 se remonta a principios de la década de 2000, cuando un mapa personalizado para Warcraft III, creado por un jugador conocido como Eul, dio origen a DotA. Este mapa fue desarrollado y mejorado por varios miembros de la comunidad, incluyendo a Steve "Guinsoo" Feak y, más tarde, a IceFrog, quien se convirtió en el principal desarrollador.</p>
                        <h2>Creación de Dota 2</h2>
                        <p>En 2009, Valve Corporation, una de las compañías de videojuegos más reconocidas, contrató a IceFrog para desarrollar una secuela independiente de DotA. El objetivo era crear un juego con gráficos mejorados, una interfaz de usuario más amigable y un soporte más robusto para la escena competitiva. Este proyecto se convirtió en Dota 2.</p>
                    </div>

                    <img src="/heroswall.png" alt="" />
                </div>


                <div id="maps">
                    <h2 className="bg-black text-white text-center text-2xl p-3">Entrando en el juego</h2>
                    <ul id="ul-hi">
                        <li>Radiant y Dire: El mapa está dividido en dos lados simétricos: Radiant y Dire.</li>
                        <li>Torres y Barracas: Cada lado tiene tres torres y una barraca en cada una de las tres líneas del mapa.</li>
                        <li>Caminos (lanes): Tres caminos principales: top, mid y bot, donde ocurren los enfrentamientos principales.</li>
                        <li>Selvas (junglas): Áreas boscosas entre los caminos con criaturas neutrales y rutas alternativas.</li>
                        <li>Río: Divide el mapa en dos mitades y proporciona ventajas estratégicas.</li>
                        <li>Torres externas e internas: Cada lado tiene torres externas, internas y de base.</li>
                        <li>La base: Contiene estructuras defensivas adicionales y el Ancient, el objetivo principal del juego.</li>
                        <li>El diseño del mapa en Dota 2 promueve la estrategia, la cooperación en equipo y la toma de decisiones tácticas, ofreciendo una variedad de opciones tácticas para los jugadores.</li>
                    </ul>
                    <img src="/d2map1.jpg" alt="" />

                    <div id="Heroe-hi">
                        <img src="/lanaya.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
