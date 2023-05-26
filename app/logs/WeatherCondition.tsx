type WeatherConditionProps = {
  source?: any
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
    <>
      <div className="flex items-center justify-between w-full">
        {source && (
          <span
            className="grid place-items-center w-fit p-2"
          >
            {source}
          </span>
        )}
        <div className="w-full text-center text-2xl">
          {condition} {label}
          <div className="text-sm">{name}</div>
        </div>
      </div>
    </>
  )
}
