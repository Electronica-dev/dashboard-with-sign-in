import Image from "next/image";

const CustomImage = ({ svgFilename, width = 18, height = 18 }) => {
  return (
    <Image
      src={`${svgFilename}.svg`}
      alt={`${svgFilename}`}
      width={width}
      height={height}
    />
  )
}

export default CustomImage;