import { useContext } from "react";
import { Context } from "../../context/context";
import { UseFilters } from "../../hooks/useFilters";
import "./HerosView.css";
import { ListHerosSection } from "./ListHerosSection";

export function HerosView() {
  const { selectHero, listHeros } = useContext(Context);
  const { filterHeros, handleImageError } = UseFilters();

  const filteredHerosStr = filterHeros(listHeros, 0); //Fuerza
  const filteredHerosAgi = filterHeros(listHeros, 1); //Agilidad
  const filteredHerosInt = filterHeros(listHeros, 2); //Inteligencia
  const filteredHerosUni = filterHeros(listHeros, 3); //Universal

  function handleClick(hero) {
    console.log(hero, "ASD");
    selectHero(hero);
  }

  return (
    <div className="list-heroes fade-in lg:w-90 lg:flex">
      <div className="lg:mr-7">
        <ListHerosSection
          filteredHeros={filteredHerosStr}
          handleImageError={handleImageError}
          handleClick={handleClick}
          className={"str-view"}
          nameSection={"Fuerza"}
          imgUrl={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
          }
        />
        <ListHerosSection
          filteredHeros={filteredHerosAgi}
          handleImageError={handleImageError}
          handleClick={handleClick}
          className={"agi-view"}
          nameSection={"Agilidad"}
          imgUrl={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
          }
        />
      </div>

      <div>
        <ListHerosSection
          filteredHeros={filteredHerosInt}
          handleImageError={handleImageError}
          handleClick={handleClick}
          className={"int-view"}
          nameSection={"Inteligencia"}
          imgUrl={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
          }
        />
        <ListHerosSection
          filteredHeros={filteredHerosUni}
          handleImageError={handleImageError}
          handleClick={handleClick}
          className={"uni-view"}
          nameSection={"Universal"}
          imgUrl={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
          }
        />
      </div>
    </div>
  );
}
