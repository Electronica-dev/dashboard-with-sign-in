import PieChart from './PieChart'
import { Montserrat } from 'next/font/google'
import Product from './Product'

const monsterrat = Montserrat({ weight: 'variable', subsets: ['latin'] })

export default function ProductCard() {
  return (
    <>
      <div className={`${monsterrat.className} flex flex-row justify-between px-8 pt-5 pb-4`}>
        <div className='font-bold text-lg'>
          Top Products
        </div>
        <div>
          <select name="months" id="select-months-two" className='text-sm text-[#858585] ml-[-5px]'>
            <option defaultValue="May-June">May - June 2021</option>
          </select>
        </div>
      </div>
      <div className='flex flex-row h-[60%]'>
        <div className='flex relative h-full w-[50%]'>
          <PieChart />
        </div>
        <div className='flex flex-col h-full justify-around'>
          <Product
            iconColor='#9BDD7C'
            productName='Basic Tees'
            sharePercentage='55%'
          />
          <Product
            iconColor='#F6DC7D'
            productName='Custom Short Pants'
            sharePercentage='31%'
          />
          <Product
            iconColor='#EE8484'
            productName='Super Hoodies'
            sharePercentage='14%'
          />
        </div>
      </div>
    </>
  )
}