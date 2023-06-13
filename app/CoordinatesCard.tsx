import { GrLocation } from "react-icons/gr"

type CoordinatesCardProps = {
  id: string
  name: string
  latitude: number
  longitude: number
  altitude: number
  status: string
}

export default function CoordinatesCard({
  id,
  name,
  latitude,
  longitude,
  altitude,
  status,
}: CoordinatesCardProps) {
  return (
    <div
      className={`p-5 flex items-center justify-between ${
        status === "danger"
          ? "bg-red-200"
          : status === "warning"
          ? "bg-amber-200"
          : "bg-green-200"
      } rounded-lg`}
    >
      <div className="w-full space-y-2">
        <div className="space-x-2">
          <span className="font-bold">{name}</span>
          <span className="font-medium text-xs">{id}</span>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="text-lg">
            <GrLocation />
          </span>
          <span className="font-medium">Latitude:</span> {latitude}
          <span className="font-medium">Longitude:</span> {longitude}
          <span className="font-medium">Altitude:</span> {altitude}
        </div>
      </div>
    </div>
  )
}
