import React from 'react';

export default function Searchbar({ dark, search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search profiles..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={`
        w-[450px] px-4 py-2 rounded-lg border
        ${dark ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400' 
               : 'bg-white border-gray-300 text-black placeholder-gray-600'}
        focus:outline-none focus:ring-0
      `}
    />
  );
}
