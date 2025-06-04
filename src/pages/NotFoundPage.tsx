import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist or has been moved." 
      />
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle size={40} className="text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary flex items-center justify-center mx-auto w-48">
            <Home size={16} className="mr-2" />
            <span>Back to Home</span>
          </Link>
          <div className="mt-8 text-gray-500 text-sm">
            <p>If you believe this is an error, please contact us at:</p>
            <a href="mailto:icseams@bvrit.ac.in" className="text-conference-orange hover:underline">
              icseams@bvrit.ac.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;