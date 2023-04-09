import Image from 'next/image'
import { Open_Sans } from 'next/font/google'

const sans = Open_Sans({ weight: 'variable', subsets: ['latin'] })

const StatsCard = ({ svgFilename, width, height, backgroundColor, metricName, metricValue}) => {
  return (
    <div className='rounded-2xl w-full h-full relative' style={{backgroundColor: backgroundColor}}>
      <Image
        src={`/${svgFilename}.svg`}
        alt={`${svgFilename}`}
        width={width}
        height={height}
        className="absolute top-5 right-5"
      />
      <div className='absolute bottom-5 left-5'>
        <div className=' font-medium'>
          {metricName}
        </div>
        <div className={`font-bold text-3xl ${sans.className}`}>
          {metricValue}
        </div>
      </div>
    </div>
  )
}

export default StatsCard