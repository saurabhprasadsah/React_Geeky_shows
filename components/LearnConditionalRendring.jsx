

import { useState } from "react"

export const LearnConditionalRendring = () => {
    const status = true
    const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      {status && <h1>Geekyshows</h1>}
      {isLogin ? 
      (<>
      <h1> Dashboard page </h1>
      <button onClick={() => setIsLogin(false)}> Logout</button>
      </>) : 

      (<> 
      <h1>Login Page</h1>
      <button onClick={() => setIsLogin(true)}>Login</button>

      </>)
      }
    </>
  )
}
