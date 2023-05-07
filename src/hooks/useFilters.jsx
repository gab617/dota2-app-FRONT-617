
export function UseFilters() {
    const defectUrlImg ='https://media.sketchfab.com/models/1c649f289cf14e25a4f71aa83d132198/thumbnails/927696b88eb841628293ba0443254670/4565f22fa85345cf944c06962f16004e.jpeg'

    const handleImageError=(e)=>{
        e.target.src = defectUrlImg
    }

    //Filtros para elegir por atributo que agregar al [heroes para renderizar]

    const filterHeros = (data, filter) => {
        return data.filter((hero) => (
            filter === hero.primary_attr 
        )
        )
    }

    return{ filterHeros, handleImageError }

}