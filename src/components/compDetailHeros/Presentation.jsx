import { UseFilters } from '../../hooks/useFilters'
import './Presentation.css'


export function Presentation({ name_loc, primAttr, attribute_img, image }) {

    const {defectUrlImg, handleImageError} = UseFilters()

    return (
        <div className='presentation'>
            <h1>{name_loc}</h1>
            <h2>{primAttr}</h2>
            <img className="attri-img" src={attribute_img} alt={`img attribute`} />
            <img
                src={image}
                alt={`image ${name_loc}`}
                onError={handleImageError}
            />
        </div>
    )
}