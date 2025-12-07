import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Darkmode from '../Darkmode/Darkmode';

export default function Navbar({ dark, setDark, search, setSearch }) {
  return (
    <nav>
      <div className='container flex justify-between items-center p-4'>

        <div className='w-[30%]'>
          <h2 className='text-[24px] font-bold'>Profile Card</h2>
        </div>

        <div className='w-[40%]'>
          <Searchbar dark={dark} search={search} setSearch={setSearch} />
        </div>

        <div className='w-[30%]'>
          <Darkmode dark={dark} setDark={setDark} />
        </div>

      </div>
    </nav>
  );
}
