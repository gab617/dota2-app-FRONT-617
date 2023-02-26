import { useContext } from "react"
import { Context } from "../../context/context"
import { useSearch } from "../../hooks/useSearch"
import './FormSearch.css'

export function FormSearch({hoverText}) {
    const { handleOffOver } = useContext(Context) //Contexto
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
                                    src={hero.image} alt="" />
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