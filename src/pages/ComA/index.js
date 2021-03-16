import React from 'react';
import { useSelector } from 'react-redux'

const ComA = () => {
  const { ComAReducer } = useSelector(state => state)
  return (
    <div>{ComAReducer.count}</div>
  )
}

export default ComA