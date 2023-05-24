import Image from "next/image"

type WeatherConditionProps = {
  source?: string
  name?: string
  width?: number
  height?: number
  condition: string
  label: string
}

export default function WeatherCondition({
  source,
  name,
  width,
  height,
  condition,
  label,
}: WeatherConditionProps) {
  return (
    <div className="flex items-center justify-center">
      {source && (
        <Image
          src={source}
          alt={`${name} Icon`}
          width={width}
          height={height}
        />
      )}
      <div className="font-bold text-4xl">
        {condition} {label}
      </div>
    </div>
  )
}
