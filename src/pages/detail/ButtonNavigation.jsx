export function ButtonNavigation({handleClick, text, className}) {
    return (
        <button 
            onClick={handleClick}
            className= {'boton-sophisticado '+className}>
            {text}
        </button>
    )
}