// src/components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const user = useSelector((state) => state.user.user);

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    // <Outlet />;
    return children
};

export default ProtectedRoute;
