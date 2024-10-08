import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-b-4"></div>
      
      </div>
    </div>
  );
};

export default Loader;
