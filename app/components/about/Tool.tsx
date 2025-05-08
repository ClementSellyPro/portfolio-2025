import Image from 'next/image';
import { ToolType } from '@/app/type/ToolType';

export default function Tool({name, color, logo}: ToolType) {
  console.log(color);
  console.log(color.split('"'));
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-1/8 h-[180px]" style={{ backgroundColor: color}}>
      <Image src={logo} alt='Technologies' width={50} height={50} />
      <p className='tool-title'>{name}</p>
    </div>
  )
}