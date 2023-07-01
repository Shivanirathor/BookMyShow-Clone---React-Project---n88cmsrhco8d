import React from 'react'
import './TicketBooking.css'
import screen from "./Screen.jpeg"
export function TheaterScreen() {
  return (
    <div className='theater-screen'>
        <img src={screen} alt="theater screen" />
    </div>
  )
}