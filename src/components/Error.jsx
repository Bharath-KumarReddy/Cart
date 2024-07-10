import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    let error = useRouteError();
    console.log(error);
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
                <p className="text-gray-600 mb-2">{error.status}</p>
                <p className="text-gray-600 mb-4">{error.data}</p>
                <p className="text-gray-600">Please try again later.</p>
            </div>
        </div>
    );
}

export default Error;
