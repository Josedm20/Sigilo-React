import React from 'react'
import './Pagina.css'

function Header() {
    return (
        <div>
            <header className="p-4">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="./IMG/logoq.png" alt="logo" width="50px" height="79px" />
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-start align-items-center">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button className="navbar-toggler btnh mb-3" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#">Sigilo</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#conócenos">Conócenos</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#juego">Juego</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">Contáctanos</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title th" id="exampleModalLabel">Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mi">
                                <a target="_blank" href="https://web.whatsapp.com/"><img className="mt-3"
                                    src="./IMG/llamada-de-telefono-inteligente.png" alt="" /></a>
                                <h5 className="mt-3 tl">254556262</h5>
                            </div>
                            <div className="mi">
                                <a target="_blank" href="https://www.google.com/intl/es-419/gmail/about/"><img className="mt-5"
                                    src="./IMG/correo-electronico-vacio.png" alt="" /></a>
                                <h5 className="mt-3 tl">Sigilo3244@gmail.com</h5>
                            </div>
                            <div className="mi">
                                <a target="_blank" href="https://www.google.com/search?q=sena%20minorista&oq=sena+minos%C2%BFrista&aqs=chrome..69i57.3662j0j1&sourceid=chrome&ie=UTF
                        -8&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=APwXEddedynbx3fGD4VZZsTpxzZb-WdlNg:1679880077478&rflfq=1&num=10&rldimm=11061945888072746583&lqi=Cg5zZW5hIG1pbm9y
                        aXN0YSIDiAEBSK3P7rHuqoCACFoWEAAQARgAIg5zZW5hIG1pbm9yaXN0YZIBBnNjaG9vbKoBMhABKg0iCW1pbm9yaXN0YSgOMh8QASIbUu9ErUiZxGlqmTFPvTkjy5_VFMKI9TvMApUc&ved=
                        2ahUKEwiX4aH6-Pr9AhUFg4QIHUDFCFgQvS56BAgoEAE&sa=X&rlst=f#rlfi=hd:;si:11061945888072746583,l,Cg5zZW5hIG1pbm9yaXN0YSIDiAEBSK3P7rHuqoCACFoWEAAQARgAI
                        g5zZW5hIG1pbm9yaXN0YZIBBnNjaG9vbKoBMhABKg0iCW1pbm9yaXN0YSgOMh8QASIbUu9ErUiZxGlqmTFPvTkjy5_VFMKI9TvMApUc;mv:[[6.3108357999999996,-75.5490875],[6.
                        1736394,-75.609214]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4"><img className="mt-5"
                                        src="./IMG/ubicacion.png" alt="" /></a>
                                <h5 className="mt-3 tl">Av. del Ferrocarril #5123 51- a, La Candelaria, Medellín, La Candelaria,
                                    Medellín, Antioquia</h5>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header