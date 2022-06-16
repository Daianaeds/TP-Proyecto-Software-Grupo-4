import React from 'react'

export const Item = ({
    add,
    remove,
    id,
    nombre,
    img,
    precio,
    cantidad
}) => {

    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{cantidad}</td>
                <td><img src={`/assets/img/${img}`} width={100} alt={nombre}/></td>
                <td>${precio}</td>
                <td><button onClick={() => add(id, precio, cantidad)} className='btn btn-success'>+</button></td>
                <td><button onClick={() => remove(id, precio, cantidad)} className='btn btn-warning'>-</button></td>
            </tr>
        </>
    )
} 