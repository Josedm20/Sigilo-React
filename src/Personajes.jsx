import React from 'react'
import './Pagina.css'

function Personajes(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div class="card tamaño-card bg-card shadow-card rounded-4 img-transform">
                <div class="card-body">
                    <div class="d-flex justify-content-center">
                        <img class="img-card rounded-2 mt-2" src={`../public/IMG/${props.Imagens3}.png`} alt="" />
                    </div>
                    <div class="text-start">
                        <h3 class="text-black titulo-card my-3 text-center">{props.Titulos3}</h3>
                        <p class="text-black ms-2 fw-bold">{props.Descripcions3}
                        </p>
                    </div>
                    <li class="raya-card mt-1 mb-3 mx-auto"></li>
                    <div class="d-flex justify-content-center">
                        <p class="text-black text-center leters mt-1 fw-bold">Creado por {props.Creadors3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personajes