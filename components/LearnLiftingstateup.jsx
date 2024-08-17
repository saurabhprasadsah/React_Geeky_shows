
export const LearnLiftingstateup = (props) => {
    const handleClick = (e) =>{
        e.preventDefault()
        let data = " I AM CHILD DATA"
        props.mydata(data)

    }
  return (
    <>
      <button onClick={handleClick}>Click 1</button>

    </>
  )
}
