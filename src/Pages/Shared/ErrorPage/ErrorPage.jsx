import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../../Asstes/Error.png'
const ErrorPage = () => {
    return (
        <div className="flex items-center h-screen bg-gray-200">
      <div className="w-full text-center">
        <img src={Error} alt="Sad face" className="w-full mx-auto my-10 sm:w-96 sm:my-4" />
        <h1 className="text-2xl font-medium text-gray-800 sm:text-xl">Oops! Something went wrong.</h1>
        <p className="text-gray-800 mb-4 sm:text-base">We're sorry, but an error has occurred. Please try again later.</p>
        <Link to={'/'}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full sm:py-1 sm:px-2">Go to Home</button>
      
        </Link>
        </div>
    </div>
    );
};

export default ErrorPage;