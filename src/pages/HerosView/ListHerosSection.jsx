import { HeroCard } from "./HeroCard";

export function ListHerosSection({
  filteredHeros,
  handleClick,
  handleImageError,
  className,
  nameSection,
  imgUrl,
}) {
  return (
    <div>
      <div className="flex items-center mt-3">
        <img className="" src={imgUrl} alt="" title={nameSection} />
        <p className="text-white font-bold ml-3">{nameSection} </p>
      </div>
      <ul
        className={`
                ${className} 
                grid-cols-3
                sm:grid-cols-5
                sm:gap-1
                lg:grid-cols-8
                `}
      >
        {filteredHeros.map((hero) => (
          <li key={hero.id} className=" m-auto sm:m-0">
            <HeroCard
              hero={hero}
              handleClick={handleClick}
              handleImageError={handleImageError}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
