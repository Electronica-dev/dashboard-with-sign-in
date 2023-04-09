import CustomImage from '@latest/components/CustomImage'
import StatsCard from '@latest/components/StatsCard'
import LineChart from '@latest/components/LineChart'
import { Montserrat, Lato } from 'next/font/google'

import Image from 'next/image'
import ScheduleCard from '@latest/components/ScheduleCard'
import ProductCard from '@latest/components/ProductCard'

const monsterrat = Montserrat({ weight: 'variable', subsets: ['latin'] })
const lato400 = Lato({ weight: '400', subsets: ['latin'] })

export default function Dashboard() {
  return (
    <>
      <main className="h-screen">
        <div className="flex flex-row h-screen bg-[#F5F5F5]">
          <div className="flex basis-1/5 flex-col bg-black h-full border-[#F5F5F5] border-[30px] rounded-[55px] p-10">
            <div className={`flex ${monsterrat.className} text-white text-3xl justify-start font-bold pb-10`}>
              Board.
            </div>
            <ul className={`${monsterrat.className} text-white [&>li]:py-4 [&>li>button]:flex [&>li>button]:items-center [&>li>button]:space-x-3 font-light`}>
              <li className='font-bold'>
                <button>
                  <CustomImage svgFilename='dashboard_icon'/>
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button>
                  <CustomImage svgFilename='transaction_icon'/>
                  <span>Transactions</span>
                </button>
              </li>
              <li>
                <button>
                  <CustomImage svgFilename='schedule_icon'/>
                  <span>Schedules</span>
                </button>
              </li>
              <li>
                <button>
                  <CustomImage svgFilename='user_icon'/>
                  <span>Users</span>
                </button>
              </li>
              <li>
                <button>
                  <CustomImage svgFilename='setting_icon'/>
                  <span>Settings</span>
                </button>
              </li>
            </ul>
            <ul className={`${monsterrat.className} text-white mt-auto text-sm font-light [&>li]:py-2`}>
              <li>
                <button>
                  Help
                </button>
              </li>
              <li>
                <button>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="flex basis-4/5 flex-col gap-y-7 py-4 pr-4 bg-[#F5F5F5] h-full border-[30px] border-[#F5F5F5]">
            <div className={`flex flex-row ${monsterrat.className}`}>
              <div className='font-bold text-2xl'>
                Dashboard
              </div>
              <div className='flex flex-row ml-auto items-center gap-x-6'>
                <div className='relative'>
                  <input type="text" className={`${lato400.className} rounded-lg w-44 h-[30px] text-sm text-[#B0B0B0] pl-3 pr-8`} placeholder='Search...'/>
                  <button>
                    <Image
                      src="/search-icon.svg"
                      alt="search-icon"
                      width={12}
                      height={12}
                      className="absolute top-2.5 right-3"
                    />
                  </button>
                </div>
                <div>
                  <CustomImage svgFilename='notification-bell' height={20}/>
                </div>
                <div className="overflow-hidden w-[30px] h-[30px] relative rounded-full">
                  <Image
                    src="/profile-photo.jpg"
                    alt="profile-photo"
                    width={72}
                    height={72}
                    className="absolute max-w-[175%] top-[-9px] left-[-9px]"
                  />
                </div>
              </div>
            </div>
            <div className={`flex flex-row gap-x-10 h-[15%] justify-between ${lato400.className}`}>
              <StatsCard
                svgFilename='revenue-icon'
                width={26}
                height={12}
                backgroundColor='#DDEFE0'
                metricName='Total Revenues'
                metricValue='$2,129,430'
              />
              <StatsCard
                svgFilename='total-transactions-icon'
                width={21}
                height={24}
                backgroundColor='#F4ECDD'
                metricName='Total Transactions'
                metricValue='1,520'
              />
              <StatsCard
                svgFilename='total-likes-icon'
                width={23}
                height={24}
                backgroundColor='#EFDADA'
                metricName='Total Likes'
                metricValue='9,521'
              />
              <StatsCard
                svgFilename='total-users-icon'
                width={37}
                height={24}
                backgroundColor='#DEE0EF'
                metricName='Total Users'
                metricValue='892'
              />
            </div>
            <div className='h-[40%] w-full bg-white rounded-2xl'>
              <div className='flex flex-row px-8 pt-5 pb-4 justify-between'>
                <div className={`${monsterrat.className} flex flex-col`}>
                  <div className='font-bold text-lg'>
                    Activities
                  </div>
                  <div>
                    <select name="months" id="select-months" className='text-sm text-[#858585] ml-[-5px]'>
                      <option defaultValue="May-June">May - June 2021</option>
                    </select>
                  </div>
                </div>
                <div className={`${lato400.className} flex flex-row items-center [&>*]:px-5 text-sm`}>
                  <div className='flex flex-row items-center'>
                    <div className='bg-[#E9A0A0] w-2 h-2 rounded-full'></div>
                    <div className='pl-2'>Guest</div>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div className='bg-[#9BDD7C] w-2 h-2 rounded-full'></div>
                    <div className='pl-2'>User</div>
                  </div>
                </div>
              </div>
              <div className='relative h-[70%]'>
                <LineChart />
              </div>
            </div>
            <div className='flex flex-row h-[30%] justify-between'>
              <div className='w-[48%] bg-white rounded-2xl h-full'>
                <ProductCard />
              </div>
              <div className='w-[48%] bg-white rounded-2xl h-full'>
                <ScheduleCard />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
