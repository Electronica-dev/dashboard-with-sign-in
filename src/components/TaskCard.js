export default function TaskCard({ lineColor, title, time, location}) {
  return (
    <div className='flex flex-row px-8'>
      <div className='h-inherit w-1.5' style={{backgroundColor: lineColor}}></div>
      <div className='flex flex-col pl-3'>
        <div className='text-[#666666] font-bold'>{title}</div>
        <div className='text-[#999999] text-sm'>{time}</div>
        <div className='text-[#999999] text-sm'>{location}</div>
      </div>
    </div>
  )
}