import { React, useState } from "react";

const SaleTimer = () => {
  let endDate = new Date("Dec 16, 2023 10:37:25").getTime();
  const [timeLeft, setTimeLeft] = useState("");
  setInterval(function () {
    const timer = document.getElementById("timer");
    var now = new Date().getTime();
    var t = endDate - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    setTimeLeft(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  }, 1000);

  return (
    <div className="alert alert-warning mb-0 text-center" role="alert">
      Sale ends in{" "}
      <span id="timer" className="fw-bold">
        {timeLeft}
      </span>
      ! Don't miss out!
    </div>
  );
};

export default SaleTimer;
