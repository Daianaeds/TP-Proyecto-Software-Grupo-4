import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";
import { Login } from "../Login";
import { DashBoardRoute } from "./DashBoard/DashBoardRoute";
//componentes

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='*' component={DashBoardRoute} />
                </Switch>
            </div>

        </BrowserRouter>
    );
}