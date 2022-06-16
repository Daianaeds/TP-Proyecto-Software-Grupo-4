import React from 'react'
import { Item } from './Item'
import { Cart, NodeMinus } from 'react-bootstrap-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';

export const Carrito = ({ itemsCart, total, remove, add, reset }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const endBuy = () => {
        if (total !== 0) {
            setShow(false);
            reset();
            swal({
                text: "Su compra se realizo con exito!",
                icon: "success",
                button: "Ok",
                timer: "1000"
            });
        } else {
            swal({
                text: "Carrito vacio",
                icon: "error",
                button: "Ok",
                timer: "500"
            });
        }
    }
    let clienteInfoStyle = {
        display: 'inline',
    };
    let pagoInfoStyle = {
        display: 'inline',
    };
    const datosCliente = () => {
        setShow(true);
        clienteInfoStyle = {
            display: 'none',
        };
        clienteInfoStyle = {
            display: 'inline',
        };
    }
    const datosPago = () => {
        setShow(true);
        pagoInfoStyle = {
            display: 'inline',
        };
    }
    const handleShow = () => setShow(true);
    
    if (total > 0) {
        return (
            <div>
                <Button variant="success" onClick={handleShow} className="px-5 py-2">
                    <Cart aria-label="cart" className='back' />
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tus productos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className="table mt-2">
                            <tbody>
                                {
                                    itemsCart.map((item, idx) => {
                                        return <Item
                                            key={idx}
                                            {...item}
                                            remove={remove}
                                            add={add}
                                        />
                                    })
                                }
                            </tbody>
                        </table>
                        <div style={clienteInfoStyle}>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Datos cliente</span>
                            </div>
                            <div>
                                <label class="credit-card-label">Localidad</label><input type="text" class="form-control credit-inputs" placeholder="Localidad" />
                            </div>
                            <div>
                                <label class="credit-card-label">Calle y altura</label><input type="text" class="form-control credit-inputs" placeholder="Dirección" />
                            </div>
                            <div>
                                <label class="credit-card-label">Comentarios</label><input type="text" class="form-control credit-inputs" placeholder="Piso y depto" />
                            </div>
                        </div>
                        <div  style={pagoInfoStyle}>
                            <span class="type d-block mt-3 mb-1">Datos de la compra</span>
                            <label class="radio">
                                <input type="radio" name="card" value="payment" checked /> <span><img width={30} src={`/assets/img/master.png`} /></span>
                            </label>
                            <label class="radio">
                                <input type="radio" name="card" value="payment" /> <span><img width="30" src={`/assets/img/visa.png`} /></span>
                            </label>
                            <label class="radio">
                                <input type="radio" name="card" value="payment" /> <span><img width="30" src={`/assets/img/amex.png`} /></span>
                            </label>
                            <div>
                                <label class="credit-card-label">Nombre en la tarjeta</label><input type="text" class="form-control credit-inputs" placeholder="Name" />
                            </div>
                            <div>
                                <label class="credit-card-label">Número de la tarjeta</label><input type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000" /></div>
                            <div class="row">
                                <div class="col-md-6"><label class="credit-card-label">Expiración</label><input type="text" class="form-control credit-inputs" placeholder="12/24" /></div>
                                <div class="col-md-6"><label class="credit-card-label">CVV</label><input type="text" class="form-control credit-inputs" placeholder="342" /></div>
                            </div>
                            <hr class="line" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn mx-5 btn-danger' onClick={reset}>Vaciar</Button>
                        <h5>Precio final: ${total}</h5>
                        <Button variant="primary" onClick={endBuy}>
                            Terminar Compra
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    } else {
        return (
            <div>
                <Button variant="success" onClick={handleShow} className="px-5 py-2">
                    <Cart aria-label="cart" className='back' />
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>No ha seleccionado productos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}