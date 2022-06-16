import React from 'react'
import { Link } from "react-router-dom"


export const Contactenos = () => {

    const enviarDatos = (e) =>{
        e.preventDefault()
    }
    return (
        <>
            <h1>Contactenos</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            className="form-control"  
                            name="nombre"
                        />
                    </div>
                </div>
                <div className="row">
                    <br/>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="form-control"  
                            name="email"
                        />
                    </div>
                </div>
                <div className="row">
                    <br/>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
                        <input 
                            type="text" 
                            placeholder="Número de telefono" 
                            className="form-control"  
                            name="telefono"
                        />
                    </div>
                </div>
                <div className="row">
                    <br/>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
                        <textarea style={{ width: "100%", height: "150px" }}
                            placeholder="Mensaje"
                        >
                        </textarea>
                    </div>
                </div>
                <div className="row">
                    <br/>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
                        <Link to={`/gracias`} className="btn btn-primary">Enviar</Link>
                    </div>
                </div>
            </form>
        </>
    )
}
