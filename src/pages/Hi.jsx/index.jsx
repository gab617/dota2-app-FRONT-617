import "./Hi.css"
export default function Hi() {
    return (
        <div id="Hi">
            <div id="desc-game">
                <h1>Sitio web en progreso.</h1>

                <div id="txt-hi">
                    <p>"Dota 2" es un emocionante videojuego de arena de batalla en línea multijugador (MOBA) que enfrenta a dos equipos de cinco jugadores en un mapa estratégico donde el objetivo es destruir la base enemiga. Con un elenco de más de cien héroes únicos, cada partida es una nueva oportunidad para implementar estrategias y tácticas diferentes. Los jugadores eligen héroes con habilidades especiales y asumen roles específicos para apoyar a su equipo, ya sea a través del combate directo, la asistencia en batallas, o el control del mapa. Dota 2 destaca por su profunda complejidad estratégica y su exigente curva de aprendizaje, lo que lo convierte en un juego fascinante tanto para jugar como para observar. Es mundialmente conocido por su escena competitiva, con torneos que ofrecen premios millonarios, lo que lo hace no solo un juego, sino un espectáculo global. Nuestra web se dedica a todo lo relacionado con Dota 2, desde guías para principiantes hasta análisis profundos de la escena profesional, asegurando que tanto los jugadores novatos como los experimentados encuentren algo valioso. Visítanos para sumergirte aún más en el mundo de Dota 2, donde la estrategia, la habilidad y el trabajo en equipo te llevan a la victoria.</p>
                    <p>Dota 2" es un juego de estrategia en tiempo real que enfrenta a dos equipos de cinco jugadores cada uno, con el objetivo de destruir la estructura principal del equipo contrario conocida como el "Ancient". Cada jugador controla un "héroe" con habilidades únicas y trabaja en equipo para acumular recursos, ganar experiencia, y superar al equipo rival en combate táctico. Dota 2 se destaca por su complejidad estratégica, amplia selección de héroes, y su profunda mecánica de juego, lo que requiere tanto habilidades individuales como coordinación en equipo para alcanzar la victoria.</p>
                    <p>Al adentrarte en el mundo de Dota 2, el siguiente paso crucial es enfocarte en la comprensión de las mecánicas fundamentales y la diversidad de héroes. Primero, domina los conceptos básicos: el "last hitting" (golpear para dar el último golpe a los enemigos y obtener oro), la importancia de la visión del mapa para detectar movimientos enemigos, y el rol de los objetos en la ampliación de las capacidades de tu héroe. Explora y especialízate en algunos héroes para entender sus fortalezas y debilidades dentro del vasto elenco disponible. La comunicación y estrategia en equipo son esenciales; aprender a coordinar con tus compañeros puede cambiar el curso de una partida. Finalmente, adopta una mentalidad de aprendizaje continuo: revisa tus partidas, aprende de tus errores y éxitos, y mantente al tanto de las estrategias emergentes. </p>
                </div>

                <img src="public/heroswall.png" alt="" />
            </div>
            <div id="maps">
                <img src="public/d2map1.jpg" alt="" />
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

                <div id="Heroe-hi">
                    <img src="public/lanaya.png" alt="" />

                    <p>
                        En "Dota 2", los héroes son los personajes controlados por los jugadores, cada uno con habilidades únicas y roles específicos que influyen en la estrategia y el resultado de la partida. Se dividen principalmente en tres categorías basadas en sus fortalezas y estilos de juego: <br /><br />

                        Carry: Estos héroes suelen ser débiles al inicio del juego pero se vuelven extremadamente poderosos hacia el final. Su éxito depende de acumular oro y experiencia para adquirir objetos que aumenten su poder. Su objetivo es liderar al equipo hacia la victoria en las fases finales de la partida.<br /><br />

                        Support: Los héroes de apoyo ayudan a sus compañeros de equipo, proporcionando curaciones, aumentos de habilidades o perturbando al equipo enemigo. No requieren tanto oro o experiencia como los carries, pero juegan un papel crucial en asegurar el éxito de su equipo a través de la visión del mapa, el control de áreas y el sacrificio personal por el bien mayor del equipo.<br /><br />

                        Utility: Esta categoría es amplia y abarca a los héroes que pueden desempeñar múltiples roles, como iniciar peleas, controlar a los enemigos o proporcionar flexibilidad estratégica al equipo. Son versátiles y pueden adaptarse a las necesidades del juego conforme avanza.<br />

                        Además de estas categorías, los héroes también pueden clasificarse por su "tipo de daño" (físico, mágico, o puro) y su posición en el juego, lo que refleja la estrategia general del equipo. Elegir el héroe correcto en función del equipo enemigo y la sinergia con tu propio equipo es fundamental para dominar el juego. Dota 2 ofrece una variedad inmensa, con más de cien héroes disponibles, cada uno con un conjunto de hasta cuatro habilidades únicas, permitiendo una cantidad casi infinita de estrategias y estilos de juego.
                    </p>
                </div>

            </div>


        </div>
    )
}
