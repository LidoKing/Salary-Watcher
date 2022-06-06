import "../css/Salary.css";
import { useState, useEffect } from "react";

function Salary() {
  const [displaySalary, setDisplaySalary] = useState("");

  const salary = Number(JSON.parse(localStorage.getItem("salary")));
  const hours = Number(JSON.parse(localStorage.getItem("hours")));
  const start = 43200; // 12pm
  const end = 64800; // 6pm

  const workingSec = (30 - Math.floor(30/7) * 2) * hours * 3600;
  const salaryPerSec = Math.round(((salary / workingSec) + Number.EPSILON) * 100) / 100;

  const getAmountToDisplay = () => {
    const d = new Date();
    const h = d.getHours() + 1;
    const m = d.getMinutes() + 1;
    const s = d.getSeconds() + 1;
    const currentTimeInSec = h * 3600 + m * 60 + s

    if (currentTimeInSec <= start) {
      setDisplaySalary(0);
    } else if (currentTimeInSec >= end) {
      setDisplaySalary(salary);
    } else {
      setDisplaySalary((Math.round((((currentTimeInSec - start) * salaryPerSec) + Number.EPSILON) * 100) / 100).toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2}));
    }
  }

  useEffect(() => {
    const interval = setInterval(getAmountToDisplay, 1000);

    return () => clearInterval(interval);
  })

  /*useEffect(() => {
    if (displaySalary < salary) {

    }
  });*/

  return (
    <div id="salary">${displaySalary}</div>
  );
}

export default Salary;
