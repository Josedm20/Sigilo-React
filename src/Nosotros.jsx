import React from 'react'
import './Pagina.css'

function Nosotros(props) {
    return (
        <div>
            <div className="d-flex justify-content-center pt-4">
                <img className="img-fluid pb-4" src={`../public/IMG/${props.Imagens2}.png`} alt="mision" />
            </div>
            <h1 className="text-center fw-bold text-black">{props.Titulos2}</h1>
            <p className="pt-2 ppt texto text-black">{props.Textos2}</p>
        </div>
    )
}

export default Nosotros