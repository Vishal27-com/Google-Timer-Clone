import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Stopwatch from "./Components/StopWatch/StopWatch";
import Timer from "./Components/Timer/Timer";
import "./styles.css";

export default function App() {
  const [active, setActive] = useState(false);
  const stateHandler = (val) => {
    val ? setActive(false) : setActive(true);
  };
  return (
    <div className="App">
      <Navbar active={active} stateHandler={stateHandler} />
      <div className="cont">
        <Timer active={active} />
        <Stopwatch active={active} />
      </div>
    </div>
  );
}
