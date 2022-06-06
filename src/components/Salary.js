import "../css/Salary.css";

function Salary() {
  const salary = Number(JSON.parse(localStorage.getItem("salary")));

  return (
    <div id="salary">${salary}</div>
  );
}

export default Salary;
