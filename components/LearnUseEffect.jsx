import { useEffect, useState } from "react"

export const LearnUseEffect = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1)
    }

    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber)
    };

    // it runs the each time when component is mounted and re-render
    // useEffect(() => {
    //     console.log("useEffect callled")
    // })

    // it runs the each time when component is mounted ([] means no dependencies)

    // useEffect(() => {
    //     console.log("useEffect callled")
    // }, [])

    // it runs the when the component is mounted and whenever dependence change
    
    useEffect(() => {
        console.log("useEffect callled")
    }, [count, randomNumber])

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleCount}>Increase Count</button>
            {/* <button onClick={handleCount}>Reset Count</button> */}

            <hr />
            <h2>Random Number: {randomNumber}</h2>
            <button onClick={generateRandomNumber}>Genrate Random Number</button>
        </>
    )

}