

export function Article({ url, title, urlFondo }) {
    const fondo = {
        backgroundImage:`url(${urlFondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con alfa de 0.5 (ajusta según desees)
    }


    return (
        <>
            <a href={url} style={fondo}>
                <article>
                    <h2>{title}</h2>
                </article>
            </a>

        </>
    )
}