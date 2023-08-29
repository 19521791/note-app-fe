import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    console.log({ accessToken: localStorage.getItem('accessToken') });
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken) {
        console.log('Here');
        return <Navigate to='/login' />;
    }

    return <Outlet />
}
