import { HeroCard } from "./HeroCard";


export function ListHerosSection({filteredHeros,handleClick, handleImageError, className}) {
    return (
        <>
            <ul className={className}>
                {
                    filteredHeros.map((hero) => (
                        <li key={hero.id}>
                            <HeroCard
                                hero={hero}
                                handleClick={handleClick}
                                handleImageError={handleImageError}
                            />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}