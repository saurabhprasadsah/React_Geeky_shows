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
import { LearnMap } from "../components/LearnMap";
import { LearnInline } from "../components/LearnInline";
import { ExternalCss1 } from "../components/ExternalCss1";
import { ExternalCss2 } from "../components/ExternalCss2";
import { LearnCSSModule } from "../components/LearnCSSModule";
import{LearnCSSModule2} from "../components/LearnCSSModule2";


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
     {/* <LearnConditionalRendring/> */}
     {/* < LearnMap/> */}
     {/* <LearnInline/> */}
     {/* <ExternalCss1/>
     <ExternalCss2/> */}

     <LearnCSSModule/>
     <LearnCSSModule2/>




    </>
  )
}

export default App
