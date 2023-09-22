import { HeroCard } from "./HeroCard";


export function ListHerosSection({ filteredHeros, handleClick, handleImageError, className, nameSection,imgUrl }) {
    return (
        <>
            <ul className={className} >
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
                <img className="img-atrib" src={imgUrl} alt="" />
            </ul>
        </>
    )
}