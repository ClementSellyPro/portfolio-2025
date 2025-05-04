import { Dispatch, SetStateAction } from 'react'

type PropsType = {
  index: number,
  color: string,
  currentColor: number,
  setCurrentColor: Dispatch<SetStateAction<number>>,
  colors: string[]
}

function changeColor(e: React.MouseEvent<HTMLDivElement>, colors: string[], currentColor: number, setCurrentColor: Dispatch<SetStateAction<number>>) {
  const newColorIndex: number = (currentColor + 1);
  if(newColorIndex > colors.length -1) {
    setCurrentColor(0)
  } else {
    setCurrentColor(newColorIndex)
  }
  e.currentTarget.style.backgroundColor = colors[currentColor];
}

export default function Stripe({index, color, currentColor, setCurrentColor, colors}: PropsType) {

  return (
    <div
      key={index}
      className="transition-colors duration-300"
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => changeColor(e, colors, currentColor, setCurrentColor)}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    />
  )
}