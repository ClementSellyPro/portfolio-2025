"use client"
import { useState } from 'react'
import Stripe from './Stripe'

export default function BackgroundStripes() {
  const [currentColor, setCurrentColor] = useState(1);

  const colors = ["#ffba08", "#faa307", "#f48c06", "#e85d04", "#dc2f02", "#d00000", "#9d0208", "#6a040f"]

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 grid grid-cols-4 ">
        {['#ffffff', '#ffffff', '#ffffff', '#ffffff'].map((_, index) => (
          <Stripe 
            key={index} 
            index={index} 
            color={colors[currentColor]} 
            currentColor={currentColor} 
            setCurrentColor={setCurrentColor} 
            colors={colors} />
      ))}
    </div>
  )
}