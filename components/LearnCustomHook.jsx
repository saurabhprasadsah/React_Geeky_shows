

import { useCoustomCounter } from "../hooks/useCoustomCounter"

export const LearnCustomHook = () => {

  const { count, handleIncrement } = useCoustomCounter()

  return (
    <>
      <h1>
        Count:{count}
      </h1>
      <button onClick={handleIncrement}> Increment</button>
    </>
  )
}
