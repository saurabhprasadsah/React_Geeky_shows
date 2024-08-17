import { Learncomponents } from "../components/Learncomponents"
import { LearnEvent } from "../components/LearnEvent";
import { Learnjsx } from "../components/Learnjsx"
import { LearnLiftingstateup } from "../components/LearnLiftingstateup";
import { Learnprops } from "../components/Learnprops"
import { LearnState } from "../components/LearnState";

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

     <LearnState/>

    </>
  )
}
export default App
