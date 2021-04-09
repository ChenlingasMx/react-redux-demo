import React from 'react';
import { useSelector } from 'react-redux'
import ComB from '../ComB/index'
const ComA = ({ route }) => {
  const { ComBReducer } = useSelector(state => state)
  return (
    <div>
      <h1>ComA</h1>
      <div>{ComBReducer.count}</div>
      <ComB />
    </div>
  )
}

export default ComA