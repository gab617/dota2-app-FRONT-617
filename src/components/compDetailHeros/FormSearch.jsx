import { useContext } from "react"
import { Context } from "../../context/context"
import { useSearch } from "../../hooks/useSearch"
import './FormSearch.css'
import { UseFilters } from "../../hooks/useFilters"

export function FormSearch({hoverText}) {
    const { handleOffOver } = useContext(Context) //Contexto
    const{defectUrlImg, handleImageError} = UseFilters()

    const {
        handleSearch,
        herosFound,
        handleOver } = useSearch() //Hook

    return (
        <div>
            <div className="form-search">
                <form action="">
                    <label htmlFor="">Search</label>
                    <input type="text" placeholder="Void, Ogre Magi, Huskar..." onChange={handleSearch} />
                </form>
                <ul>
                    {
                        herosFound &&
                        herosFound.map((hero) => (
                            <li>
                                <img
                                    //HOVER Y NO HOVER  
                                    onMouseOver={() => handleOver(hero)}
                                    onMouseOut={() => handleOffOver()}
                                    src={hero.image} alt="" 
                                    onError={handleImageError}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h1>{hoverText}</h1>
            </div>
        </div>
    )
}