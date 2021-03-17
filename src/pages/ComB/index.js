import React from 'react';
import { useDispatch } from 'react-redux'
import { ComBAddAction, ComUpdateAction } from '../../action/ComB'

const ComB = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(ComBAddAction)}>+1</button>
      <button onClick={() => dispatch(ComUpdateAction({ count: 10 }))} >变成10</button>
      <button onClick={() => dispatch({ type: "reset" })} >重置</button>
    </div>
  )
}

export default ComB