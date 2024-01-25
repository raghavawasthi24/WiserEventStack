import React from 'react'
import Navbar from './components/Navbar'
import EventDetails from './components/EventDetails'
import CameraSection from './components/CameraSection'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <EventDetails/>
      <CameraSection/>
    </div>
  )
}
