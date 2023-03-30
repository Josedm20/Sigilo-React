import React from 'react'
import './Pagina.css'

function card() {
    return (
        <div>
                    <div className="card tamaño-card bg-card shadow-card rounded-4 img-transform">
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <img className="img-card rounded-2 mt-2" src={`../public/IMG/${props.imagens3}.jpg`} alt="" />
                            </div>
                            <div className="text-start">
                                <h3 className="text-black titulo-card my-3 text-center">{props.titulos3}</h3>
                                <p className="text-black ms-2 fw-bold">{props.descripcions3}
                                </p>
                            </div>
                            <li className="raya-card mt-1 mb-3 mx-auto"></li>
                            <div className="d-flex justify-content-center">
                                <p className="text-black text-center leters mt-1 fw-bold">Creado por {props.creadors3}</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default card