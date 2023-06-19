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
  const notificationSound = new Audio("sounds/notify.wav")
  const alertSound = new Audio("sounds/alert.wav")

  if (accidents && accidents > 0) {
    toast.error(
      `${accidents} ${accidents > 1 ? "accidents" : "accident"} detected!`,
      {
        icon: "🚨",
        position: position,
        style: {
          background: "#FECACA",
          padding: "16px",
          fontWeight: "500",
        },
      }
    )
    alertSound.play()
  }

  if (warnings && warnings > 0) {
    toast.error(
      `${warnings} ${warnings > 1 ? "warnings" : "warning"} detected!`,
      {
        icon: "⚠️",
        position: position,
        style: {
          background: "#FDE68A",
          padding: "16px",
          fontWeight: "500",
        },
      }
    )
    alertSound.play()
  }
  if (notifiedWorkers && notifiedWorkers > 0) {
    toast.success(
      `${notifiedWorkers} ${
        notifiedWorkers > 1 ? "workers" : "worker"
      } notified!`,
      {
        position: position,
        icon: "👷",
        style: {
          padding: "16px",
          fontWeight: "500",
        }
      }
    );
    notificationSound.play()
  }
}
