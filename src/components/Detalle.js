import React from 'react'
import { useHistory } from 'react-router-dom';

import { products } from '../data/data';

export const Detalle = () => {
    //obtener el queryparams que se envia por la url. con javascript. tmb se puede hacer con hooks
    //aca le mando la url como parametro
    const query = new URLSearchParams(window.location.search);
    //obtengo el dato que quiero de la url, mandandole el param que quiero obtener x parametro
    const id = parseInt(query.get('ID'))

    //desestructuro el dato
    const [product] = products.filter(product => product.id === id);

    const history = useHistory();
    const volver = () =>{
        history.push("/listado")
    }

    return (
        <>
            <h2 className='text-center mt-5'>{product.nombre}</h2>
            <hr></hr>
            <div className='row mt-3'>
                <div className='col-6'>
                    <img className='img-fluid' src={`/assets/img/${product.img}`} alt={product.img} />
                </div>
                <div className='col-6'>
                    <h5>Descripción:</h5>
                    <p> {product.descripción}</p>
                    <h5 className="mt-3">Ingredientes: </h5>
                    <p>{product.ingredientes}</p>
                    <h5 className="mt-3">Calorias:</h5>
                    <p>{product.calorias}</p>
                    <h5 className="mt-3">Precio:</h5>
                    <p>$ {product.precio}</p>
                    <button onClick={volver} className='btn btn-warning mt-4'>Volver</button>
                </div>
            </div>
        </>
    )
}
