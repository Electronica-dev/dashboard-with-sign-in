import { Montserrat, Lato } from 'next/font/google'

const monsterrat = Montserrat({ weight: 'variable', subsets: ['latin'] })
const lato400 = Lato({ weight: '400', subsets: ['latin'] })

export default function Product({ iconColor, productName, sharePercentage }) {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row items-center'>
        <div className='w-3 h-3 rounded-full' style={{backgroundColor: iconColor}}></div>
        <div className={`${monsterrat.className} font-bold text-sm pl-2`}>
          {productName}
        </div>
      </div>
      <div className={`${lato400.className} text-xs text-[#858585] pl-5`}>
        {sharePercentage}
      </div>
    </div>
  )
}