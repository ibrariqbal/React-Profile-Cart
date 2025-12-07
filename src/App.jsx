import React, { useState } from 'react';
import ProfileCard from './Components/ProfileCard';
import { dummyData } from './assets/dummyData/dummyData';
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState('');
  const filteredData = dummyData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
      
      <Navbar dark={dark} setDark={setDark} search={search} setSearch={setSearch} />
          <h1 className='mt-9 container text-center text-[40px] font-bold text-slate-600'>Card Section</h1>
      <div className="grid grid-cols-1 grid-cols-4 gap-4 p-6">
        {filteredData.map(item => (
          <ProfileCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div> 
  );
}
