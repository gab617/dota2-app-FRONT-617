export function DataHero({heroDetailSelected}) {
    return (
        <div>
            <h1>{heroDetailSelected?.name_loc}</h1>
            <p>{heroDetailSelected.bio_loc}</p>
        </div>
    )
}