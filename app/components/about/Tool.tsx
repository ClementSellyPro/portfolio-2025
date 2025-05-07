import Image from 'next/image';

export default function Tool() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-1/8 h-[180px] bg-[#DD0031]'>
      <Image src={'/icon/angular.svg'} alt='Technologies' width={50} height={50} />
      <p className='tool-title'>Next JS</p>
    </div>
  )
}