type WeatherConditionProps = {
  source?: any;
  name?: string;
  width?: number;
  height?: number;
  condition: string;
  label: string;
};

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
      <div className="flex flex-col items-center justify-between w-full text-lg">
        {source && (
          <span className="grid place-items-center w-fit p-2 text-4xl">{source}</span>
        )}
        <div className="w-full text-center whitespace-nowrap">
          {condition} {label}
          <div className="text-xs font-medium">{name}</div>
        </div>
      </div>
    </>
  );
}
