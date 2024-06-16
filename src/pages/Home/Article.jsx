

export function Article({ url, title, urlFondo, proximamente }) {
    const fondo = {
        backgroundImage:`url(${urlFondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con alfa de 0.5 (ajusta según desees)
    }


    return (
        <>
            <a href={url} style={fondo} target="_blank">
                <article className="h-32 lg:h-20">
                    <h2 className="
                    bg-black 
                    bg-opacity-70 
                    text-xl 
                    mt-1 
                    lg:text-2xl 
                    lg:mt-3"
                    >{title}</h2>
                </article>
            </a>

        </>
    )
}