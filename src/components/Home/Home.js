import React from 'react';
import { Link } from 'react-router-dom';
import { promociones } from '../../data/data';
import './styles.css';

export const Home = () => {
  return (
    <>
      <div className="slider total-content">
        <Link className="link" to='/listado'>Encontrá tu hamburguesa</Link>
      </div>
      <div className="promociones-container">
        {
          promociones.map(promo => {
            return <div key={promo.id} className="promociones-item">
              <Link to={`/listado?prod=promo`}>
                <img src={`/assets/img/${promo.img}`} className="" alt={promo.nombre} />
              </Link>
            </div>
          })
        }
        </div>
      <div className="services total-content">
        <div className='title-services'>
          <h2> A tu servicio, siempre!</h2>
        </div>
        <div className="list-services">
          <div>
            <Link to={'/listado?prod=hamburguesa'} className='link-img'>
              <img src="/assets/img/GRAND-TASTY-TRIPLE.png" alt="Hamburguesa" />
            </Link>
            <h3>Hamburguesas</h3>
            <p>Nuestro catalogo con mejores hamburguesas del mundo!</p>
          </div>
          <div>
            <Link to={'/listado?prod=cafe'} className='link-img'>
              <img src="/assets/img/expresso.png" alt='cafe' />
            </Link>
            <h3>Cafe</h3>
            <p>Los mejores cafes para compartir entre amigos</p>
          </div>
          <div>
            <Link to={'/listado?prod=postres'} className='link-img'>
              <img src="/assets/img/sundae-chocolate.png" alt="Postres" />
            </Link>
            <h3>Postres</h3>
            <p>Probá los deliciosos postres que tenemos para vos</p>
          </div>
          <div>
            <Link to={'/listado?prod=ensalada'} className='link-img'>
              <img src="/assets/img/ensalada-cesar-con-pollo-crujiente.png" alt="Ensaladas" />
            </Link>
            <h3>Ensaladas</h3>
            <p>Menu opcional de ensaladas hechas con amor y los mejores ingredientes</p>
          </div>
        </div>
      </div>
    </>

  )
}