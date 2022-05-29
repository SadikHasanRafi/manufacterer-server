import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const AdminRoute = ({children}) => {

    const [user] = useAuthState(auth)
    let previousLocation = useLocation()
    return !user ?  <Navigate to='/login' state={{ from: previousLocation }} replace ></Navigate> : children 
};

export default AdminRoute;