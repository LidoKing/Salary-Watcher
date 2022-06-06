//import Select from "react-select";
import "../css/Form.css";
import { useState } from "react";

/*
const options = [
  { value: 'HKD', label: 'HKD' },
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' }
]
*/

function Form() {
  const [inputs, setInputs] = useState("");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("salary", JSON.stringify(inputs.salary));
    localStorage.setItem("hours", JSON.stringify(inputs.hours));
    localStorage.setItem("startTime", JSON.stringify(Date.now()));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="salary" value={inputs.salary || ""} onChange={handleChange} />
      <input type="number" name="hours" value={inputs.hours || ""} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
