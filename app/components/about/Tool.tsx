import Image from 'next/image';
import { ToolType } from '@/app/type/ToolType';

export default function Tool({name, color, logo}: ToolType) {
  console.log(color);
  console.log(color.split('"'));
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-1/8 h-[180px] relative" style={{ backgroundColor: color}}>
      <Image src={logo} alt='Technologies' width={name === 'Figma' || name === 'TypeScript' ? 40 : 70} height={name === 'Figma' || name === 'TypeScript' ? 40 : 70} />
      <p className='tool-title absolute bottom-4'>{name}</p>
    </div>
  )
}