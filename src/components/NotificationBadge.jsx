import { useEffect } from "react";
import notificationSound from "../assets/notification.mp3";

const NotificationBadge = ({ count }) => {
  useEffect(() => {
    if (count > 0) {
      const audio = new Audio(notificationSound);
      audio.play();
    }
  }, [count]);

  return (
    <div className="relative inline-block">
      <span className="text-white">Notifications</span>
      {count > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-2">
          {count}
        </span>
      )}
    </div>
  );
};

export default NotificationBadge;
