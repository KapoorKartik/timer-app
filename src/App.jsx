import { Alert, Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState({
    start: null,
    end: null,
  });

  const handleClick = () => {
    setStart(!start);
    if (start === true) {
      setTime({
        start: null,
        end: null,
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
  // if (start > end) {
  //   return (
  //     <Alert variant="filled" severity="error">
  //       Enter Valid Start Time and End Time
  //     </Alert>
  //   );
  // }
  // console.log("time", time);
  return (
    <div className="App">
      {+time.end - +time.start <= 0 ? (
        <Alert variant="filled" severity="error">
          Enter Valid Start Time and End Time
        </Alert>
      ) : null}
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
