import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken) {
        return <Navigate to='/login' />;
    }

    return <Outlet />
}
