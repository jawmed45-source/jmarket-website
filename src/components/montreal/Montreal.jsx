import { useEffect, useState } from "react";

const MontrealTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Toronto", // Montreal uses same timezone
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(t);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        Montreal
      </span>
      <span className="font-[font2] text-2xl tracking-tight">
        {time}
      </span>
    </div>
  );
};

export default MontrealTime;