import './HeroCard.css'

export function HeroCard({ hero, handleClick, defectUrlImg, handleImageError }) {

    return (
        <>
            <div
                onClick={() => handleClick(hero)}
                className="HeroCard">
                {/* <h2>{hero.primary_attr}</h2> */}
                <img
                    src={hero.image || defectUrlImg}
                    alt={`image ${hero.name_loc || 'x'}`} 
                    onError={handleImageError}        
                />
                <div>
                    <h1>{hero.name_loc}</h1>
                    {/* <img src={hero.attribute_img} alt="" /> */}
                </div>
            </div>
        </>
    )
}