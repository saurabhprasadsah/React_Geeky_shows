import { memo } from "react";

export const GenrateRandomNumber = memo(({randomNumber, GenrateRandomNumber}) =>{
    console.log("Genrate number number componnets received")

    return(
        <>
        <h2>Random Number: {randomNumber}</h2>
        <button onClick={GenrateRandomNumber}> Genrate Random Number </button>
        </>
    )
})
