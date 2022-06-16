import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { Header } from '../../Header/Header';
import { Listado } from '../../Listado';
import { Detalle } from '../../Detalle';
import { Home } from '../../Home/Home';
import { Locales } from '../../Locales';
import { Contactenos } from '../../Contactenos';
import './styles.css';
import { Gracias } from '../../Gracias';

export const DashBoardRoute = () => {

    return (
        <div>
            <Header />
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/listado' component={Listado} />
                    <Route path='/detalle' component={Detalle}/>
                    <Route path='/locales' component={Locales}/>
                    <Route path='/contacto' component={Contactenos}/>
                    <Route path='/gracias' component={Gracias}/>
                </Switch>
            </div>
        </div>
    )
}
