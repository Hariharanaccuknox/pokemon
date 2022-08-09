import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import PokemonDetails from "./PokemonDetails";


const Routes = () => {
    return (
        <BrowserRouter>
            <Route>
                <Route path="/" exact component={App} />
                <Route path="/pokemon/:name" exact component={PokemonDetails} />
                <Route path="/:number" exact component={App} />
            </Route>
        </BrowserRouter>
    );
};

export default Routes;
