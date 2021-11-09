import React, { useState, useEffect } from "react";

function getCurrentTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime;
}
function Clock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
  });
  return <div id="clock">{time}</div>;
}

export default Clock;
