import { HeroCard } from "./HeroCard";


export function ListHerosSection({ filteredHeros, handleClick, handleImageError, className, nameSection,imgUrl }) {
    return (
        <div>
            <img className="img-atrib" src={imgUrl} alt="" title={nameSection} />
            <ul className={`
                ${className} 
                grid-cols-3 
                sm:grid-cols-4 
                lg:grid-cols-6`}
                >
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
        </div>
    )
}