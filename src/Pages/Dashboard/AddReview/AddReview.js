import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';

const AddReview = () => {
    return (
        <div>
            
            <p>add review</p>
            <Outlet></Outlet>
        </div>
    );
};

export default AddReview;