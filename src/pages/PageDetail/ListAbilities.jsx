import { Ability } from "../../components/Ability";

export function ListAbilities({ heroDetailSelected, handleMouseEnter, handleMouseLeave }) {
    return (
        <div className='list-abilities'>
        
            <h2>Habilidades</h2>
            <ul>
                {
                    heroDetailSelected?.abilities?.map((ability) => (
                        <li
                            key={ability.id}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Ability
                                img={ability.thumb_image}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}