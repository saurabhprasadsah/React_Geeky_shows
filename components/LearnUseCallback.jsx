import { useState, useCallback } from "react";
import { GenrateRandomNumber  } from "./GenrateRandomNumber";

export const LearnUseCallback = () => {
    const [count, setCount ] = useState(0)
    const handleIncrementCount = () =>{
        setCount((prevCount) => prevCount + 1)
    }

    const [randomNumber, setRandomNumber] =  useState(0);
    const genrateRandomNumber = () =>{
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber)
    }

  return (
    <>
    <GenrateRandomNumber randomNumber={randomNumber} genrateRandomNumber={genrateRandomNumber} />
    <h1>Count: {count}</h1>
    <button onClick={handleIncrementCount}> Increase Count </button>
    </>
  )
}
