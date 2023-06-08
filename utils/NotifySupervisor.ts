import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

type NotifySupervisorProps = {
  accidents?: number;
  warnings?: number;
  notifiedWorkers?: number;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
};

export default function NotifySupervisor({
  accidents,
  warnings,
  notifiedWorkers,
  position,
}: NotifySupervisorProps) {
  if (accidents && accidents > 0) {
    toast.error(
      `${accidents} ${accidents > 1 ? "accidents" : "accident"} detected!`,
      {
        icon: "🚨",
        position: position,
        style: {
          background: "#FECACA",
        },
      }
    );
  }
  if (warnings && warnings > 0) {
    toast.error(
      `${warnings} ${warnings > 1 ? "warnings" : "warning"} detected!`,
      {
        icon: "⚠️",
        position: position,
        style: {
          background: "#FDE68A",
        },
      }
    );
  }
  if (notifiedWorkers && notifiedWorkers > 0) {
    toast.success(
      `${notifiedWorkers} ${
        notifiedWorkers > 1 ? "workers" : "worker"
      } notified!`,
      {
        position: position,
        icon: "👷",
      }
    );
  }
}
