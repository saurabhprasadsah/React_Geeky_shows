
export const LearnEvent = () => {
    const handleclick = (e) =>{
        e.preventDefault()
        console.log("Button clicked 1");     
    }

    const handleclick2 = (myid) =>{
        console.log("Button clicked 2", myid);     
    }

  return (
    <>
    {/* without arguments */}
    <button onClick={handleclick}> Click 1 </button>

    {/* with arguments */}
    <button onClick={(e) => handleclick2("EMP:123456789")}>Click 2</button>
    </>

  )
}
