import React from "react";
import { BrowserRouter, Routes as RoutesDOM, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesDOM>

                <Route index element={} />
                <Route path="">
                    <Route index element={} />
                    <Route path="create" element={} />
                    <Route path="edit/:id" element={} />
                </Route>

            </RoutesDOM>
        </BrowserRouter>
    )
}

export default Routes;