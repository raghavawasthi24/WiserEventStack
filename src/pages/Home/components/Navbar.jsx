import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center gap-4 md:gap-12 justify-between md:px-4 py-2'>
      <img src="assets/WiserCountLogo.png" alt="" className='w-[80px] md:w-[130px]'/>
      <input
        type="text"
        className=" w-full border rounded-2xl indent-2 px-2 py-1 outline-none bg-blue-50 text-xs md:text-sm" placeholder='RecentEventID'
      />
      <div className='flex gap-1'>
        <img src="assets/profile.png" alt="" className='w-[40px]'/>
        <div className='sm:flex flex-col mr-6 hidden'>
          <p className='text-xs'>Test User</p>
          <p className='text-xs'>abc@work.com</p>
        </div>
      </div>
    </div>
  );
}
