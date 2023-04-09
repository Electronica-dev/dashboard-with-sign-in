import Image from 'next/image'

const LogoButton = ({ svgFilename, text}) => {
  return (
    <button className='flex border-8 border-white bg-white rounded-xl px-4'>
    <span className='self-center mr-2'>
      <Image
        src={`${svgFilename}.svg`}
        alt={`${svgFilename}`}
        width={14}
        height={14}
      />
    </span>
    <div>{text}</div>
    </button>
  )
}

export default LogoButton