import { Learncomponents } from "../components/Learncomponents";
import { LearnEvent } from "../components/LearnEvent";
import { Learnjsx } from "../components/Learnjsx";
import { LearnLiftingstateup } from "../components/LearnLiftingstateup";
import { Learnprops } from "../components/Learnprops";
import { LearnState } from "../components/LearnState";
import { CounterApp } from "../components/counterApp";
import { LearnUseEffect } from "../components/LearnuseEffect";
import { LearnUseMemo } from "../components/LearnUseMemo";
import { LearnUseCallback } from "../components/LearnUseCallback";
import { GenrateRandomNumber } from "../components/GenrateRandomNumber";

import { LearnCustomHook } from "../components/LearnCustomHook";
import { LearnConditionalRendring } from "../components/LearnConditionalRendring";


function App() {
  let roll = 101;
  const getData = (data) =>{
    console.log(data)
  }
  return (
    <>
    {/* <Learncomponents/>
    <Learnjsx/> 
    <Learnprops name="saurah kumar" roll={roll}/> */}
     {/* <LearnEvent/> */}
     {/* <LearnLiftingstateup  mydata={getData}/> */}
     {/* <LearnState/> */}
     {/* <CounterApp/> */}
     {/* <LearnUseEffect /> */}
     {/* <LearnUseMemo/> */}

     {/* <LearnUseCallback/>
     <GenrateRandomNumber/> */}
     
     {/* <LearnCustomHook/> */}

     <LearnConditionalRendring/>

    </>
  )
}

export default App
