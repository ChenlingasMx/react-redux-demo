import React from 'react';
import { useSelector } from 'react-redux'

const ComA = () => {
  const { ComBReducer } = useSelector(state => state)
  return (
    <div>{ComBReducer.count}</div>
  )
}

export default ComA