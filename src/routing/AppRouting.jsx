import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import StarshipsListPage from '../pages/StarshipsListPage';
import StarshipDetailPage from '../pages/StarshipDetailPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoute';
import Header from '../common/Header';

const NotFound = () => <Navigate to="/" />;

const routes = [
    { path: "/", element: <Home /> },
    { path: "/starships", element: <ProtectedRoute element={<StarshipsListPage />} /> },
    { path: "/detail/:id", element: <ProtectedRoute element={<StarshipDetailPage />} /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <NotFound /> },


];

const AppRouting = () => {
    return (
        <Router>
            <Header />
            {/* <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<ProtectedRoute><StarshipsListPage /></ProtectedRoute>} />
                <Route path="/detail/:id" element={<ProtectedRoute><StarshipDetailPage /></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouting;