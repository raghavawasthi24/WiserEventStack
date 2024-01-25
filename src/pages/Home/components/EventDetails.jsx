import React from 'react'

export default function EventDetails() {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center px-12 py-4 border rounded">
      <div className="flex flex-col">
        <p className='font-semibold'>WED, 25 JAN 2024</p>
        <div className='flex items-end gap-12'>
          <div>
            <p className='font-semibold text-2xl'>Saurabh’s Birthday Party</p>
            <div className='flex gap-4'>
              <p>HappyDreams Hotel</p>
              <p>Hall 5</p>
              <p>New Delhi</p>
            </div>
          </div>
          <div>
            <p className='font-semibold'>250 attendees</p>
            <p className='text-muted'>Min. Commitment</p>
          </div>
        </div>
      </div>
      <div>
        <button className='bg-primary rounded-full text-white px-12 py-2 shadow-sm'>Start Event</button>
      </div>
    </div>
  );
}
