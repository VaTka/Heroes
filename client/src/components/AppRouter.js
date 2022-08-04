import React from 'react';
import {Switch, Route, Redirect, Routes} from "react-router-dom";
import {publicRoutes} from "../routes"
import SuperHeroes from "../pages/SuperHeroes";
import HeroPage from "../pages/HeroPage";

const AppRouter = () => {

    return (
        <Routes>
            <Route exact path="/hero" element={<SuperHeroes />} />
            <Route exact path={"/hero" + "/:id"} element={<HeroPage />} />
        </Routes>
    );
};

export default AppRouter;
