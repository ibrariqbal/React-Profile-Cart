import React, { useState } from 'react';

export default function ProfileCard({ name, description, image }) {
  const [follow, setFollow] = useState(true);

  return (
    
       <>
    <div className="w-full max-w-md mx-auto m-4 p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all conqueror">
      
    
      <div className="flex flex-col items-center space-y-3">
            
        <img 
          src={image} 
          alt={name} 
          className="w-32 h-32 object-cover rounded-full mx-auto"
        />

        <h2 className="text-xl font-bold text-gray-900 dark:text-white panther">
          {name}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-center">
          {description}
        </p>

        <button
          onClick={() => setFollow(!follow)}
          className={`
            mt-4 px-5 py-2 rounded-lg font-semibold transition-all duration-300
            ${follow 
              ? 'bg-green-600 text-white hover:bg-green-700 shadow-md' 
              : 'bg-red-600 text-white hover:bg-red-700 shadow-md'}
          `}
        >
          {follow ? 'Follow ' : 'Unfollow '}
        </button>

      </div>
    </div>
    </>
  );
}


