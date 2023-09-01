import React from "react";
import { Route, Routes } from 'react-router-dom';

import NavBar from "./Base/NavBar";
import Home from "./Home/home";
import Historia from "./History/historia";

const AppRouter = () =>{
    return(
        <>
            <NavBar />

            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/Historia' element={<Historia/>} />

                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </>
    );
}

export default AppRouter;