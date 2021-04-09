import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const ComC = () => {
  const { ComCReducer: { name } } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({ type: 'updateComC', payload: { name: 'ComC被点击了' } })
  }
  return (
    <div>
      <h1>ComC</h1>
      {name}
      <button onClick={handleClick.bind(this)}>点击</button>
    </div>
  )
}

export default ComC