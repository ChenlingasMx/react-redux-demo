import React from 'react';
import { useSelector } from 'react-redux'
const ComC = () => {
  const { ComCReducer: { name } } = useSelector(state => state)
  return (
    <div>
      {name}
    </div>
  )
}

export default ComC