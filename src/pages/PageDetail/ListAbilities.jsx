import { Ability } from "../../components/Ability";

export function ListAbilities({ heroDetailSelected, handleMouseEnter, handleMouseLeave }) {
    return (
        <div className='mt-2 '>{/*list-abilities  */}

            <h2 className="text-2xl text-center">Habilidades</h2>
            <ul className="
                w-95
                gap-1
                m-auto
                grid
                grid-cols-3 
                sm:grid-cols-4 
                xl:gap-1
                xl:w-60
                ">
                {
                    heroDetailSelected?.abilities?.map((ability) => (
                        <li
                            className="md:m-auto"
                            key={ability.id}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Ability
                                img={ability.thumb_image}
                                desc={ability.desc_loc}
                            />
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}