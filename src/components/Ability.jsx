export function Ability({img}) {
    return (
        <>
            {/* <h3>{ability.name_loc}</h3> */}
            <section className="abilities-description">
                <img src={img} alt="img ability" />
                {/* <p>{ability.desc_loc}</p> */}
            </section>
        </>

    )
}