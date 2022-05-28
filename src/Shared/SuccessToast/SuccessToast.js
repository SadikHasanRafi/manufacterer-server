import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const SuccessToast = () => {
    
    return (
        <div className=' z-50 absolute'>
            toast.success('Successfully created!');
        </div>
    );
};

export default SuccessToast;