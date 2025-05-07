import Tool from './Tool'

export default function Toolbox() {
  return (
    <div className='absolute bottom-0 left-0 w-full'>
      <h4 className='tool-title text-[32px] text-center pb-5'>Ma boîte à outils:</h4>
      <div className='flex justify-between'>
        <Tool />
        <Tool />
        <Tool />
        <Tool />

        <Tool />
        <Tool />
        <Tool />
        <Tool />
      </div>
    </div>
  )
}