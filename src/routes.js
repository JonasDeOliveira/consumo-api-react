import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} />
        </Switch>
    )
}