
export const LearnInline = () => {

    const btnStyle = {
        color: 'blue',
        backgroundColor: 'orange'
    }
  return (
    <>
    <p style={{'fontSize':'25px', 'color': 'red'}}>Hello React + Vite + GeekyShows </p>
    <button style={btnStyle}>ChangeColor</button>
    <button style={{...btnStyle, ...{'fontSize':'25px', 'color': 'red'}} }>Button 2</button>

    </>
  )
}
