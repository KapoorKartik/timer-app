import { Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState({
    start: "",
    end: "",
  });

  const handleClick = () => {
    setStart(!start);
    if (start === true) {
      setTime({
        start: "",
        end: "",
      });
    }
  };
  // const [start, setStart] = useState();
  const handleChange = (e) => {
    // console.log("E", e.target);
    const { id, value } = e.target;
    // console.log("id, value:", id, value);

    setTime({
      ...time,
      [id]: value,
    });
  };
  // console.log("time", time);
  return (
    <div className="App">
      {start ? <Timer {...time} /> : <h1>Timer : 0</h1>}
      <br />
      <TextField
        value={time.start}
        margin="normal"
        type="number"
        id="start"
        label="Start Time"
        onChange={handleChange}
      />
      <br />
      <TextField
        value={time.end}
        margin="normal"
        type="number"
        id="end"
        label="End Time"
        onChange={handleChange}
      />
      {/* <button onClick={handleClick}>{start ? "Show" : "Hide"}</button> */}
      <br />
      <Button
        margin="normal"
        onClick={handleClick}
        variant="contained"
        color={start ? "error" : "success"}
      >
        {start ? "Reset" : "Start"}
      </Button>
    </div>
  );
}

export default App;
