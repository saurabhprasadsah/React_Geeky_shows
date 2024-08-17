import { useState } from "react";
export const LearnState = () => {

const [ num, setNum] = useState(0)
// console.log(num)

const handlenum = () =>{
    setNum(9)
}

const [position, setPositon] = useState({x: 1, y:2})
console.log(position)

const handleposition = () =>{
    setPositon({x:3, y:5})
}


  return (
    <>
    <h1>Number : {num}</h1>
    <button onClick={handlenum}>Change Number</button>
    <h1>Position: {position.x} and  {position.y}</h1>
    <button onClick={handleposition}>Change Positons</button>
    </>

  )
}
