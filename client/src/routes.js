import React from "react";
import { BrowserRouter, Routes as RoutesDOM, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginAdmin from "./pages/LoginAdmin";
import Admin from "./pages/Admin";
const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesDOM>

                <Route index element={<Home/>} />
                <Route path="/admin" element={<LoginAdmin />} />
                <Route path="/adm" element={<Admin />} />
                {/* <Route path="">
                    <Route index element={} />
                    <Route path="create" element={} />
                    <Route path="edit/:id" element={} />
                </Route> */}

            </RoutesDOM>
        </BrowserRouter>
    )
}

export default Routes;