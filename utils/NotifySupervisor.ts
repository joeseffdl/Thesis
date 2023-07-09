import toast from "react-hot-toast";

type NotifySupervisorProps = {
  accidents?: number;
  warnings?: number;
  notifiedWorkers?: number;
  emergencies?: number;
  currentlyWorn?: number;
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
  emergencies,
  currentlyWorn,
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
      }
    )
    notificationSound.play()
  }
  if (emergencies && emergencies > 0) {
    toast.error(
      `${emergencies} ${
        emergencies > 1 ? "emergencies" : "emergency"
      } detected!`,
      {
        icon: "🚑",
        position: position,
        style: {
          background: "#FECACA",
        },
      }
    )
    alertSound.play()
  }
  if (currentlyWorn && currentlyWorn > 0) {
    toast.success(
      `Detect ${currentlyWorn > 1 ? "NHUs: " : "NHU: "} ${currentlyWorn} ${
        currentlyWorn > 1 ? "workers" : "worker"
      }`,
      {
        position: position,
        icon: "👷",
      }
    )
    notificationSound.play()
  }
}
