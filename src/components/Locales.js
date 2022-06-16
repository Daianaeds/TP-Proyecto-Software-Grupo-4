import React from 'react'
import { localidades } from '../data/data'

export const Locales = () => {
    return (
        <>
            {
                localidades.map(localidad =>{
                    return (
                        <div className="mt-4 mx-5" key={localidad.id}>
                            <p>{localidad.localidad}</p>
                            <p>{localidad.direccion}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}
