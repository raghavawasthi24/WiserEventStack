import React from 'react'
import { cameras } from '../../../lib/constant';

export default function CameraSection() {
  
  return (
    <div className='grid gap-2'>
      <div>
        <p className='font-semibold text-lg'>Camera Setup</p>
        <p className='text-muted'>Finalise current event’s camera setup & get started</p>
      </div>

      <div className="flex gap-4 flex-wrap">
        {cameras.map((camera) => {
          return camera.active ? (
            <div className="w-fit text-center font-semibold">
              <img
                src={`${camera.src}`}
                alt=""
                className="w-[150px] h-[200px] rounded"
              />
              <p>{camera.name}</p>
              <p className="text-primary">{camera.location}</p>
            </div>
          ) : (
            <div className="w-[150px] h-[200px] flex flex-col gap-4 border rounded-lg justify-center items-center">
              <img src="assets/camera_video.png" alt="" className="w-4 h-4" />
              <p className="text-muted">No Camera</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
