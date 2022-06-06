import '../css/App.css';
import Form from "./Form";
import Salary from "./Salary";

function App() {
  return (
    <div className="App">
      <h1 id="title">the only salary tracker you need</h1>
      <Form />
      <Salary />
    </div>
  );
}

export default App;
