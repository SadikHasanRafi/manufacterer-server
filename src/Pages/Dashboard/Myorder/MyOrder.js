import React from 'react';
import { Outlet } from 'react-router-dom';

const MyOrder = () => {
    return (
        <div>
            <p>my order</p>
            <Outlet></Outlet>
        </div>
    );
};

export default MyOrder;