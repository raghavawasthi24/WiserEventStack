import React from 'react'
import { GoDotFill } from "react-icons/go";

export default function EventDetails() {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center px-2 sm:px-12 py-4 border rounded">
      <div className="flex flex-col self-start">
        <p className="font-semibold">WED, 25 JAN 2024</p>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-12">
          <div>
            <p className="font-semibold text-lg sm:text-2xl ">
              Saurabh’s Birthday Party
            </p>
            <div className="flex items-center gap-2 sm:gap-4 text-xs">
              <p>HappyDreams Hotel</p>
              <GoDotFill className="text-[#FF8B8B]" />
              <p>Hall 5</p>
              <GoDotFill
                className="text-[#FF8B8B]"
              />
              <p>New Delhi</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">250 attendees</p>
            <p className="text-muted">Min. Commitment</p>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-primary rounded-full text-white px-12 py-2 shadow-sm">
          Start Event
        </button>
      </div>
    </div>
  );
}
