import React from 'react'

export default function CameraSection() {
  const cameras = [
    {
      id: 1,
      name: "Camera 1",
      location: "Location 1",
      active: true,
      src: "assets/camera1.png",
    },
    {
      id: 2,
      name: "Camera 2",
      location: "Location 2",
      active: true,
      src: "assets/camera2.png",
    },
    {
      id: 3,
      name: "Camera 3",
      location: "Location 3",
      active: true,
      src: "assets/camera3.png",
    },
    {
      id: 4,
      active: false,
    },
    {
      id: 5,
      active: false,
    },
    {
      id: 6,
      active: false,
    },
  ];
  return (
    <div>
      <p>Camera Setup</p>
      <p>ffff</p>

      <div className='flex gap-4 flex-wrap'>
        {cameras.map((camera) => {
          return camera.active ? (
            <div className="w-fit text-center font-semibold">
              <img
                src="assets/camera1.png"
                alt=""
                className="w-[200px] h-[300px] rounded"
              />
              <p>Camera Name</p>
              <p className="text-primary">Location</p>
            </div>
          ) : (
            <div className="w-[200px] h-[300px] flex flex-col gap-4 border rounded-lg justify-center items-center">
              <img src="assets/camera_video.png" alt="" className="w-4 h-4" />
              <p className="text-muted">No Camera</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
