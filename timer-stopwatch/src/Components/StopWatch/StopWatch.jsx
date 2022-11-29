import { useState } from "react";
import useStopWatch from "../../CustomHook/useStopWatch";
import styles from './StopWatch.module.css'
const Stopwatch = ({ active }) => {
  const { time,ms,startTimer,stopTimer,resetTimer}=useStopWatch();
  const [butToggel,setButToggel]=useState(true);
  const handelButToggel=()=>{
    if(butToggel){
      startTimer();
      setButToggel(false);
    }
    else{
      stopTimer();
      setButToggel(true);
    }
  }
  return (
    <div>
      {active && (
        <div>
          {/* <p className={styles.cont}>{time}<span style={{fontSize:'30px'}}>{ms}</span></p> */}
          <div className={styles.cont}>
            <p>{time}</p>
            <p>{ms}</p>
          </div>
          <div className={styles.butStW}>
          <button onClick={handelButToggel}>
              {butToggel ? "Start" : "Stop"}
            </button>
            <button onClick={resetTimer}>Reset</button>
          </ div>
        </div>
      )}
    </div>
  );
};
export default Stopwatch;
