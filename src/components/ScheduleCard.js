import TaskCard from "./TaskCard";

import { Montserrat, Lato } from 'next/font/google'

const monsterrat = Montserrat({ weight: 'variable', subsets: ['latin'] })
const lato400 = Lato({ weight: '400', subsets: ['latin'] })

export default function ScheduleCard() {
  return (
    <div className='flex flex-col'>
      <div className={`${monsterrat.className} flex flex-row px-8 pt-5 pb-4 justify-between`}>
        <div className='font-bold text-lg'>
          Todays Schedule
        </div>
        <div className='flex flex-row items-center text-sm'>
          <a href="#" className='pr-1 text-[#858585]'>
            See All
          </a>
          <div className='border-t-2 border-r-2 h-1.5 w-1.5 rotate-45 border-[#858585]'>
          </div>
        </div>
      </div>
      <div className={`${lato400.className} flex flex-col gap-y-5`}>
        <TaskCard
          lineColor='#9BDD7C'
          title='Meeting with suppliers from Kuta Bali'
          time='14.00-15.00'
          location='at Sunset Road, Kuta, Bali'
        />
        <TaskCard
          lineColor='#6972C3'
          title='Check operation at Giga Factory 1'
          time='18.00-20.00'
          location='at Central Jakarta'
        />
      </div>
    </div>
  )
}