import Image from 'next/image';
import { ToolType } from '@/app/type/ToolType';

export default function Tool({name, color, logo}: ToolType) {

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full lg:h-[180px] h-[150px] relative hover:brightness-105 transition-all duration-200" style={{ backgroundColor: color}}>
      <Image src={logo} alt='Technologies' width={name === 'Figma' || name === 'TypeScript' ? 40 : 70} height={name === 'Figma' || name === 'TypeScript' ? 40 : 70} />
      <p className='tool-title absolute bottom-4'>{name}</p>
    </div>
  )
}