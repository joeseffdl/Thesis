import { GrLocation } from "react-icons/gr";

type CoordinatesCardProps = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  altitude: number;
  status: string;
};

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
        <div className="flex gap-2 items-center font-medium text-xs lg:text-base">
          <div>
            <span className="text-lg">
              <GrLocation />
            </span>
          </div>
          <div>Latitude: {latitude}</div>
          <div>Longitude: {longitude}</div>
          <div>Altitude: {altitude}</div>
        </div>
      </div>
    </div>
  );
}
