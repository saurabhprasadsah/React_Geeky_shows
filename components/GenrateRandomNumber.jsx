import { memo } from "react";

export const GenrateRandomNumber = memo(({randomNumber, genrateRandomNumber}) =>{
    console.log("Genrate number componets Received")

    return(
        <>
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={genrateRandomNumber}> Genrate Random Number </button>
        </>
    )
})
