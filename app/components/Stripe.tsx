"use client"
import { Dispatch, SetStateAction, useState } from 'react'

type PropsType = {
  index: number,
  color: string,
  currentColor: number,
  setCurrentColor: Dispatch<SetStateAction<number>>,
  colors: string[]
}

export default function Stripe({index, color, currentColor, setCurrentColor, colors}: PropsType) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  function handleMouseEnter() {
    const nextColor = (currentColor + 1) % colors.length;
    setCurrentColor(nextColor);
    setIsHovered(true);
    setIsLeaving(false);
  }
  
  function handleMouseLeave() {
    setIsHovered(false);
    setIsLeaving(true);
  }

  return (
    <div
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isLeaving ? 'transition-colors duration-700' : ''}`}
      style={{
        backgroundColor: isHovered ? colors[currentColor] : 'transparent'
      }}
    />
  )
}
