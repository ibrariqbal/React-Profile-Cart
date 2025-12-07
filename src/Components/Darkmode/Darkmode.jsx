import React from 'react';

export default function DarkMode({ dark, setDark }) {
  return (
    <button
      className={`px-6 py-2 rounded-lg border transition-colors
        ${dark 
          ? 'border-gray-700 bg-gray-800 text-white hover:bg-gray-700' 
          : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-100'}`}
      onClick={() => setDark(!dark)}
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
