import React from 'react';
import { useDispatch } from 'react-redux'

const ComB = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>+1</button>
      <button onClick={() => dispatch({ type: "update", payload: 10 })} >+10</button>
      <button onClick={() => dispatch({ type: "reset" })} >重置</button>
    </div>
  )
}

export default ComB