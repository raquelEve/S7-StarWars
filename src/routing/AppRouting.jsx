import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import StarshipsListPage from '../pages/StarshipsListPage';
import StarshipDetailPage from '../pages/StarshipDetailPage';

// we must define a component 
const NotFound = () => <Navigate to="/" />;

const routes = [
    { path: "/", element: <Home /> },
    { path: "/starships", element: <StarshipsListPage /> },
    { path: "/detail/:id", element: <StarshipDetailPage /> },
    { path: "*", element: <NotFound /> },

];

const AppRouting = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </Router>
    );
};

export default AppRouting;