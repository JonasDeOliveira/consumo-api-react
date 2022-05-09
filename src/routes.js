import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Produto from './pages/produto/Produto'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/produto/:id" component={Produto}/>
        </Switch>
    )
}