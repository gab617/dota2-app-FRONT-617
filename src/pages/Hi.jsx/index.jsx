import { Link } from "wouter"
import "./Hi.css"
export default function Hi() {
    return (
        <div className="lg:text-2xl">
            <div className="flex flex-col mb-10" id="">{/* Hi */}

                <div className="bg-black text-white bg-opacity-80" id="">{/* desc-game */}
                    <div className="w-95 m-auto txt-hi">{/* txt-hi */}
                        <h2>Historia de Dota 2</h2>
                        <p>Dota 2 es uno de los juegos más populares y competitivos del género MOBA (Multiplayer Online Battle Arena). Su historia comienza mucho antes de su lanzamiento oficial, con raíces que se extienden a un mod de Warcraft III: Reign of Chaos llamado Defense of the Ancients (DotA).</p>
                        <h2>Orígenes de DotA</h2>
                        <p>La historia de Dota 2 se remonta a principios de la década de 2000, cuando un mapa personalizado para Warcraft III, creado por un jugador conocido como Eul, dio origen a DotA. Este mapa fue desarrollado y mejorado por varios miembros de la comunidad, incluyendo a Steve "Guinsoo" Feak y, más tarde, a IceFrog, quien se convirtió en el principal desarrollador.</p>
                        <h2>Creación de Dota 2</h2>
                        <p>En 2009, Valve Corporation, una de las compañías de videojuegos más reconocidas, contrató a IceFrog para desarrollar una secuela independiente de DotA. El objetivo era crear un juego con gráficos mejorados, una interfaz de usuario más amigable y un soporte más robusto para la escena competitiva. Este proyecto se convirtió en Dota 2.</p>
                    </div>
                    <div className="w-95 m-auto mt-2 mb-2 md:w-80">
                        <img src="/heroswall.png" alt="" />

                    </div>
                </div>


                <div className="bg-black text-white bg-opacity-80" id="">{/* maps */}
                    <h2 className="bg-black text-white text-center text-2xl p-3">Entrando en el juego</h2>
                    <ul className="w-95 m-auto ul-game" id="">{/* ul-hi */}
                        <li>Radiant y Dire: El mapa está dividido en dos lados simétricos: Radiant y Dire.</li>
                        <li>Torres y Barracas: Cada lado tiene tres torres y una barraca en cada una de las tres líneas del mapa.</li>
                        <li>Caminos (lanes): Tres caminos principales: top, mid y bot, donde ocurren los enfrentamientos principales.</li>
                        <li>Selvas (junglas): Áreas boscosas entre los caminos con criaturas neutrales y rutas alternativas.</li>
                        <li>Río: Divide el mapa en dos mitades y proporciona ventajas estratégicas.</li>
                        <li>Torres externas e internas: Cada lado tiene torres externas, internas y de base.</li>
                        <li>La base: Contiene estructuras defensivas adicionales y el Ancient, el objetivo principal del juego.</li>
                        <li>El diseño del mapa en Dota 2 promueve la estrategia, la cooperación en equipo y la toma de decisiones tácticas, ofreciendo una variedad de opciones tácticas para los jugadores.</li>
                    </ul>
                    <div className="xl:flex xl:w-90 xl:m-auto xl:items-center xl:p-4">
                        <div className="
                            w-95 
                            m-auto 
                            mb-4 
                            md:w-60 
                            xl:m-0
                            xl:w-1/2 
                            xl:items-center">
                            <img src="/d2map1.jpg" alt="mapadota2" />
                        </div>

                        <div className="w-95 m-auto xl:w-1/2">
                            <img className="m-auto" src="/lanaya.png" alt="lanaya" />
                        </div>
                    </div>

                </div>
                <h1 className="text-white text-center">DOTA2</h1>
            </div>
        </div>
    )
}
