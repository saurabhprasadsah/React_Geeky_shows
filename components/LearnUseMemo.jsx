import { useState, useMemo } from "react";

export const LearnUseMemo = () => {
    const [count, setCount] = useState(0);
    const handleIncreasecount = () => {
        console.log("Increase count Functions");
        setCount(count + 1)
    }

    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Genrate random Number")
        setRandomNumber(newRandomNumber)
    };

    // const isCountTen = () =>{
    //     console.log("IscountTenCalled")
    //     if(count === 10){
    //         return "YES"
    //     }

    //     return "No"
    // }

    const isCountTen = useMemo(() => {
        console.log("IscountTenCalled")
        if (count === 10) {
            return "YES"
        }
        return "No"
    }, [count])



    return (
        <>

            {/* <h1> is {count} equal to 10 ? ---{isCountTen()} </h1> */}

            <h1> is {count} equal to 10 ? ---{isCountTen} </h1>

            <button onClick={handleIncreasecount}>Increase Count</button>
            {/* <button onClick={handleCount}>Reset Count</button> */}

            <hr />

            <h2>Random Number: {randomNumber}</h2>
            <button onClick={generateRandomNumber}>Genrate Random Number</button>


        </>
    )
}
