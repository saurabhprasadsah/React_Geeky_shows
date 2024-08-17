
// export const Learnprops = (props) => {
//   return (
//     <>
//         <h1>Hello Props</h1>
//         <h2>{props.name}</h2>
//         <h1>{props.roll}</h1>
//     </>
//   )
// }


//destructuring the element of object using props....

export const Learnprops = ({name, roll}) => {
    return (
      <>
          <h1>Hello Props</h1>
          <h2>{name}</h2>
          <h1>{roll}</h1>
      </>
    )
  }
  
