

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
                <article className="h-20">
                    <h2 className="text-2xl mt-3">{title}</h2>
                </article>
            </a>

        </>
    )
}